import { Fragment, ReactFragment } from 'react'
import Head from 'next/head'
import MainHeader from './main-header'

type Props = {
  children: ReactFragment
}

const Layout = (props: Props) => {
  return (
    <Fragment>
      <Head>
        <title>Reedit</title>
      </Head>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout
