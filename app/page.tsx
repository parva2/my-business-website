'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email)
    // Reset the form
    setEmail('')
    alert('Thank you for joining our waitlist!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-xl mb-8">Our mission is to revolutionize the industry with innovative solutions.</p>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow mr-2 text-black"
            />
            <Button type="submit">Join Waitlist</Button>
          </div>
        </form>
        <Button variant="outline" asChild>
          <a href="/whitepaper">Read Our Whitepaper</a>
        </Button>
      </div>
    </div>
  )
}