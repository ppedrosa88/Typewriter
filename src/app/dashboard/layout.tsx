import SideNav from "@/app/ui/dashboard/Sidenav";
import Navbar from "../ui/dashboard/Navbar";
import WithPrivateRoute from "../lib/auth/WithPrivateRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <WithPrivateRoute>
      <div className="min-h-screen flex flex-col bg-[#1F1F1F]">
        <div className="">
          <Navbar />
        </div>
        <div className="flex flex-col md:flex-row flex-grow">
          <div className="w-full md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-4 md:overflow-y-auto">{children}</div>
        </div>
      </div>
    </WithPrivateRoute>
  );
}
