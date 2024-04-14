import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-gray-800 text-white p-4'>
      <ul className='flex space-x-4'>
        <li>
          <Link href='/users' className='hover:underline'>
            Users
          </Link>
        </li>
        <li>
          <Link href='/about' className='hover:underline'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}
