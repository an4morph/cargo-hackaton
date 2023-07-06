import { JobModel } from '@/types/models.d'
import { useCallback, useEffect, useState } from 'react'
import { getJobsHistory } from '@/helpers/api'

export const useGetJobsHistory = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>('')
  const [data, setData] = useState<JobModel | null>(null)

  const getData = useCallback(async() => {
    setLoading(true)
    try {
      setError('')
      const response = await getJobsHistory()
      setData(response)
    }
    catch (err: any) {
      setError(err.message)
    }
    finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  return { data, loading, error }
}