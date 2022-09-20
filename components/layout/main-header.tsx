import Link from 'next/link'

const MainHeader = () => {
  return (
    <header>
      <div>
        <Link href='/'>REEEDIT</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/topics'>Topics</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
