import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">AN Technologies</h3>
          <p>Empowering businesses with cutting-edge technology solutions</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><Link href="#" className="hover:text-blue-400">Services</Link></li>
            <li><Link href="#" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="#" className="hover:text-blue-400">Contact</Link></li>
            <li><Link href="#" className="hover:text-blue-400">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p>Phone: +91 77957 09574</p>
          <p>Address: 2/3, Sree Kanchi Nagar, Cheran Maa Nagar, Coimbatore, Tamil Nadu, India - 641035</p>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-4 border-t border-gray-700 text-center">
        <p>&copy; 2023 AN Technologies. All rights reserved.</p>
      </div>
    </footer>
  )
}

