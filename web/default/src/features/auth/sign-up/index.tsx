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
import { Link } from '@tanstack/react-router'
import { UsersRound } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { useStatus } from '@/hooks/use-status'

import { AuthLayout } from '../auth-layout'
import { TermsFooter } from '../components/terms-footer'
import { SignUpForm } from './components/sign-up-form'

export function SignUp() {
  const { t } = useTranslation()
  const { status } = useStatus()

  return (
    <AuthLayout contentClassName='sm:w-[760px] lg:w-[840px]'>
      <div className='border-border/70 bg-card/95 overflow-hidden rounded-2xl border shadow-[0_24px_80px_-52px_rgba(15,23,42,0.7)]'>
        <div className='grid gap-0 md:grid-cols-[0.92fr_1.08fr]'>
          <div className='bg-muted/25 border-border/70 flex flex-col justify-between border-b p-4 md:border-r md:border-b-0 sm:p-6'>
            <div className='flex items-start gap-3'>
              <div className='bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-xl'>
                <UsersRound className='size-5' />
              </div>
              <div className='min-w-0'>
                <p className='text-base font-semibold'>注册需要邀请码</p>
                <p className='text-muted-foreground mt-1 text-sm leading-relaxed'>
                  请进群获取邀请码，填写后提交注册。
                </p>
              </div>
            </div>
            <div className='mt-4 rounded-2xl border bg-white p-3 dark:bg-background sm:mt-5'>
              <img
                src='/qun.jpg'
                alt='玄武API 邀请码获取群'
                className='mx-auto max-h-[240px] w-full rounded-xl object-contain sm:max-h-[300px] md:max-h-[320px]'
                loading='lazy'
              />
            </div>
          </div>

          <div className='p-4 sm:p-6'>
            <div className='mb-4 space-y-1.5 text-center md:text-left'>
              <h2 className='text-2xl font-semibold tracking-normal'>
                {t('Create an account')}
              </h2>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                已有账户？{' '}
                <Link
                  to='/sign-in'
                  className='hover:text-primary font-medium underline underline-offset-4'
                >
                  {t('Sign in')}
                </Link>
              </p>
            </div>

            <SignUpForm />

            <TermsFooter
              variant='sign-up'
              status={status}
              className='mt-5 text-center md:text-left'
            />
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
