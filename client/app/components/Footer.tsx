// This is the complete code for app/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 p-6 text-center">
      <div className="container mx-auto">
        © {new Date().getFullYear()} Clients Name. All Rights Reserved.
      </div>
    </footer>
  );
}
