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
import { CherryStudio } from '@lobehub/icons'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

// Stylized three-dots indicator representing "More"
const MoreIcon = () => (
  <svg
    className='text-muted-foreground/60 group-hover:text-foreground size-6 shrink-0 transition-colors'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='6' cy='12' r='2' fill='currentColor' />
    <circle cx='12' cy='12' r='2' fill='currentColor' />
    <circle cx='18' cy='12' r='2' fill='currentColor' />
  </svg>
)

export function Hero(_props: HeroProps) {
  const { t } = useTranslation()

  return (
    <section className='relative z-10 overflow-hidden px-4 pt-24 pb-14 sm:px-6 md:pt-30 md:pb-20 lg:pt-34 lg:pb-24'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 opacity-20 dark:opacity-[0.10]'
        style={{
          background: [
            'radial-gradient(ellipse 55% 45% at 20% 20%, oklch(0.72 0.17 245 / 75%) 0%, transparent 70%)',
            'radial-gradient(ellipse 45% 36% at 85% 18%, oklch(0.74 0.13 175 / 55%) 0%, transparent 70%)',
            'radial-gradient(ellipse 40% 32% at 48% 76%, oklch(0.74 0.14 45 / 35%) 0%, transparent 70%)',
          ].join(', '),
        }}
      />
      <div
        aria-hidden
        className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black_20%,transparent_100%)] bg-[size:4rem_4rem] opacity-[0.08]'
      />

      <div className='mx-auto max-w-5xl'>
        <div className='flex flex-col items-center text-center'>
          <div
            className='landing-animate-fade-up bg-muted/40 border-border/70 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-medium opacity-0 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
            style={{ animationDelay: '0ms' }}
          >
            <span className='relative flex size-2 shrink-0'>
              <span className='absolute inset-0 rounded-full bg-primary/25' />
              <span className='relative size-2 rounded-full bg-primary' />
            </span>
            <span className='text-foreground/80'>玄武API中转服务稳定运行中</span>
          </div>

          <h1
            className='landing-animate-fade-up max-w-4xl text-[clamp(2.15rem,4.7vw,4.25rem)] leading-[1.06] font-bold tracking-normal text-slate-950 dark:text-foreground'
            style={{ animationDelay: '60ms' }}
          >
            玄武API
            <br />
            <span className='text-primary'>统一模型中转网关</span>
          </h1>
          <p
            className='landing-animate-fade-up text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed opacity-0 sm:text-lg'
            style={{ animationDelay: '120ms' }}
          >
            聚合 Claude、Gemini、GPT 等模型线路，统一中转调度，适合开发、自动化、绘图和多模型调用。
          </p>

          <div
            className='landing-animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3 opacity-0'
            style={{ animationDelay: '180ms' }}
          >
            <Button
              className='group h-11 rounded-lg px-5 text-sm font-medium'
              render={<Link to='/sign-up' />}
            >
              {t('Get Started')}
              <ArrowRight className='ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
            </Button>
            <Button
              variant='outline'
              className='border-border/50 hover:border-border hover:bg-muted/50 h-11 rounded-lg px-5 text-sm font-medium'
              render={<Link to='/pricing' />}
            >
              {t('View Pricing')}
            </Button>
          </div>

          <div
            className='landing-animate-fade-up mt-10 w-full max-w-2xl opacity-0'
            style={{ animationDelay: '240ms' }}
          >
            <div className='mb-4 flex flex-col gap-1'>
              <span className='text-muted-foreground/50 text-[10px] font-bold tracking-[0.15em] uppercase'>
                {t('Supported Applications')}
              </span>
              <p className='text-muted-foreground/60 text-xs leading-relaxed'>
                支持一键配置并适配玄武API模型线路。
              </p>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-3'>
              {/* Cherry Studio */}
              <a
                href='https://cherry-ai.com'
                target='_blank'
                rel='noopener noreferrer'
                className='group border-border/40 bg-muted/15 text-foreground/80 hover:border-border hover:bg-muted/30 hover:text-foreground flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm font-medium shadow-[0_1px_2.5px_rgba(0,0,0,0.01)] backdrop-blur-xs transition-all duration-300 hover:scale-[1.02]'
              >
                <CherryStudio.Color size={24} className='shrink-0' />
                <span>Cherry Studio</span>
              </a>

              {/* CC Switch */}
              <a
                href='https://ccswitch.io'
                target='_blank'
                rel='noopener noreferrer'
                className='group border-border/40 bg-muted/15 text-foreground/80 hover:border-border hover:bg-muted/30 hover:text-foreground flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm font-medium shadow-[0_1px_2.5px_rgba(0,0,0,0.01)] backdrop-blur-xs transition-all duration-300 hover:scale-[1.02]'
              >
                <img
                  src='https://ccswitch.io/favicon.png'
                  alt='CC Switch'
                  className='size-6 shrink-0 rounded-md object-contain'
                  onError={(e) => {
                    // Fallback to a styled text avatar if the remote favicon fails to load in sandbox or local environments
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextSibling as HTMLElement
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <span
                  style={{ display: 'none' }}
                  className='size-6 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-[10px] font-bold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400'
                >
                  CC
                </span>
                <span>CC Switch</span>
              </a>

              {/* "更多" */}
              <div className='group border-border/40 bg-muted/15 text-foreground/55 hover:border-border hover:bg-muted/30 hover:text-foreground flex cursor-default items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium shadow-[0_1px_2.5px_rgba(0,0,0,0.01)] backdrop-blur-xs transition-all duration-300 hover:scale-[1.02]'>
                <MoreIcon />
                <span>{t('More Apps')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
