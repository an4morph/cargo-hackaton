'use client'

import { BackButton } from '@/components/button/back'
import { PrimaryButton } from '@/components/button/primary'
import { BasicInput } from '@/components/input/base'
import { editJob } from '@/helpers/api'
import { useGetJobItem } from '@/helpers/hooks/useGetJobItem'
import { JobModel } from '@/types/models'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { strDateToISO, strDateToInput } from '@/helpers/date'

interface IProps {
  params: {
    id: string
  }
}

const EditShipmentPage = ({ params: { id } }: IProps): JSX.Element | null => {
  const { data, loading, error } = useGetJobItem(id)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<JobModel>()

  useEffect(() => {
    if (data) {
      setValue('title', data.title)
      setValue('pickup_date', strDateToInput(data.pickup_date))
      setValue('delivery_date', strDateToInput(data.delivery_date))
    }
  }, [data, setValue])

  const onSubmit = (form: JobModel) => {
    const editedData = {
      ...form,
      pickup_date: strDateToISO(form.pickup_date),
      delivery_date: strDateToISO(form.delivery_date),
    }
    editJob(id, { ...data, ...editedData })
  }

  if (!data) return null
  return (
    <div className="py-10 responsive">
      <div className="flex justify-between">
        <BackButton />
      </div>
      <h1 className="text-2xl font-bold mt-4 mb-6">Edit my profile</h1>
      <form className="paper p-4 w-full mx-auto">
        <BasicInput
          id="title"
          label="Title"
          className="pb-4"
          {...register('title', {
            required: 'Required field',
          })}
          error={errors.title?.message}
        />
        <BasicInput
          id="pickup_date"
          label="pickup_date"
          className="pb-4"
          type="date"
          {...register('pickup_date', {
            required: 'Required field',
          })}
          error={errors.title?.message}
        />
        <PrimaryButton
          className="mt-4 w-full"
          onClick={handleSubmit(onSubmit)}
        >
          Update Shipment
        </PrimaryButton>
      </form>
    </div>
  )
}


export default dynamic(() => Promise.resolve(EditShipmentPage), {
  ssr: false,
})