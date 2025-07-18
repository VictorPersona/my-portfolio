'use client'

import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <section className="min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Contact Me
      </h1>
      <ContactForm />
    </section>
  )
}
