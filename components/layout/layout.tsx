import { Fragment, ReactFragment } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import MainHeader from './main-header'

type Props = {
  children: ReactFragment
}

const queryClient = new QueryClient()

const Layout = (props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Fragment>
        <MainHeader />
        <main>{props.children}</main>
      </Fragment>
    </QueryClientProvider>
  )
}

export default Layout
