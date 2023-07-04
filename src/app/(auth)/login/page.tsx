'use client'

import { BasicInput } from '@/components/input/base'
import { PrimaryButton } from '@/components/button/primary'
import { useForm } from 'react-hook-form'
import { UserTypes } from '@/types/base.d'
import { UserTypeRadioGroup } from '@/components/user-type-radio-group'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

interface LoginFormData {
  email: string
  password: string
  userType: UserTypes
}

const LoginPage = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>()
  const router = useRouter()

  const onSubmit = (data: LoginFormData) => {
    // eslint-disable-next-line
    router.push(`/${data.userType}/dashboard`)
  }

  return (
    <div className="flex justify-center items-center mt-10">
      <form className="paper p-4 w-full lg:w-1/2 2xl:w-1/3">
        <UserTypeRadioGroup
          className="mb-6"
          registerData={register('userType', {
            required: 'You should choose one of the type',
          })}
          error={errors.userType?.message}
        />
        <BasicInput
          id="email"
          label="Email"
          className="pb-4"
          {...register('email', {
            required: 'Required field',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email is incorrect, check it, please',
            },
          })}
          error={errors.email?.message}
        />
        <BasicInput
          id="password"
          type="password"
          label="Password"
          {...register('password', {
            required: 'Required field',
          })}
          error={errors.password?.message}
        />

        <PrimaryButton
          className="mt-4 w-full"
          onClick={handleSubmit(onSubmit)}
        >
          Log in
        </PrimaryButton>
      </form>
    </div>
  )
}

export default LoginPage