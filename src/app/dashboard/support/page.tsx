// app/support/page.tsx
'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How can I reset my password?',
      answer: 'Go to the login page and click "Forgot Password". Follow the instructions sent to your email.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'Fill out the contact form on this page or email support@yourdomain.com.',
    },
    {
      question: 'Where can I find my invoices?',
      answer: 'Invoices are available under the Billing section of your account settings.',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting form:', formData);
    alert('Your message has been submitted!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Support</h1>

      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded p-4">
              <button
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                className="text-left w-full text-lg font-medium"
              >
                {faq.question}
              </button>
              {faqOpen === index && <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full mt-1 p-2 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            <Send className="w-4 h-4" /> Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default SupportPage;
