import React from 'react'
import { RouteComponentProps } from '@reach/router'
import GridList from 'common/GridList/GridList'
import { useDebounce, useFilters, usePagination } from 'hooks'
import useCharacters from './useCharacters'

const Characters: React.FC<RouteComponentProps> = () => {
  const { page, setPage } = usePagination()
  const { filters, setFilter } = useFilters()
  const debouncedSearch = useDebounce(filters.search, 500)

  const charactersQuery = useCharacters({
    orderBy: 'name',
    page,
    nameStartsWith: !!debouncedSearch ? debouncedSearch : null
  })

  return (
    <GridList
      title="Characters"
      page={page}
      setPage={setPage}
      resourceQuery={charactersQuery}
      setFilter={setFilter}
      filters={filters}
    />
  )
}

export default Characters
