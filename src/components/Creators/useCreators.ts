import { usePaginatedQuery } from 'react-query'
import api from 'api'

type Params = {
  page: number
  orderBy?: string
  limit?: string | number
  nameStartsWith?: string | null
}

const getCreators = async (key: string, params?: Params) => {
  try {
    const {
      data: { data }
    } = await api.get('/creators', {
      params
    })

    return data
  } catch (e) {
    throw new Error(e.message)
  }
}

const useCreators = (params?: Params) => {
  return usePaginatedQuery(['creators', params], getCreators)
}

export default useCreators
