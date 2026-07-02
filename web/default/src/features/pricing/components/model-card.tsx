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
import { Copy } from 'lucide-react'
import { memo } from 'react'

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { getLobeIcon } from '@/lib/lobe-icon'
import { cn } from '@/lib/utils'

import type { PricingModel, TokenUnit } from '../types'
import type { ModelPerfBadgeData } from './model-perf-badge'

export interface ModelCardProps {
  model: PricingModel
  onClick: () => void
  priceRate?: number
  usdExchangeRate?: number
  tokenUnit?: TokenUnit
  showRechargePrice?: boolean
  perf?: ModelPerfBadgeData
}

function formatRatio(value: number | null | undefined) {
  return `$${Number(value ?? 0.01).toFixed(4)}`
}

function getBillingLine(model: PricingModel) {
  if (model.supported_endpoint_types?.includes('image-generation')) {
    return `1K ${formatRatio(model.image_ratio)} · 2K ${formatRatio(
      model.image_ratio
    )} · 4K ${formatRatio(model.image_ratio)}`
  }

  return `输入 ${formatRatio(model.model_ratio)} · 输出 ${formatRatio(
    model.completion_ratio
  )}`
}

function getBillingLabel(model: PricingModel) {
  return model.supported_endpoint_types?.includes('image-generation')
    ? '图片计费'
    : '按量计费'
}

function getIconName(model: PricingModel) {
  if (model.vendor_id === 2 || model.model_name.startsWith('claude')) {
    return 'Claude.Color'
  }
  if (model.vendor_id === 3 || model.model_name.startsWith('gemini')) {
    return 'Gemini.Color'
  }
  return 'OpenAI'
}

export const ModelCard = memo(function ModelCard(props: ModelCardProps) {
  const { copyToClipboard } = useCopyToClipboard()
  const icon = getLobeIcon(getIconName(props.model), 26)

  const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    copyToClipboard(props.model.model_name || '')
  }

  return (
    <article
      role='button'
      tabIndex={0}
      onClick={props.onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          props.onClick()
        }
      }}
      className={cn(
        'group flex min-h-[128px] cursor-pointer flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-colors sm:min-h-[136px] sm:p-5',
        'hover:border-slate-300 hover:bg-slate-50/40 dark:border-border dark:bg-card dark:hover:bg-muted/30'
      )}
    >
      <div className='flex items-start justify-between gap-3'>
        <div className='flex min-w-0 items-start gap-3 sm:gap-4'>
          <div className='flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 sm:size-12 dark:bg-muted'>
            {icon}
          </div>
          <div className='min-w-0 pt-0.5'>
            <h2 className='truncate text-[19px] leading-6 font-bold text-slate-950 sm:text-[21px] sm:leading-7 dark:text-foreground'>
              {props.model.model_name}
            </h2>
            <p className='mt-1 max-w-full text-[14px] leading-5 font-medium text-slate-400 italic sm:text-[15px] dark:text-muted-foreground'>
              {getBillingLine(props.model)}
            </p>
          </div>
        </div>

        <button
          type='button'
          onClick={handleCopy}
          className='flex size-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-muted dark:hover:text-foreground'
          aria-label='复制模型名称'
          title='复制模型名称'
        >
          <Copy className='size-4' />
        </button>
      </div>

      <div className='mt-3'>
        <span
          className={cn(
            'inline-flex h-6 items-center rounded-full px-2.5 text-[13px] leading-none font-semibold sm:h-7 sm:text-sm',
            props.model.supported_endpoint_types?.includes('image-generation')
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300'
              : 'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300'
          )}
        >
          {getBillingLabel(props.model)}
        </span>
      </div>
    </article>
  )
})
