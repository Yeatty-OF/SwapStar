import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { StarLogo } from "@/assets/svgs/star-logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-background/95 backdrop-blur-sm z-50 border-b border-secondary">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <StarLogo size={36} />
          <h1 className="text-2xl font-bold">Swap<span className="text-primary">Star</span></h1>
        </Link>
        
        {/* Navigation links removed as requested */}
        
        <div className="flex items-center">
          <button 
            className="md:hidden text-2xl" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
      
      {/* Mobile menu removed as requested */}
    </header>
  );
}
