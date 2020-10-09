import React, { useMemo } from 'react'
import { Pagination as MaterialPagination, PaginationProps } from '@material-ui/lab'
import { Box } from '@material-ui/core'

type Props = {
  total: number
  limit: number
}

const Pagination: React.FC<PaginationProps & Props> = ({ total, limit, ...props }) => {
  const count = useMemo(() => {
    return Math.ceil(total / limit)
  }, [total, limit])

  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <MaterialPagination
        color="primary"
        shape="rounded"
        size="large"
        siblingCount={3}
        count={count}
        {...props}
      />
    </Box>
  )
}

export default Pagination
