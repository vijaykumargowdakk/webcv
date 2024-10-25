import Link from 'next/link'
import { Search } from 'lucide-react'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex justify-between items-center p-4 border-b border-gray-800">
        <Link href="/" className="text-2xl font-bold">ClassVerse</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/calculator" className="hover:text-gray-300">SGPA Calculator</Link>
          <Link href="/papers" className="hover:text-gray-300">Question Papers</Link>
        </nav>
        <button className="bg-white text-black px-4 py-2 rounded">Enroll Now</button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">VTU Engineering 2022 Scheme Study Portal</h1>
          <p className="text-xl mb-8">Find notes, question papers, and more for CSE, ISE, ECE, and ME branches.</p>
          <div className="flex justify-center">
            <input 
              type="text" 
              placeholder="Search by subject code or name" 
              className="w-full max-w-md px-4 py-2 rounded-l text-black"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Select Your Branch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Computer Science and Engineering (CSE)', slug: 'cse' },
              { name: 'Information Science and Engineering (ISE)', slug: 'ise' },
              { name: 'Electronics and Communication Engineering (ECE)', slug: 'ece' },
              { name: 'Mechanical Engineering (ME)', slug: 'me' }
            ].map((branch) => (
              <Link 
                href={`/branch/${branch.slug}`} 
                key={branch.slug}
                className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300"
              >
                {branch.name}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/calculator" className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300">
              SGPA/CGPA Calculator
            </Link>
            <Link href="/papers" className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300">
              Question Banks
            </Link>
            <Link href="/papers" className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300">
              Previous Year Papers
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-center p-4 mt-12">
        <p>&copy; 2024 ClassVerse VTU Engineering. All rights reserved.</p>
      </footer>
    </div>
  )
}