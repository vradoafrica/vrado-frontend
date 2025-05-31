"use client"
import {Settings, Menu,Users,LayoutDashboard,LifeBuoy} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function SideBar() {
    const [collapsed,setCollapsed] = useState(true)
    const pathname = usePathname();
 

    const links = [
        { name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'Clients', href: '/dashboard/clients', icon: <Users size={20} /> },
        { name: 'Settings', href: '/dashboard/settings', icon: <Settings size={20} /> },
        { name: 'Support', href: '/dashboard/support', icon: <LifeBuoy size={20} /> },
      ];
    return (
      <aside className={`bg-white shadow-md ${collapsed ? 'w-20' : 'w-64'} sticky h-screen top-0 transition-all duration-300 hidden md:block`}>
        <div className="p-6 text-xl font-bold flex items-center justify-between">
          {!collapsed && <span>Dashboard</span>}
          <button onClick={() => setCollapsed(!collapsed)} className="text-gray-600">
            <Menu size={20} />
          </button>
        </div>
        <nav className="p-6 space-y-6 text-gray-700">

        {links.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center space-x-3 hover:text-blue-600 transition ${
              pathname === link.href ? 'text-blue-700' : ''
            }`}
          >
            
            {collapsed ? <span className={pathname === link.href ? 'text-blue-700' : ''}>{link.icon}</span> :<span>{link.name}</span>}
           
          </Link>
        ))}

        </nav>
      </aside>
    );
  }
  