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
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'

import { Checkbox } from '@/components/ui/checkbox'
import { Dialog } from '@/components/dialog'
import { Label } from '@/components/ui/label'
import { PublicLayout } from '@/components/layout'
import { Footer } from '@/components/layout/components/footer'
import { RichContent } from '@/components/rich-content'
import { Button } from '@/components/ui/button'
import { isLikelyHtml } from '@/lib/content-format'
import { useAuthStore } from '@/stores/auth-store'

import { CTA, Features, Hero, HowItWorks, Stats } from './components'
import { useHomePageContent } from './hooks'

const ANNOUNCEMENT_STORAGE_KEY = 'xuanwu-opening-announcement-permanent-dismiss'

function HomeAnnouncementDialog() {
  const [open, setOpen] = useState(false)
  const [neverShow, setNeverShow] = useState(false)

  useEffect(() => {
    try {
      if (window.localStorage.getItem(ANNOUNCEMENT_STORAGE_KEY) === '1') {
        return
      }
    } catch {
      /* empty */
    }

    const id = window.setTimeout(() => setOpen(true), 450)
    return () => window.clearTimeout(id)
  }, [])

  const handleClose = () => {
    setOpen(false)
    if (neverShow) {
      try {
        window.localStorage.setItem(ANNOUNCEMENT_STORAGE_KEY, '1')
      } catch {
        /* empty */
      }
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          handleClose()
        }
      }}
      title='公告'
      description='玄武API新店开业'
      contentClassName='sm:max-w-md'
      contentHeight='auto'
      headerClassName='text-center'
      titleClassName='text-2xl font-semibold tracking-normal'
      descriptionClassName='text-sm'
      bodyClassName='space-y-4'
      footer={
        <>
          <div className='flex items-center gap-2 sm:mr-auto'>
            <Checkbox
              id='never-show-again'
              checked={neverShow}
              onCheckedChange={(checked) => setNeverShow(checked === true)}
            />
            <Label
              htmlFor='never-show-again'
              className='text-muted-foreground cursor-pointer text-sm font-normal select-none'
            >
              不再显示
            </Label>
          </div>
          <div className='flex gap-2'>
            <Button variant='outline' onClick={handleClose}>
              稍后再说
            </Button>
            <Button render={<Link to='/sign-up' />} onClick={handleClose}>
              获取邀请码
            </Button>
          </div>
        </>
      }
    >
      <div className='space-y-4 text-center'>
        <div className='rounded-2xl border bg-muted/30 px-4 py-3 text-sm leading-relaxed'>
          <p>倍率 <span className='font-semibold'>1元=20刀</span></p>
          <p>所有模型倍率 <span className='font-semibold'>0.01</span></p>
          <p className='text-muted-foreground mt-1'>进微信群获取邀请码</p>
        </div>
        <div className='rounded-2xl border bg-white p-3 dark:bg-background'>
          <img
            src='/qun.jpg'
            alt='玄武API微信群二维码'
            className='mx-auto max-h-[320px] w-full rounded-xl object-contain'
          />
        </div>
      </div>
    </Dialog>
  )
}

export function Home() {
  const { t } = useTranslation()
  const { auth } = useAuthStore()
  const isAuthenticated = !!auth.user
  const { content, isLoaded, isUrl } = useHomePageContent()

  if (!isLoaded) {
    return (
      <PublicLayout showMainContainer={false}>
        <main className='flex min-h-screen items-center justify-center'>
          <div className='text-muted-foreground'>{t('Loading...')}</div>
        </main>
      </PublicLayout>
    )
  }

  if (content) {
    if (isUrl) {
      return (
        <PublicLayout showMainContainer={false}>
          <iframe
            src={content}
            className='h-screen w-full border-none'
            title={t('Custom Home Page')}
            sandbox='allow-forms allow-popups allow-popups-to-escape-sandbox allow-scripts'
          />
        </PublicLayout>
      )
    }

    const contentIsHtml = isLikelyHtml(content)

    if (contentIsHtml) {
      return (
        <PublicLayout showMainContainer={false}>
          <RichContent
            mode='html'
            htmlVariant='isolated'
            content={content}
            className='custom-home-content'
          />
        </PublicLayout>
      )
    }

    return (
      <PublicLayout>
        <div className='mx-auto max-w-6xl px-4 py-8'>
          <RichContent
            mode='markdown'
            content={content}
            className='custom-home-content'
          />
        </div>
      </PublicLayout>
    )
  }

  return (
    <PublicLayout showMainContainer={false}>
      <HomeAnnouncementDialog />
      <Hero isAuthenticated={isAuthenticated} />
      <Stats />
      <Features />
      <HowItWorks />
      <CTA isAuthenticated={isAuthenticated} />
      <Footer />
    </PublicLayout>
  )
}
