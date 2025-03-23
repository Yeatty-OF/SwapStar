import { motion } from "framer-motion";

const features = [
  {
    icon: "coins",
    title: "300+ Cryptocurrencies",
    description: "Access a wide variety of cryptocurrencies, from Bitcoin to the latest altcoins."
  },
  {
    icon: "tachometer-alt",
    title: "Lightning Fast Swaps",
    description: "Most exchanges complete within 5-30 minutes depending on blockchain confirmation times."
  },
  {
    icon: "user-lock",
    title: "No Registration",
    description: "Start exchanging immediately without creating an account or going through KYC."
  },
  {
    icon: "chart-line",
    title: "Best Market Rates",
    description: "Our algorithm searches for the best rates across multiple exchange platforms."
  },
  {
    icon: "shield-alt",
    title: "Enhanced Security",
    description: "We don't store your funds or personal data, minimizing security risks."
  },
  {
    icon: "headset",
    title: "24/7 Support",
    description: "Our dedicated support team is always available to help with any issues."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Features() {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose <span className="text-primary">SwapStar</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our platform offers a range of benefits that make cryptocurrency exchanges simple and secure
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-background rounded-xl crypto-card"
              variants={item}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 text-primary text-3xl">
                <i className={`fas fa-${feature.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
