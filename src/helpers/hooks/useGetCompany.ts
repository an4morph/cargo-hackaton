import { CompanyModel } from '@/types/base.d'
import { useCallback, useEffect, useState } from 'react'
import { getCompanyProfile } from '@/helpers/api'

export const useGetCompany = (id: number | string) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>('')
  const [data, setData] = useState<CompanyModel | null>(null)

  const getCompany = useCallback(async() => {
    setLoading(true)
    try {
      setError('')
      const response = await getCompanyProfile(id)
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
    getCompany()
  }, [getCompany])

  return { data, loading, error }
}