import { Fragment, ReactFragment } from 'react'
import MainHeader from './main-header'

type Props = {
  children: ReactFragment
}

const Layout = (props: Props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout
