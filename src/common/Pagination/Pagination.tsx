import React, { useMemo } from 'react'
import { Box, useMediaQuery } from '@material-ui/core'
import { Pagination as MaterialPagination, PaginationProps } from '@material-ui/lab'
import { useTheme } from '@material-ui/core/styles'

type Props = {
  total: number
  limit: number
}

const Pagination: React.FC<PaginationProps & Props> = ({ total, limit, ...props }) => {
  const theme = useTheme()
  const isLargeDevice = useMediaQuery(theme.breakpoints.up('md'))

  const count = useMemo(() => {
    return Math.ceil(total / limit)
  }, [total, limit])

  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <MaterialPagination
        color="secondary"
        shape="rounded"
        size={isLargeDevice ? 'large' : 'small'}
        siblingCount={isLargeDevice ? 3 : 0}
        count={count}
        {...props}
      />
    </Box>
  )
}

export default Pagination
