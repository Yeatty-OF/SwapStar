import { Link } from "wouter";
import { motion } from "framer-motion";
import { CryptoCoin } from "@/assets/svgs/crypto-coins";

export function Hero() {
  return (
    <section className="pt-12 pb-24 overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/70 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg mx-auto lg:mx-0">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Instant Crypto <span className="gradient-text">Exchange</span> Without Sign Up
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Swap your cryptocurrencies instantly with the best rates and no registration required. Fast, secure, and transparent.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#exchange-widget" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-3 transition-colors">
                Start Swapping
              </a>
              <a href="#how-it-works" className="border border-secondary hover:border-primary text-foreground hover:text-primary font-semibold rounded-full px-8 py-3 transition-colors">
                How It Works
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex items-center space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center">
                <i className="fas fa-shield-alt text-green-500 mr-2"></i>
                <span className="text-sm">Secure Transactions</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-bolt text-amber-500 mr-2"></i>
                <span className="text-sm">Lightning Fast</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-lock text-green-500 mr-2"></i>
                <span className="text-sm">No Registration</span>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated crypto icons */}
              <motion.div 
                className="absolute -top-16 -left-12"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <CryptoCoin type="bitcoin" size={64} />
              </motion.div>
              <motion.div 
                className="absolute top-20 -right-8"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <CryptoCoin type="ethereum" size={48} />
              </motion.div>
              <motion.div 
                className="absolute -bottom-8 left-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                <CryptoCoin type="cardano" size={56} />
              </motion.div>
              
              {/* Main hero image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80" 
                  alt="Cryptocurrency Exchange" 
                  className="w-full max-w-md rounded-xl shadow-2xl border border-secondary"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
