import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, PieChart, Settings, BarChart3, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useToast } from "./ui/use-toast";
import { motion } from "framer-motion";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: PieChart, label: "Analytics", path: "/analytics" },
  { icon: BarChart3, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Settings", path: "/settings" }
];

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const { toast } = useToast();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative size-8">
            <motion.div 
              className="absolute inset-0 rounded-full bg-primary/20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="absolute inset-1 rounded-full bg-primary" />
          </div>
          <span className="text-xl font-bold">Finance App</span>
        </Link>
        
        <nav className="flex items-center gap-1">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={location.pathname === item.path ? "default" : "ghost"}
                className={`relative gap-2 transition-all duration-200 ${
                  location.pathname === item.path 
                    ? "bg-primary/10 dark:bg-primary/20" 
                    : ""
                }`}
                onClick={() => {
                  toast({
                    title: `Navigating to ${item.label}`,
                    description: "Loading your content...",
                  });
                }}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="size-4" />
                </motion.div>
                <span>{item.label}</span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-md bg-primary/10 dark:bg-primary/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Button>
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </motion.div>
          </Button>
        </nav>
      </div>
    </header>
  );
};