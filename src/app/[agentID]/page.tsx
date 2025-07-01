// app/ngo-registration/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NGORegistrationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const Input = ({ name, placeholder, type = 'text', value, onChange, error }: any) => (
    <div className="relative">
      <input
        ref={(el) => (inputRefs.current[name] = el)}
        name={name}
        className={`peer w-full px-4 pt-6 pb-2 rounded-xl border text-sm bg-white transition focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
        placeholder=" "
        type={type}
        value={value || ''}
        onChange={(e) => {
          onChange(e);
          setTimeout(() => inputRefs.current[name]?.focus(), 0);
        }}
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
      >
        {placeholder}
      </label>
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );

  const Button = ({ children, ...props }: any) => (
    <button
      {...props}
      className="rounded-xl px-6 py-3 text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50 transition-all shadow-md"
    >
      {children}
    </button>
  );

  useEffect(() => {
    const savedData = localStorage.getItem('ngoFormData');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormData(parsed.formData || {});
      setStep([1,2,3,4,5].includes(parsed.step) ? parsed.step : 1);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ngoFormData', JSON.stringify({ formData, step }));
  }, [formData, step]);

  const validateStep = () => {
    const stepErrors: any = {};
    if (step === 1) {
      if (!formData.firstName) stepErrors.firstName = 'First name is required';
      if (!formData.surname) stepErrors.surname = 'Surname is required';
      if (!formData.email) {
        stepErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        stepErrors.email = 'Invalid email address';
      }
      if (!formData.phone) stepErrors.phone = 'Phone number is required';
    } else if (step === 2) {
      if (!formData.ngoName1) stepErrors.ngoName1 = 'NGO name is required';
      if (!formData.officeAddress) stepErrors.officeAddress = 'Office address is required';
    } else if (step === 3) {
      if (!formData.trusteeName) stepErrors.trusteeName = 'Trustee name is required';
      if (!formData.trusteePhone) stepErrors.trusteePhone = 'Trustee phone is required';
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const updateFormData = (newData: any) => setFormData({ ...formData, ...newData });

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-indigo-700">NGO Registration</h1>
        <p className="text-gray-500 mt-2">Please complete each step below</p>
      </div>

      <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-10">
        <div className="absolute -top-4 left-6 bg-indigo-600 text-white text-xs font-bold py-1 px-3 rounded-full shadow">
          Step {step} of 5
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {step === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input name="firstName" placeholder="First Name" value={formData.firstName} onChange={(e: any) => updateFormData({ firstName: e.target.value })} error={errors.firstName} />
                <Input name="surname" placeholder="Surname" value={formData.surname} onChange={(e: any) => updateFormData({ surname: e.target.value })} error={errors.surname} />
                <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={(e: any) => updateFormData({ email: e.target.value })} error={errors.email} />
                <Input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={(e: any) => updateFormData({ phone: e.target.value })} error={errors.phone} />
                <div className="col-span-2 flex justify-end">
                  <Button onClick={nextStep}>Next</Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input name="ngoName1" placeholder="Proposed NGO Name" value={formData.ngoName1} onChange={(e: any) => updateFormData({ ngoName1: e.target.value })} error={errors.ngoName1} />
                <Input name="officeAddress" placeholder="Office Address" value={formData.officeAddress} onChange={(e: any) => updateFormData({ officeAddress: e.target.value })} error={errors.officeAddress} />
                <div className="col-span-2 flex justify-between">
                  <Button onClick={prevStep}>Back</Button>
                  <Button onClick={nextStep}>Next</Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input name="trusteeName" placeholder="Trustee Name" value={formData.trusteeName} onChange={(e: any) => updateFormData({ trusteeName: e.target.value })} error={errors.trusteeName} />
                <Input name="trusteePhone" placeholder="Trustee Phone" value={formData.trusteePhone} onChange={(e: any) => updateFormData({ trusteePhone: e.target.value })} error={errors.trusteePhone} />
                <div className="col-span-2 flex justify-between">
                  <Button onClick={prevStep}>Back</Button>
                  <Button onClick={nextStep}>Next</Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {["ninImage", "passport", "signature", "constitution", "headeredLetter", "meetingMinutes"].map((key) => (
                  <div key={key} className="relative space-y-2">
                    <label className="text-sm font-medium text-gray-600">{key.replace(/([A-Z])/g, ' $1')}</label>
                    <input
                      className="block w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
                      type="file"
                      name={key}
                      accept="image/*,application/pdf"
                      onChange={(e: any) => {
                        const file = e.target.files[0];
                        if (file && file.size > 5 * 1024 * 1024) {
                          alert('File size should be less than 5MB');
                          return;
                        }
                        if (formData[key]?.previewUrl) {
                          URL.revokeObjectURL(formData[key].previewUrl);
                        }
                        const previewUrl = file && file.type.startsWith('image') ? URL.createObjectURL(file) : null;
                        updateFormData({ [key]: { file, previewUrl, type: file.type, name: file.name } });
                      }}
                    />
                    {formData[key]?.type?.startsWith('image') && formData[key].previewUrl && (
                      <img src={formData[key].previewUrl} alt={`${key} preview`} className="h-32 object-contain border rounded-md" />
                    )}
                    {formData[key]?.type === 'application/pdf' && (
                      <div className="text-xs text-gray-500 italic">📄 {formData[key].name}</div>
                    )}
                  </div>
                ))}
                <div className="col-span-2 flex justify-between">
                  <Button onClick={prevStep}>Back</Button>
                  <Button onClick={nextStep}>Next</Button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Preview</h2>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  {JSON.stringify(formData, null, 2)}
                </pre>
                <div className="flex justify-between">
                  <Button onClick={prevStep}>Back</Button>
                  <Button onClick={() => alert('Form submitted!')}>Submit</Button>
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
