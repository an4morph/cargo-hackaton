import { JobModel } from '@/types/models.d'
import { useCallback, useEffect, useState } from 'react'
import { getJobs } from '@/helpers/api'

export const useGetJobs = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>('')
  const [data, setData] = useState<JobModel | null>(null)

  const getJobsFunc = useCallback(async() => {
    setLoading(true)
    try {
      setError('')
      const response = await getJobs()
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
    getJobsFunc()
  }, [getJobsFunc])

  return { data, loading, error }
}