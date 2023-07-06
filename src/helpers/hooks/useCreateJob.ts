import { JobModel } from '@/types/models.d'
import { useCallback, useState } from 'react'
import { createJob } from '@/helpers/api'

export const useCreateJob = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>('')

  const createData = useCallback(async(data: Partial<JobModel>, cb: () => void) => {
    setLoading(true)
    try {
      setError('')
      await createJob(data)
      cb()
    }
    catch (err: any) {
      setError(err.message)
    }
    finally {
      setLoading(false)
    }
  }, [])

  return { createData, loading, error }
}