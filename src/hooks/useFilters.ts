import { useState } from 'react'
import { Filters, SetFilter } from 'types'

const useFilters = () => {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    events: '',
    comics: ''
  })

  const setFilter: SetFilter = (filter, value) => {
    setFilters((filters) => ({
      ...filters,
      [filter]: value
    }))
  }

  return {
    filters,
    setFilter
  }
}

export default useFilters
