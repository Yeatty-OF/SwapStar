import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Select Your Currencies",
    description: "Choose the cryptocurrency you want to exchange and the one you want to receive.",
    icon: "exchange-alt"
  },
  {
    id: 2,
    title: "Enter Your Wallet Address",
    description: "Provide the wallet address where you want to receive your exchanged crypto.",
    icon: "wallet"
  },
  {
    id: 3,
    title: "Send & Receive",
    description: "Make your deposit and receive your exchanged crypto in your wallet.",
    icon: "check-circle"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How <span className="text-primary">SwapStar</span> Works
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Complete your crypto exchange in three simple steps - no registration required
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              className="relative p-6 bg-secondary rounded-xl border border-secondary hover:border-primary transition-all crypto-card"
              variants={item}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-white">
                {step.id}
              </div>
              <div className="pt-6 pb-4">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              <div className="mt-4 text-center">
                <i className={`fas fa-${step.icon} text-primary text-3xl`}></i>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
