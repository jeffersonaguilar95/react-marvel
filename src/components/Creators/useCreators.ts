import { PaginatedQueryResult, usePaginatedQuery } from 'react-query'
import api from 'api'
import { CreatorsResponse, QueryParams } from 'interfaces'

interface Params extends QueryParams {
  nameStartsWith?: string | null
}

const getCreators = async (key: string, params?: Params): Promise<CreatorsResponse> => {
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

export default function useCreators(params?: Params): PaginatedQueryResult<CreatorsResponse> {
  return usePaginatedQuery(['creators', params], getCreators)
}
