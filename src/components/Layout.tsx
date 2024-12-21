import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

export const Layout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Animated background grid */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        </div>
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-1/4 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-1/4 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
        />
      </div>

      <Header />
      
      <main className="container mx-auto min-h-[calc(100vh-4rem)] px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};