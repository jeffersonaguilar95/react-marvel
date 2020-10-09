import { Theme, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

type BreakpointOrNull = Breakpoint | null

/**
 * Material UI custom Hook to prevent using of HOC "withWidth()"
 * See https://material-ui.com/components/use-media-query/#migrating-from-withwidth
 */
const useWidth = (): Breakpoint => {
  const theme: Theme = useTheme()
  const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse()
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key))
      return !output && matches ? key : output
    }, null) || 'xs'
  )
}

export default useWidth
