import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does an exchange take?",
    answer: "Most exchanges are completed within 5-30 minutes. However, the exact time depends on the blockchain confirmation times of the cryptocurrencies you're exchanging. During periods of high network congestion, it might take longer."
  },
  {
    question: "Is there a limit to how much I can exchange?",
    answer: "There is a minimum exchange amount that varies by cryptocurrency to ensure the transaction fees don't exceed the exchange amount. There's typically no maximum limit for most exchanges."
  },
  {
    question: "Do I need to create an account to use SwapStar?",
    answer: "No, SwapStar does not require any registration or account creation. You can immediately start exchanging cryptocurrencies just by providing your wallet address for receiving funds."
  },
  {
    question: "What fees does SwapStar charge?",
    answer: "SwapStar charges a small service fee that is already included in the exchange rate you see. Additionally, there are network fees that are paid to miners to process your transaction on the respective blockchains."
  },
  {
    question: "What happens if I send the wrong amount?",
    answer: "If you send less than the specified amount, the system will automatically adjust and send you the equivalent exchange amount. If you send more, the excess will be automatically refunded to your wallet."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find answers to common questions about our cryptocurrency exchange service
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-4 border border-background rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button 
                className="w-full p-4 text-left bg-background flex justify-between items-center"
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <motion.i 
                  className="fas fa-chevron-down text-primary"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="p-4 bg-background border-t border-secondary"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">Still have questions?</p>
          <motion.a 
            href="/support"
            className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-3 transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.a>
        </div>
      </div>
    </section>
  );
}
