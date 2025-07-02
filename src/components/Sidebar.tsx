// components/Sidebar.tsx
"use client";

import {
  Settings,
  Menu,
  Users,
  LayoutDashboard,
  LifeBuoy,
  X,
  User
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Clients', href: '/dashboard/clients', icon: <Users size={20} /> },
    { name: 'Settings', href: '/dashboard/settings', icon: <Settings size={20} /> },
    { name: 'Support', href: '/dashboard/support', icon: <LifeBuoy size={20} /> },
  ];

  const SidebarContent = (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-white shadow-md ${collapsed ? 'w-20' : 'w-64'} h-full transition-all duration-300 p-6`}
    >
      <div className="text-xl font-bold flex items-center justify-between mb-6">
        {!collapsed && <span>Dashboard</span>}
        <button onClick={() => setCollapsed(!collapsed)} className="text-gray-600">
          <Menu size={20} />
        </button>
      </div>
      <nav className="space-y-6 text-gray-700">
        {links.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center space-x-3 hover:text-blue-600 transition ${
              pathname === link.href ? 'text-blue-700 font-semibold' : ''
            }`}
            onClick={() => setMobileOpen(false)}
          >
            <span className="shrink-0">{link.icon}</span>
            {!collapsed && <span>{link.name}</span>}
          </Link>
        ))}
      </nav>
    </motion.div>
  );

  return (
    <div className="sticky top-0">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block sticky top-0 h-screen">
        {SidebarContent}
      </aside>

      {/* Mobile Sidebar Toggle Button */}
      <div className="md:hidden p-4">
        <button onClick={() => setMobileOpen(true)} className="text-gray-600">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex"
          >
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-64 h-full p-6 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold">Menu</h2>
                  <button onClick={() => setMobileOpen(false)} className="text-gray-600">
                    <X size={20} />
                  </button>
                </div>
                {SidebarContent}
              </div>
              <div className="md:hidden px-4 pb-4">
                <div className="flex flex-col items-start space-y-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border px-3 py-1 rounded-lg w-full"
                  />
                  <div className="flex items-center space-x-3">
                    <User className="text-gray-600" />
                    <span className="text-gray-700">Profile</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 w-full">
                    Logout
                  </button>
                </div>
              </div>
            </motion.div>
            <div className="flex-1" onClick={() => setMobileOpen(false)}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}