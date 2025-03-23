import { Hero } from "@/components/sections/hero";
import { ExchangeWidget } from "@/components/ui/exchange-widget";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { CryptoShowcase } from "@/components/sections/crypto-showcase";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="exchange" className="py-20 bg-secondary relative">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Exchange Crypto <span className="text-primary">Instantly</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Swap between 300+ cryptocurrencies with the best rates. No registration, no complications.
            </p>
          </div>
          
          <div id="exchange-widget" className="max-w-4xl mx-auto bg-background rounded-2xl shadow-xl p-6 border border-border">
            <ExchangeWidget />
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-primary text-2xl mb-2"><i className="fas fa-bolt"></i></div>
              <h3 className="font-semibold mb-1">Fast Transactions</h3>
              <p className="text-sm text-muted-foreground">Exchange crypto in minutes</p>
            </div>
            <div className="p-4">
              <div className="text-primary text-2xl mb-2"><i className="fas fa-shield-alt"></i></div>
              <h3 className="font-semibold mb-1">100% Secure</h3>
              <p className="text-sm text-muted-foreground">Your data stays private</p>
            </div>
            <div className="p-4">
              <div className="text-primary text-2xl mb-2"><i className="fas fa-exchange-alt"></i></div>
              <h3 className="font-semibold mb-1">Best Rates</h3>
              <p className="text-sm text-muted-foreground">Guaranteed fair prices</p>
            </div>
            <div className="p-4">
              <div className="text-primary text-2xl mb-2"><i className="fas fa-user-shield"></i></div>
              <h3 className="font-semibold mb-1">No Sign Up</h3>
              <p className="text-sm text-muted-foreground">Exchange without registration</p>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks />
      <Features />
      <CryptoShowcase />
      <FAQ />
      <CTA />
    </>
  );
}
