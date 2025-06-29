"use client";

import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Send } from "lucide-react";

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const faqs = [
    {
      question: "How can I reset my password?",
      answer:
        'Go to the login page and click "Forgot Password". Follow the instructions sent to your email.',
    },
    {
      question: "How do I contact customer support?",
      answer:
        "Fill out the contact form on this page or email support@yourdomain.com.",
    },
    {
      question: "Where can I find my invoices?",
      answer:
        "Invoices are available under the Billing section of your account settings.",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
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
              {faqOpen === index && (
                <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
              )}
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

      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Thank you!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your support request has been submitted. We will get back to you shortly.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SupportPage;
