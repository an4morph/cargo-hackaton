'use client'

import { BasicInput } from '@/components/input/base'
import { PrimaryButton } from '@/components/button/primary'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import * as api from '@/helpers/api'
import { ErrorText } from '@/components/error'
import { useState } from 'react'
import { UserTypes } from '@/types/base.d'
import user from '@/store/user'
import { observer } from 'mobx-react-lite'

interface LoginFormData {
  email: string
  password: string
}

const LoginPage = observer((): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>()
  const [formError, setFormError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onSubmit = async(form: LoginFormData) => {
    setLoading(true)
    try {
      setFormError(null)
      const { id, role } = await api.login(form)
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

  return (
    <div className="flex justify-center items-center mt-10">
      <form className="paper p-4 w-full lg:w-1/2 2xl:w-1/3">
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
          disabled={loading}
        >
          Log in
        </PrimaryButton>

        {formError && <ErrorText className="text-center mt-4 text-base">{formError}</ErrorText>}
      </form>
    </div>
  )
})

export default LoginPage