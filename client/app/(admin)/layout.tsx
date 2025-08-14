// This is the complete code for app/(admin)/layout.tsx

import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <h1 className="text-2xl font-bold text-blue-400 mb-8">Admin Panel</h1>
        <nav className="flex flex-col gap-4">
          <Link href="/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>
          <Link href="/portfolio-manager" className="hover:text-blue-400">
            Portfolio Manager
          </Link>
          <Link href="/services-manager" className="hover:text-blue-400">
            Services Manager
          </Link>
          {/* We can add more links here later */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
