'use client'

import { PrimaryButton } from '@/components/button/primary'
import { BasicInput } from '@/components/input/base'
import { SubmitHandler, useForm } from 'react-hook-form'

type LoginForm = {
  username: string
  password: string
}

export default function LoginPage(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>()

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log('submit', data)
  }

  return (
    <div className="responsive pt-10">
      <form className="paper p-4 w-1/2" onSubmit={handleSubmit(onSubmit)}>
        <BasicInput
          id="username"
          label="Имя пользователя"
          className="pb-4"
          {...register('username', {
            required: 'Обязательное поле',
          })}
          error={errors.username?.message}
        />
        <BasicInput
          id="password"
          type="password"
          label="Пароль"
          {...register('password', {
            required: 'Обязательное поле',
          })}
          error={errors.password?.message}
        />

        <PrimaryButton
          className="mt-4 w-full"
        >
          Войти
        </PrimaryButton>
      </form>
    </div>
  )
}