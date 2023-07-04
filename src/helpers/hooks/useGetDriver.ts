import { DriverModel } from '@/types/base.d'
import { useCallback, useEffect, useState } from 'react'
import { getDriverProfile } from '@/helpers/api'

export const useGetDriver = (id: number | string) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>('')
  const [data, setData] = useState<DriverModel | null>(null)

  const getDriver = useCallback(async() => {
    setLoading(true)
    try {
      setError('')
      const response = await getDriverProfile(id)
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
    getDriver()
  }, [getDriver])

  return { data, loading, error }
}