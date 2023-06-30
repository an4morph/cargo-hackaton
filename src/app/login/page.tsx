'use client'

import { PrimaryButton } from '@/components/button/primary'
import { useRouter } from 'next/navigation'
import { LoginForm } from '@/components/login-form'
import Link from 'next/link'
import { SubmitHandler } from 'react-hook-form'
import { LoginFormData } from '@/types/base.d'

export default function LoginPage(): JSX.Element {
  const router = useRouter()

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log('submit', data)
    router.push('/sh/dashboard')
  }

  return (
    <div className="responsive pt-10">
      <div className="flex flex-col [&>*]:mb-6">
        <Link href="/sh/dashboard">
          <PrimaryButton>Войти как Shipper</PrimaryButton>
        </Link>
        <Link href="/d/dashboard">
          <PrimaryButton>Войти как Driver</PrimaryButton>
        </Link>
        <Link href="/c/dashboard">
          <PrimaryButton>Войти как Company</PrimaryButton>
        </Link>
      </div>
      <h2 className="text-2xl">Эту страницу еще надо доработать, продумать процесс авторизации и регистрации</h2>

      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}