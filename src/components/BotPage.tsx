'use client';

import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';

export default function BotConnectionModal() {
  const [isConnected, setIsConnected] = useState(false);
  const [connectionTime, setConnectionTime] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleConnect = () => {
    setIsConnected(true);
    setConnectionTime(new Date().toISOString());
    setIsOpen(true);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setConnectionTime('');
    setIsOpen(false);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:ml-64">
      <h1 className="text-2xl font-semibold mb-4">Bot Connection</h1>

      <div className="bg-white shadow rounded p-6">
        <p className="mb-2 font-medium">
          Status: <span className={isConnected ? 'text-green-600' : 'text-red-600'}>{isConnected ? 'Connected' : 'Disconnected'}</span>
        </p>

        {isConnected && connectionTime && (
          <>
            <p className="mb-2">Connected At: {connectionTime}</p>
            <button
              onClick={handleDisconnect}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Turn Off Bot
            </button>
          </>
        )}

        {!isConnected && (
          <button
            onClick={handleConnect}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Connect Bot
          </button>
        )}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Scan this QR Code
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 mb-4">Scan the QR code below to complete the bot setup.</p>
                    <div className="flex justify-center">
                      <Image
                        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=bot-connect-token"
                        alt="QR Code"
                        className="border rounded p-2 bg-gray-100"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Done
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
}
