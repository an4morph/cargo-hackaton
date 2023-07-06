'use client'

import { BasicInput } from '@/components/input/base'
import { PrimaryButton } from '@/components/button/primary'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BackButton } from '@/components/button/back'
import { useCreateJob } from '@/helpers/hooks/useCreateJob'
import { JobModel } from '@/types/models'
import { strDateToISO } from '@/helpers/date'
import { useRouter } from 'next/navigation'


export default function NewShipmentFormPage(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<JobModel>()
  const { createData, loading } = useCreateJob()
  const router = useRouter()

  const onSubmit: SubmitHandler<JobModel> = (form) => {
    const newData = {
      ...form,
      pickup_date: strDateToISO(form.pickup_date),
      delivery_date: strDateToISO(form.delivery_date),
    }
    createData(newData, () => {
      router.push('/shipper/dashboard')
    })
  }

  return (
    <div className="responsive">

      <BackButton className="mt-10" />
      <div className="flex justify-center items-center py-10">
        <form className="paper p-6 w-2/3">
          <BasicInput
            id="title"
            label="Title"
            className="pb-4"
            {...register('title', {
              required: 'Обязательное поле',
            })}
            error={errors.title?.message}
          />
          <BasicInput
            id="pickup_location"
            label="pickup_location"
            className="pb-4"
            {...register('pickup_location', {
              required: 'Обязательное поле',
            })}
            error={errors.pickup_location?.message}
          />
          <BasicInput
            id="pickup_date"
            label="pickup_date"
            type="date"
            className="pb-4"
            {...register('pickup_date', {
              required: 'Обязательное поле',
            })}
            error={errors.pickup_date?.message}
          />
          <BasicInput
            id="delivery_date"
            label="delivery_date"
            type="date"
            className="pb-4"
            {...register('delivery_date', {
              required: 'Обязательное поле',
            })}
            error={errors.pickup_date?.message}
          />
          <BasicInput
            id="destination_location"
            label="destination_location"
            className="pb-4"
            {...register('destination_location', {
              required: 'Обязательное поле',
            })}
            error={errors.destination_location?.message}
          />
          <BasicInput
            id="weight_of_goods"
            label="weight_of_goods"
            className="pb-4"
            {...register('weight_of_goods', {
              required: 'Обязательное поле',
            })}
            error={errors.weight_of_goods?.message}
          />
          <BasicInput
            id="type_of_goods"
            label="type_of_goods"
            className="pb-4"
            {...register('type_of_goods', {
              required: 'Обязательное поле',
            })}
            error={errors.type_of_goods?.message}
          />
          <BasicInput
            id="required_equipment"
            label="required_equipment"
            className="pb-4"
            {...register('required_equipment', {
              required: 'Обязательное поле',
            })}
            error={errors.required_equipment?.message}
          />

          <PrimaryButton
            className="mt-4 w-full"
            onClick={handleSubmit(onSubmit)}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Create Shipment'}
          </PrimaryButton>
        </form>
      </div>
    </div>
  )
}