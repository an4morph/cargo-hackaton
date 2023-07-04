'use client'

import { PrimaryButton } from '@/components/button/primary'
import { BasicInput } from '@/components/input/base'
import { UserTypeRadioGroup } from '@/components/user-type-radio-group'
import { UserTypes } from '@/types/base.d'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

export interface SignUpFormData {
  email: string
  password: string
  password2: string
  userType: UserTypes
}

const SignUpPage = ():JSX.Element => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm<SignUpFormData>()
  const router = useRouter()

  const onSubmit = (data: SignUpFormData) => {
    // eslint-disable-next-line
    router.push(`/${data.userType}/dashboard`)
  }

  const validatePasswordMatch = (value: string) => {
    const { password } = getValues()
    return value === password || 'Passwords do not match'
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
          className="pb-4"
          {...register('password', {
            required: 'Required field',
          })}
          error={errors.password?.message}
        />
        <BasicInput
          id="password2"
          type="password"
          label="Repeat password"
          {...register('password2', {
            required: 'Required field',
            validate: validatePasswordMatch,
          })}
          error={errors.password2?.message}
        />

        <PrimaryButton
          className="mt-4 w-full"
          onClick={handleSubmit(onSubmit)}
        >
          Sign up
        </PrimaryButton>
      </form>
    </div>
  )
}

export default SignUpPage