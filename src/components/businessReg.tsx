"use client";

import { useState } from "react";
import { Dialog, DialogTitle } from "@headlessui/react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      {/* <Dialog className="fixed inset-0 bg-black bg-opacity-50" /> */}
      <div className="flex justify-center bg inset-0 z-10 bg-blackw-screen overflow-y-auto">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6 z-10">
        <DialogTitle className="text-xl font-semibold mb-4">Registration</DialogTitle>

        {step === 1 && (
          <div className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border rounded p-2" />
            <input type="email" placeholder="Email" className="w-full border rounded p-2" />
            <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <input type="text" placeholder="Business Name" className="w-full border rounded p-2" />
            <input type="text" placeholder="Business Type" className="w-full border rounded p-2" />
            <div className="flex justify-between">
              <button onClick={prevStep} className="text-gray-600">Back</button>
              <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <input type="file" className="w-full border rounded p-2" />
            <input type="text" placeholder="National ID Number" className="w-full border rounded p-2" />
            <div className="flex justify-between">
              <button onClick={prevStep} className="text-gray-600">Back</button>
              <button onClick={onClose} className="bg-green-600 text-white px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
      </div>

    </Dialog>
  );
}
