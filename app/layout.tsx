import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="fixed w-full bg-black bg-opacity-50 text-white z-10">
          <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">YourLogo</Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="/about" className="hover:text-gray-300">About</Link>
              <Link href="/whitepaper" className="hover:text-gray-300">Whitepaper</Link>
              <Link href="https://discord.gg/your-discord" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Community</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-black text-white py-6">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2023 Your Company Name. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}