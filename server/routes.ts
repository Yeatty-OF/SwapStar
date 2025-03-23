import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for widget configuration
  app.get("/api/config", (req, res) => {
    res.json({
      widgetConfig: {
        apiKey: process.env.CHANGENOW_API_KEY || "c5b6ffeeda088dfe0d5dfd1349185776fb34ba1670d654c4b4ecc03d7e57d0a4",
        defaultFrom: "btc",
        defaultTo: "eth",
        defaultAmount: 0.1
      }
    });
  });

  // API route for supported currencies
  app.get("/api/currencies", (req, res) => {
    // This would typically fetch from ChangeNow API
    // For now, return a static list of popular currencies
    res.json({
      currencies: [
        { name: "Bitcoin", symbol: "BTC", type: "bitcoin" },
        { name: "Ethereum", symbol: "ETH", type: "ethereum" },
        { name: "Cardano", symbol: "ADA", type: "cardano" },
        { name: "Solana", symbol: "SOL", type: "solana" },
        { name: "Binance Coin", symbol: "BNB", type: "binance" },
        { name: "XRP", symbol: "XRP", type: "ripple" },
        { name: "Dogecoin", symbol: "DOGE", type: "dogecoin" },
        { name: "Polkadot", symbol: "DOT", type: "polkadot" },
        { name: "Avalanche", symbol: "AVAX", type: "avalanche" },
        { name: "Shiba Inu", symbol: "SHIB", type: "shiba" }
      ]
    });
  });

  // API route for FAQ items
  app.get("/api/faq", (req, res) => {
    res.json({
      faqItems: [
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
      ]
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
