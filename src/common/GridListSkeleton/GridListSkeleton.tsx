import * as React from 'react'
import { Box, GridList } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

type Props = {
  cols?: number
  rows?: number
}

const GridListSkeleton: React.FC<Props> = ({ cols = 1, rows = 1 }) => {
  const totalItems = Array.from(new Array(cols * rows))
  return (
    <GridList cellHeight={225} cols={cols}>
      {totalItems.map((character: any, index: number) => (
        <Box key={`GridListSkeleton__${index}`} width={1}>
          <Skeleton variant="rect" height="100%" />
          <Skeleton variant="text" height="35%" animation="wave" style={{ marginTop: '-65px' }} />
        </Box>
      ))}
    </GridList>
  )
}

export default GridListSkeleton
