import type { ReactNode } from 'react'
import { LocaleTextProvider } from '@moonpig/launchpad-localisation'
import { theme } from '@moonpig/launchpad-theme'
import { ThemeProvider } from '@moonpig/launchpad-utils'

type LaunchpadShellProps = {
  children: ReactNode
  region?: 'uk' | 'us' | 'au' | 'ie' | 'nl'
}

export function LaunchpadShell({ children, region = 'uk' }: LaunchpadShellProps) {
  return (
    <LocaleTextProvider region={region}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LocaleTextProvider>
  )
}
