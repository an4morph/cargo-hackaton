'use client'

import { PrimaryButton } from '@/components/button/primary'
import { InfoModal } from '@/components/modal/info'
import { useState } from 'react'

export const ModalBlock = (): JSX.Element => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="flex items-center">
      из готового тут есть
      <PrimaryButton
        className="mx-2"
        onClick={() => setOpen(true)}
      >
        Модалка
      </PrimaryButton>
      , header и кнопки

      <InfoModal
        title="Предупреждение"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      >
        Что-то внутри модалки
      </InfoModal>
    </div>
  )
}