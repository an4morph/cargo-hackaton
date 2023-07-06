import { JobModel } from '@/types/models.d'
import { useCallback, useEffect, useState } from 'react'
import { getJobItem } from '@/helpers/api'

export const useGetJobItem = (id: string | number) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>('')
  const [data, setData] = useState<JobModel | null>(null)

  const getData = useCallback(async() => {
    try {
      setError('')
      const response = await getJobItem(id)
      setData(response)
    }
    catch (err: any) {
      setError(err.message)
    }
    finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    setLoading(true)
    getData()
  }, [getData])

  return { data, loading, error }
}