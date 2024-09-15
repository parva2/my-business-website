import { Button } from "@/components/ui/button"

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Whitepaper</h1>
        <p className="text-xl mb-6">
          Our comprehensive whitepaper details our technology, market approach, and future plans.
          Download it to get an in-depth understanding of our vision and strategy.
        </p>
        <Button asChild>
          <a href="/path-to-your-whitepaper.pdf" download>Download Whitepaper</a>
        </Button>
      </div>
    </div>
  )
}