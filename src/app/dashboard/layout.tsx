import SideNav from "@/app/ui/dashboard/sidenav";
import Navbar from "../ui/dashboard/navbar";
import WithPrivateRoute from "../lib/auth/WithPrivateRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <WithPrivateRoute>
      <div className="h-screen">
        <Navbar />
        <div className="flex flex-col  md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow px-6 pt-6 pb-2 md:overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </WithPrivateRoute>
  );
}
