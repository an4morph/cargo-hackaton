'use client'

import { BackButton } from '@/components/button/back'
import { useGetJobItem } from '@/helpers/hooks/useGetJobItem'
import { ShimpmentPageContent } from './components/content'
import { ErrorText } from '@/components/error'

interface IProps {
  params: {
    id: string
  }
}

export default function ShimpmentPage({ params: { id } }: IProps): JSX.Element {
  const { data, loading, error } = useGetJobItem(id)

  return (
    <div className="responsive py-10">
      <BackButton className="mb-4" />
      {(loading || (!data && !error)) && <div>Loading...</div>}
      {error && <ErrorText>{error}</ErrorText>}

      {data && <ShimpmentPageContent data={data} />}
    </div>
  )
}