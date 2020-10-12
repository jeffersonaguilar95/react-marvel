import { PaginatedQueryResult, usePaginatedQuery } from 'react-query'
import api from 'api'
import { QueryParams, SeriesResponse } from 'interfaces'

interface Params extends QueryParams {
  titleStartsWith?: string | null
}

const getCreators = async (key: string, params?: Params): Promise<SeriesResponse> => {
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

export default function useSeries(params?: Params): PaginatedQueryResult<SeriesResponse> {
  return usePaginatedQuery(['series', params], getCreators)
}
