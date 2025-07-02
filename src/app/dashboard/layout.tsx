import SideBar from "@/components/Sidebar";
import Topnav from "@/components/TopNav";
import { getBusinessDetails } from "@/features/auth/services/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value || ""
  const businessDetails = await getBusinessDetails(token)

  if(!businessDetails?.success)throw redirect("/onboarding")
   


  return (
    <div className="min-h-screen bg-gray-100 flex">
     <SideBar/>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
      <Topnav business={businessDetails.data} />

        {/* Dashboard Content */}
        <main className="md:p-6 p-0 md:pt-4 pt-10 space-y-6">
        {children}
        </main>
      </div>
    </div>
  );
}
