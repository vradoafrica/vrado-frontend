'use client';

import React, { useState } from "react";
import Modal from "@/components/modal";

export default function ClientsPage() {
  const allClients = [
    { id: 1, name: "Acme Corp", email: "contact@acme.com", phone: "123-456-7890" },
    { id: 2, name: "Globex Inc", email: "support@globex.com", phone: "987-654-3210" },
    { id: 3, name: "Soylent Co", email: "info@soylent.com", phone: "555-123-4567" },
    { id: 4, name: "Initech", email: "hello@initech.com", phone: "111-222-3333" },
    { id: 5, name: "Umbrella Corp", email: "admin@umbrella.com", phone: "444-555-6666" },
    { id: 6, name: "Wonka Industries", email: "info@wonka.com", phone: "777-888-9999" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage, setClientsPerPage] = useState(3);

  const filteredClients = allClients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = filteredClients.slice(indexOfFirstClient, indexOfLastClient);
  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Client List</h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Search clients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/3"
        />
        <div>
          <label htmlFor="clientsPerPage" className="mr-2 font-medium">Clients per page:</label>
          <select
            id="clientsPerPage"
            value={clientsPerPage}
            onChange={(e) => {
              setClientsPerPage(parseInt(e.target.value));
              setCurrentPage(1);
            }}
            className="px-3 py-2 border rounded"
          >
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="text-left border-b">
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentClients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-100 border-b">
                <td className="p-4">{client.id}</td>
                <td className="p-4">{client.name}</td>
                <td className="p-4">{client.email}</td>
                <td className="p-4">{client.phone}</td>
                <td className="p-4">
                  <a href={`./clients/${client.id}`} className="text-blue-600 hover:underline">
                 View Details
                  
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {/* <Modal show={true} onClose={()=>console.log("hi") } key={1} message="Are you sure you ant to proceed?" title="Proceed to Register"/> */}
    </div>

  
  );
}
