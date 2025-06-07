
import SideBar from "@/components/Sidebar";
import Topnav from "@/components/TopNav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
     <SideBar/>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
      <Topnav />

        {/* Dashboard Content */}
        <main className="md:p-6 p-0 md:pt-4 pt-10 space-y-6">
        {children}
        </main>
      </div>
    </div>
  );
}
