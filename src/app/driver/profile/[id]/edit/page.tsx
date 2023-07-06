'use client'

import { BackButton } from '@/components/button/back'
import { PrimaryButton } from '@/components/button/primary'
import { BasicInput } from '@/components/input/base'
import { editDriverProfile } from '@/helpers/api'
import { useGetDriver } from '@/helpers/hooks/useGetDriver'
import { DriverModel } from '@/types/models'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

interface IProps {
  params: {
    id: string
  }
}

const EditDriverPage = ({ params: { id } }: IProps): JSX.Element | null => {
  const { data, loading, error } = useGetDriver(id)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Partial<DriverModel>>()

  useEffect(() => {
    if (data) {
      setValue('first_name', data.first_name)
      setValue('last_name', data.last_name)
      setValue('user', data.user)
    }
  }, [data, setValue])

  const onSubmit = (data: Partial<DriverModel>) => {
    editDriverProfile(id, data)
  }

  if (!data) return null
  return (
    <div className="py-10 responsive">
      <div className="flex justify-between">
        <BackButton text="Back to dashboard" href="/driver/dashboard" />
        <Link href={`/driver/profile/${id}`}>
          <PrimaryButton>Show my public accout</PrimaryButton>
        </Link>
      </div>
      <h1 className="text-2xl font-bold mt-4 mb-6">Edit my profile</h1>
      <form className="paper p-4 w-full mx-auto">
        <BasicInput
          id="name"
          label="First name *"
          className="pb-4"
          {...register('first_name', {
            required: 'Required field',
          })}
          error={errors.first_name?.message}
        />
        <BasicInput
          id="last_name"
          label="Last name"
          className="pb-4"
          {...register('last_name')}
          error={errors.first_name?.message}
        />
        <PrimaryButton
          className="mt-4 w-full"
          onClick={handleSubmit(onSubmit)}
        >
          Update Profile
        </PrimaryButton>
      </form>
    </div>
  )
}


export default dynamic(() => Promise.resolve(EditDriverPage), {
  ssr: false,
})