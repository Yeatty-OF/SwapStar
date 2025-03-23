import { motion } from "framer-motion";
import { CryptoCoin } from "@/assets/svgs/crypto-coins";

type CoinType = "bitcoin" | "ethereum" | "cardano" | "solana" | "binance" | "ripple";

interface CryptoItem {
  name: string;
  symbol: string;
  type: CoinType;
}

const cryptos: CryptoItem[] = [
  { name: "Bitcoin", symbol: "BTC", type: "bitcoin" },
  { name: "Ethereum", symbol: "ETH", type: "ethereum" },
  { name: "Cardano", symbol: "ADA", type: "cardano" },
  { name: "Solana", symbol: "SOL", type: "solana" },
  { name: "Binance Coin", symbol: "BNB", type: "binance" },
  { name: "XRP", symbol: "XRP", type: "ripple" }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3
    }
  }
};

export function CryptoShowcase() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Popular <span className="text-primary">Cryptocurrencies</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Exchange any of these cryptocurrencies and many more with the best rates
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {cryptos.map((crypto, index) => (
            <motion.div 
              key={index}
              className="p-4 bg-secondary rounded-xl flex flex-col items-center crypto-card"
              variants={item}
            >
              <CryptoCoin type={crypto.type} size={48} className="mb-3" />
              <h3 className="font-semibold">{crypto.name}</h3>
              <p className="text-sm text-muted-foreground">{crypto.symbol}</p>
            </motion.div>
          ))}
        </motion.div>
        

      </div>
    </section>
  );
}
