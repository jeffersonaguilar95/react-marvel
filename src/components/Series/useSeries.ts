import { usePaginatedQuery } from 'react-query'
import api from 'api'
import { CommonQueryParams } from 'types'

interface Params extends CommonQueryParams {
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
