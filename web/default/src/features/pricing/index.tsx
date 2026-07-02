/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { PublicLayout } from '@/components/layout'
import { PageTransition } from '@/components/page-transition'

import {
  EmptyState,
  LoadingSkeleton,
  ModelCardGrid,
  ModelDetailsDrawer,
  SearchBar,
} from './components'
import { DEFAULT_TOKEN_UNIT } from './constants'
import { usePricingData } from './hooks/use-pricing-data'
import type { PricingModel } from './types'

function getModelFamilyOrder(modelName: string): number {
  if (modelName.startsWith('claude-sonnet')) return 10
  if (modelName.startsWith('claude-opus')) return 20
  if (modelName.startsWith('claude-fable')) return 30
  if (modelName.startsWith('gemini') && modelName.includes('pro')) return 40
  if (modelName.startsWith('gemini') && modelName.includes('flash')) return 50
  if (modelName.startsWith('gpt-image')) return 70
  if (modelName.startsWith('gpt')) return 60
  return 999
}

function getVersionParts(modelName: string): number[] {
  return (modelName.match(/\d+(?:\.\d+)?/g) || []).flatMap((part) =>
    part.split('.').map((value) => Number(value))
  )
}

function compareVersionDesc(a: string, b: string): number {
  const aParts = getVersionParts(a)
  const bParts = getVersionParts(b)
  const length = Math.max(aParts.length, bParts.length)

  for (let index = 0; index < length; index += 1) {
    const aValue = aParts[index] ?? 0
    const bValue = bParts[index] ?? 0
    if (aValue !== bValue) return bValue - aValue
  }

  if (a.includes('mini') !== b.includes('mini')) {
    return a.includes('mini') ? 1 : -1
  }

  return a.localeCompare(b)
}

function sortModelsByFamilyNewest(models: PricingModel[]): PricingModel[] {
  return [...models].sort((a, b) => {
    const aName = a.model_name || ''
    const bName = b.model_name || ''
    const familyDiff = getModelFamilyOrder(aName) - getModelFamilyOrder(bName)
    if (familyDiff !== 0) return familyDiff
    return compareVersionDesc(aName, bName)
  })
}

export function Pricing() {
  const { t } = useTranslation()
  const [selectedModelName, setSelectedModelName] = useState<string | null>(
    null
  )
  const [searchInput, setSearchInput] = useState('')

  const {
    models,
    groupRatio,
    usableGroup,
    endpointMap,
    autoGroups,
    isLoading,
    priceRate,
    usdExchangeRate,
  } = usePricingData()

  const filteredModels = useMemo(() => {
    const query = searchInput.trim().toLowerCase()
    const source = models || []
    const result = !query
      ? source
      : source.filter((model) => {
      return [
        model.model_name,
        model.vendor_name,
        model.tags,
        ...(model.supported_endpoint_types || []),
      ]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(query))
    })
    return sortModelsByFamilyNewest(result)
  }, [models, searchInput])

  const handleModelClick = useCallback((modelName: string) => {
    setSelectedModelName(modelName)
  }, [])

  const selectedModel = useMemo(
    () =>
      selectedModelName
        ? (models || []).find(
            (model) => model.model_name === selectedModelName
          ) || null
        : null,
    [models, selectedModelName]
  )

  const handleClearAll = useCallback(() => {
    setSearchInput('')
  }, [])

  const clearSearch = useCallback(() => {
    setSearchInput('')
  }, [])

  if (isLoading) {
    return (
      <PublicLayout showMainContainer={false}>
        <div className='mx-auto w-full max-w-7xl px-4 pt-20 pb-10 sm:px-6 lg:px-8'>
          <LoadingSkeleton viewMode='card' />
        </div>
      </PublicLayout>
    )
  }

  return (
    <PublicLayout showMainContainer={false}>
      <PageTransition className='mx-auto w-full max-w-7xl px-4 pt-20 pb-10 sm:px-6 sm:pt-24 sm:pb-12 lg:px-8'>
        <header className='mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div className='space-y-1.5'>
            <h1 className='text-2xl font-bold tracking-normal text-slate-950 sm:text-3xl dark:text-foreground'>
              {t('Model Square')}
            </h1>
            <p className='text-muted-foreground text-xs sm:text-sm'>
              当前共开放 {models?.length || 0} 个模型，所有模型倍率统一 0.01。
            </p>
          </div>
          <SearchBar
            value={searchInput}
            onChange={setSearchInput}
            onClear={clearSearch}
            placeholder='搜索模型名称'
            className='w-full md:max-w-md'
          />
        </header>

        {filteredModels.length === 0 ? (
          <EmptyState
            searchQuery={searchInput}
            hasActiveFilters={Boolean(searchInput)}
            onClearFilters={handleClearAll}
          />
        ) : (
          <ModelCardGrid
            models={filteredModels}
            onModelClick={handleModelClick}
            priceRate={priceRate}
            usdExchangeRate={usdExchangeRate}
            tokenUnit={DEFAULT_TOKEN_UNIT}
            showRechargePrice={false}
          />
        )}

        {selectedModel && (
          <ModelDetailsDrawer
            open={Boolean(selectedModel)}
            onOpenChange={(open) => {
              if (!open) setSelectedModelName(null)
            }}
            model={selectedModel}
            groupRatio={groupRatio || {}}
            usableGroup={usableGroup || {}}
            endpointMap={
              (endpointMap as Record<
                string,
                { path?: string; method?: string }
              >) || {}
            }
            autoGroups={autoGroups || []}
            priceRate={priceRate ?? 1}
            usdExchangeRate={usdExchangeRate ?? 1}
            tokenUnit={DEFAULT_TOKEN_UNIT}
            showRechargePrice={false}
          />
        )}
      </PageTransition>
    </PublicLayout>
  )
}
