import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-xl">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Finance App</h3>
            <p className="text-sm text-muted-foreground">
              Track your expenses and manage your finances with our powerful tools.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Github className="size-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="size-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="size-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Finance App. All rights reserved.
        </div>
      </div>
    </footer>
  );
};