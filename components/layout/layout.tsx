import { Fragment, ReactFragment } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import MainHeader from './main-header'

type Props = {
  children: ReactFragment
}

const Layout = (props: Props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <ReactQueryDevtools />
    </Fragment>
  )
}

export default Layout
