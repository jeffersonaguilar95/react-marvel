import { usePaginatedQuery } from 'react-query'
import api from 'api'
import { CommonQueryParams } from 'types'

interface Params extends CommonQueryParams {
  nameStartsWith?: string | null
}

const getEvents = async (key: string, params?: Params) => {
  try {
    const {
      data: { data }
    } = await api.get('/events', {
      params
    })

    return data
  } catch (e) {
    throw new Error(e.message)
  }
}

const useEvents = (params?: Params) => {
  return usePaginatedQuery(['events', params], getEvents)
}

export default useEvents
