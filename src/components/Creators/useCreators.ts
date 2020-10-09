import { usePaginatedQuery } from 'react-query'
import api from 'api'
import { CommonQueryParams } from 'types'

interface Params extends CommonQueryParams {
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
