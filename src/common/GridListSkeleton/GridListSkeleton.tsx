import * as React from 'react'
import { Box, GridList, GridListProps } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

type Props = {
  rows?: number
}

const GridListSkeleton: React.FC<GridListProps & Props> = ({ cols = 1, rows = 1, ...props }) => {
  const totalItems = Array.from(new Array(cols * rows))
  return (
    <GridList cols={cols} {...props}>
      {totalItems.map((_: undefined, index: number) => (
        <Box key={`GridListSkeleton__${index}`} width={1}>
          <Skeleton variant="rect" height="100%" />
          <Skeleton variant="text" height="35%" animation="wave" style={{ marginTop: '-63px' }} />
        </Box>
      ))}
    </GridList>
  )
}

export default GridListSkeleton
