import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">AN Technologies</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#" className="text-gray-600 hover:text-blue-600">Services</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-blue-600">About</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

