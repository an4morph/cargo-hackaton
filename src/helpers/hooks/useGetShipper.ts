import { ShipperModel } from '@/types/models.d'
import { useCallback, useEffect, useState } from 'react'
import { getShipperProfile } from '@/helpers/api'

export const useGetShipper = (id: number | string) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>('')
  const [data, setData] = useState<ShipperModel | null>(null)

  const getShipper = useCallback(async() => {
    setLoading(true)
    try {
      setError('')
      const response = await getShipperProfile(id)
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
    getShipper()
  }, [getShipper])

  return { data, loading, error }
}