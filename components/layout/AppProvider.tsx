import { MantineProvider } from '@mantine/core'
import React from 'react'
import '@mantine/core/styles.css'

export default function AppProvider({ children }: React.PropsWithChildren) {
  return <MantineProvider>{children}</MantineProvider>
}
