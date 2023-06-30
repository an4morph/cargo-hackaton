import { BasicInput } from '@/components/input/base'
import { PrimaryButton } from '../button/primary'
import { SubmitHandler, useForm } from 'react-hook-form'
import cx from 'classnames'
import { LoginFormData } from '@/types/base.d'

interface IProps {
  className?: string
  onSubmit: SubmitHandler<LoginFormData>
  btnText?: string
}


export const LoginForm = ({ className, onSubmit, btnText = 'Log in' }: IProps): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>()

  return (
    <form className={cx(className, 'paper p-4')}>
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
        {btnText}
      </PrimaryButton>
    </form>
  )
}