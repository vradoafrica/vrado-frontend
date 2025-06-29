'use client'

import { fetcher } from '@/lib/fetcher'
import { useEffect, useState } from 'react'
import  Cookies  from 'js-cookie';
import { createBusiness } from '@/features/auth/services/api';
import { useRouter } from 'next/navigation';

export default function BusinessSetupPage() {
  const router =  useRouter()
  const token = Cookies.get("token") 
  

  if(!token){
    router.push("/login")
  }

  useEffect(()=>{
    try{
      fetcher(' https://vrado-backend.onrender.com/api/v1/business', {
        method: 'GET',
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
      }).then(()=>{router.push("/dashboard")});
    }catch(err){
      console.log(err)
    }
  },[token])
   

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    logo:"logo"
  })

  // const [logo, setLogo] = useState<File | null>(null)
  // const [preview, setPreview] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0]
  //   if (file) {
  //     setLogo(file)
  //     setPreview(URL.createObjectURL(file))
  //   }
  // }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    Object.entries(form).forEach(([key, value]) => {
      if (value) formData.append(key, value)
    })
//     if (logo) formData.append('logo', logo)
// console.log(form,formData)
    try {
     createBusiness(form,token).then(data=>console.log(data))

     router.push("/dashboard")
    } catch (err) {
      console.error('Error:', err)
      alert('Failed to save profile.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Create Your Business Profile</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Provide your business information and upload your Business logo.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6" encType="multipart/form-data">
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

          {/* <div className="md:col-span-2">
            <label className="block font-medium text-gray-700 mb-2">Business Logo</label>
            <div className="flex items-center gap-4">
              {preview && (
                <img
                  src={preview}
                  alt="Logo Preview"
                  className="w-20 h-20 object-cover rounded-lg border border-gray-300"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="text-sm border border-gray-300 rounded-xl px-3 py-2 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div> */}

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition-all duration-200"
            >
              Save & Continue
            </button>
          </div>
        </form>
      </div>
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
        className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
    </div>
  )
}
