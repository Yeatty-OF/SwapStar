// Exchange widget configuration
export const WIDGET_CONFIG = {
  DEFAULT_FROM: "btc",
  DEFAULT_TO: "eth",
  DEFAULT_AMOUNT: 0.1,
  WIDGET_HEIGHT: 356,
  WIDGET_WIDTH: 440,
  BACKGROUND_COLOR: "2B2B35",
  PRIMARY_COLOR: "8d0db8",
  DARK_MODE: true,
};

// FAQ questions
export const FAQ_ITEMS = [
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

// Features list
export const FEATURES = [
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

// How it works steps
export const HOW_IT_WORKS_STEPS = [
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

// Popular cryptocurrencies
export const POPULAR_CRYPTOS = [
  { name: "Bitcoin", symbol: "BTC", type: "bitcoin" },
  { name: "Ethereum", symbol: "ETH", type: "ethereum" },
  { name: "Cardano", symbol: "ADA", type: "cardano" },
  { name: "Solana", symbol: "SOL", type: "solana" },
  { name: "Binance Coin", symbol: "BNB", type: "binance" },
  { name: "XRP", symbol: "XRP", type: "ripple" }
];
