import Link from 'next/link'

const MainHeader = () => {
  return (
    <header className="flex justify-between p-4 bg-green-100">
      <div>
        <Link href="/">
          <span className="text-2xl">REEEDIT</span>
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-2 ">
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/topics">Topics</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
