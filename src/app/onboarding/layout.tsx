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
  
  if(businessDetails?.success)throw redirect("/dashboard")
    


  return (<>{children}</>);
}
