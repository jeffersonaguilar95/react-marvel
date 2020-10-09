import { usePaginatedQuery } from 'react-query'
import api from 'api'

type Params = {
  page: number
  orderBy?: string
  limit?: string | number
  titleStartsWith?: string | null
}

const getCreators = async (key: string, params?: Params) => {
  try {
    const {
      data: { data }
    } = await api.get('/series', {
      params
    })

    return data
  } catch (e) {
    throw new Error(e.message)
  }
}

const useSeries = (params?: Params) => {
  return usePaginatedQuery(['series', params], getCreators)
}

export default useSeries
