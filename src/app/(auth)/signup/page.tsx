'use client'

import { PrimaryButton } from '@/components/button/primary'
import { BasicInput } from '@/components/input/base'
import { UserTypeRadioGroup } from '@/components/user-type-radio-group'
import { UserTypes } from '@/types/base.d'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import * as api from '@/helpers/api'
import user from '@/store/user'
import { observer } from 'mobx-react-lite'
import { ErrorText } from '@/components/error'

export interface SignUpFormData {
  email: string
  password: string
  password2: string
  userType: UserTypes
}

const SignUpPage = observer(():JSX.Element => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm<SignUpFormData>()
  const router = useRouter()
  const [formError, setFormError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async(form: SignUpFormData) => {
    setLoading(true)
    try {
      setFormError(null)
      const { id, role } = await api.signup(form.userType, {
        email: form.email,
        password: form.password,
      })
      user.setRole(role)
      if (role === UserTypes.company) {
        const data = await api.getCompanyProfile(id)
        user.setUser(data)
      }
      if (role === UserTypes.driver) {
        const data = await api.getDriverProfile(id)
        user.setUser(data)
      }
      if (role === UserTypes.shipper) {
        const data = await api.getShipperProfile(id)
        user.setUser(data)
      }
      router.push(`/${role}/dashboard`)
    }
    catch (err: any) {
      setFormError(err?.message)
    }
    finally {
      setLoading(false)
    }
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
          disabled={loading}
        >
          {loading ? 'Loading' : 'Sign up'}

        </PrimaryButton>
        {formError && <ErrorText className="text-center mt-4 text-base">{formError}</ErrorText>}
      </form>
    </div>
  )
})

export default SignUpPage