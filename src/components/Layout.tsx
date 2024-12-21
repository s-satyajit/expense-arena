import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Animated background grid */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
      </div>

      <Header />
      
      <main className="container mx-auto min-h-[calc(100vh-4rem)] px-4 pt-24">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};