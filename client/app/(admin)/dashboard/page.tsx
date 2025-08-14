// This is the complete code for app/(admin)/dashboard/page.tsx

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="text-lg text-gray-400">
        Welcome to the Admin Panel. Here you can manage your websites content.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-blue-400">Portfolio Items</h2>
          <p className="mt-2">Manage the videos showcased in your portfolio.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-blue-400">Client Inquiries</h2>
          <p className="mt-2">View messages sent through your contact form.</p>
        </div>
      </div>
    </div>
  );
}
