import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const MainHeader = () => {
  return (
    <header className="bg-green-100 drop-shadow">
      <div className="container mx-auto flex justify-between py-3 mb-3">
        <div>
          <Link href="/">
            <span className="text-2xl">REEEDIT</span>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-2 items-center">
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            {/* <li>
            <Link href="/topics">Topics</Link>
          </li> */}
            <li>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default MainHeader
