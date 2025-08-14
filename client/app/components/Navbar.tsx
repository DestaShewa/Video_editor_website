// This is the complete code for app/components/Navbar.tsx

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-400 hover:text-blue-500"
        >
          Clients Name
        </Link>
        <div className="flex gap-6 text-lg">
          <Link href="/portfolio" className="hover:text-blue-400">
            Work
          </Link>
          <Link href="/services" className="hover:text-blue-400">
            Services
          </Link>
          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
