import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, PieChart, Settings, BarChart3, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useToast } from "./ui/use-toast";

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
            <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20" />
            <div className="absolute inset-1 rounded-full bg-primary" />
          </div>
          <span className="text-xl font-bold">Finance App</span>
        </Link>
        
        <nav className="flex items-center gap-1">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={location.pathname === item.path ? "default" : "ghost"}
                className="relative gap-2"
                onClick={() => {
                  toast({
                    title: `Navigating to ${item.label}`,
                    description: "Loading your content...",
                  });
                }}
              >
                <item.icon className="size-4" />
                <span>{item.label}</span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Button>
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
        </nav>
      </div>
    </header>
  );
};