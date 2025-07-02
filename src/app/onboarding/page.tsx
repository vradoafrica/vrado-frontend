'use client'

import { useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { createBusiness } from '@/features/auth/services/api'

export default function BusinessSetupPage() {
  const router = useRouter()
  const token = Cookies.get('token')

  if (!token) {
    router.push('/login')
  }

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    logo: 'logo'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    Object.entries(form).forEach(([key, value]) => {
      if (value) formData.append(key, value)
    })

    try {
      await createBusiness(form, token)
      router.push('/dashboard')
    } catch (err) {
      console.error('Error:', err)
      alert('Failed to save profile.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-700">Create Your Business Profile</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Provide your business information and upload your business logo.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          encType="multipart/form-data"
        >
          <Input label="Business Name" name="name" value={form.name} onChange={handleChange} />
          <Input label="Business Email" name="email" type="email" value={form.email} onChange={handleChange} />
          <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
          <Input
            label="Website"
            name="website"
            type="url"
            value={form.website}
            onChange={handleChange}
            required={false}
          />

          <div className="md:col-span-2">
            <Input label="Business Address" name="address" value={form.address} onChange={handleChange} />
          </div>

          <div className="md:col-span-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow hover:bg-blue-700 transition duration-200"
            >
              Save & Continue
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

function Input({ label, name, value, onChange, type = 'text', required = true }: any) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 font-medium text-gray-700">
        {label} {!required && <span className="text-sm text-gray-400">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm"
      />
    </div>
  )
}