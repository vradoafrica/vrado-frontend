// app/clients/[id]/page.tsx
'use client';

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ClientDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const clientId = params.id as string;

  const clients = [
    {
      id: '1',
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      address: '123 Main St, Cityville, Country',
      businessName: 'Doe Enterprises',
      businessEmail: 'contact@doeenterprises.com',
      businessAddress: '456 Business Rd, Commerce City, Country',
      businessWebsite: 'https://doeenterprises.com',
      profileImage: '/profile-placeholder.png',
      businessLogo: '/business-logo-placeholder.png',
      idType: 'National ID',
      idNumber: 'ID123456789',
      idDocument: '/id-document-placeholder.png',
    },
    {
      id: '2',
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+9876543210',
      address: '789 Secondary St, Townsville, Country',
      businessName: 'Smith Ventures',
      businessEmail: 'hello@smithventures.com',
      businessAddress: '101 Commerce Blvd, Trade City, Country',
      businessWebsite: 'https://smithventures.com',
      profileImage: '/profile2-placeholder.png',
      businessLogo: '/business-logo2-placeholder.png',
      idType: 'Passport',
      idNumber: 'P123456789',
      idDocument: '/id-document2-placeholder.png',
    },
  ];

  const client = clients.find(c => c.id === clientId);

  if (!client) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mt-10 text-gray-600"
      >
        <button
          onClick={() => router.back()}
          className="flex items-center text-blue-600 hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </button>
        Client not found.
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto p-6 bg-white rounded shadow"
    >
      <button
        onClick={() => router.back()}
        className="flex items-center text-blue-600 hover:underline mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </button>

      <h1 className="text-2xl font-semibold mb-6">Client Details</h1>

      {/* Personal Info */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={client.profileImage}
            alt="Profile"
            width={100}
            height={100}
            className="h-24 w-24 object-cover rounded-full border"
          />
          <div>
            <p className="text-lg font-medium">{client.fullName}</p>
            <p className="text-sm text-gray-600">{client.email}</p>
            <p className="text-sm text-gray-600">{client.phone}</p>
            <p className="text-sm text-gray-600">{client.address}</p>
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Business Information</h2>
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={client.businessLogo}
            alt="Business Logo"
            width={100}
            height={100}
            className="h-24 w-24 object-cover rounded border"
          />
          <div>
            <p className="text-lg font-medium">{client.businessName}</p>
            <p className="text-sm text-gray-600">{client.businessEmail}</p>
            <p className="text-sm text-gray-600">{client.businessAddress}</p>
            <a
              href={client.businessWebsite}
              className="text-sm text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {client.businessWebsite}
            </a>
          </div>
        </div>
      </section>

      {/* Identity Verification */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Identity Verification</h2>
        <div className="flex items-center gap-4">
          <Image
            src={client.idDocument}
            alt="ID Document"
            height={100}
            width={100}
            className="h-24 w-32 object-cover border rounded"
          />
          <div>
            <p className="text-sm text-gray-600">Type: {client.idType}</p>
            <p className="text-sm text-gray-600">Number: {client.idNumber}</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ClientDetailsPage;
