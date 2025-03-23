import { Link } from "wouter";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/70 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="bg-secondary rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to <span className="text-primary">Exchange</span>?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start swapping cryptocurrencies instantly with the best rates. No registration required.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#exchange-widget" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-3 transition-colors text-center block">
                Start Swapping Now
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#how-it-works" className="border border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full px-8 py-3 transition-colors text-center block">
                How It Works
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
