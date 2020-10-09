import { usePaginatedQuery } from 'react-query'
import api from 'api'

type Params = {
  page: number
  orderBy?: string
  limit?: string | number
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
