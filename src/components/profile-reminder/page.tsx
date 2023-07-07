'use client'

import { InfoModal } from '@/components/modal/info'
import { useState } from 'react'
import { PrimaryButton } from '@/components/button/primary'
import { BsArrowRight } from 'react-icons/bs'
import { SecondaryButton } from '@/components/button/secondary'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/navigation'


export const ProfileReminder = observer((): JSX.Element => {
  const [isOpen, setOpen] = useState(true)
  const router = useRouter()

  const onClose = () => {
    setOpen(false)
    localStorage.setItem('notify', 'true')
  }
  const goToProfile = () => {
    router.push(`/${localStorage.getItem('userRole')}/profile/${localStorage.getItem('userId')}/edit`)
    localStorage.setItem('notify', 'true')
  }

  return (
    <InfoModal title="Notice" isOpen={isOpen} onClose={onClose}>
      <p className="mb-5 text-slate-600">
        To use the service, you need to fill out your profile information and wait
        for approval from the moderator. We advise you to go to your profile page and do this now.
      </p>
      <PrimaryButton onClick={goToProfile} className="flex items-center w-full mb-3 text-xl justify-center">
          Go to profile page
        <BsArrowRight className="ml-3" />
      </PrimaryButton>

      <SecondaryButton onClick={onClose} className="w-full">
        Do it later
      </SecondaryButton>
    </InfoModal>
  )
})