import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <Link href="/" className="text-primary hover:underline flex items-center">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the SwapStar platform ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>
          
          <h2>2. Description of Service</h2>
          <p>SwapStar provides a cryptocurrency exchange platform that allows users to exchange one cryptocurrency for another. The platform facilitates these exchanges without requiring user registration.</p>
          
          <h2>3. Eligibility</h2>
          <p>You must be at least 18 years old to use SwapStar. By using our service, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these terms.</p>
          
          <h2>4. Transaction Process</h2>
          <p>SwapStar acts solely as an intermediary platform for cryptocurrency exchanges. We do not buy, sell, or trade cryptocurrencies with users directly. All transactions are processed via blockchain technology and are subject to network confirmations and conditions.</p>
          
          <h2>5. Exchange Rates and Fees</h2>
          <p>Exchange rates displayed on SwapStar are approximate and may fluctuate due to market volatility. The final exchange rate will be confirmed before your transaction is processed. SwapStar charges a service fee that is included in the displayed exchange rate.</p>
          
          <h2>6. Transaction Limits</h2>
          <p>Minimum transaction amounts are established to ensure that the value of the cryptocurrency being exchanged exceeds the network transaction fees. Maximum transaction limits may be imposed at our discretion.</p>
          
          <h2>7. Transaction Execution Time</h2>
          <p>Transaction execution times depend on blockchain network conditions and confirmation times. SwapStar is not responsible for delays caused by network congestion, technical issues with the blockchain, or other circumstances beyond our control.</p>
          
          <h2>8. Refund Policy</h2>
          <p>In the event a transaction cannot be completed, we will make reasonable efforts to refund your cryptocurrency to the address from which it was sent. Refunds are subject to network fees and may take additional time to process.</p>
          
          <h2>9. Prohibited Activities</h2>
          <p>You agree not to use SwapStar for any illegal activities, including but not limited to money laundering, terrorist financing, fraud, or any other activities that violate applicable laws and regulations.</p>
          
          <h2>10. Risk Disclosure</h2>
          <p>Cryptocurrency trading involves significant risk. You acknowledge and agree that you shall access and use the Service at your own risk. The cryptocurrency market is volatile and we do not guarantee any exchange rates or the availability of certain cryptocurrencies.</p>
          
          <h2>11. Privacy Policy</h2>
          <p>Our Privacy Policy governs the collection, use, and disclosure of your information. By using SwapStar, you consent to our collection and use of your information as described in our Privacy Policy.</p>
          
          <h2>12. Intellectual Property</h2>
          <p>All content on SwapStar, including but not limited to text, graphics, logos, icons, images, and software, is the property of SwapStar and is protected by copyright, trademark, and other intellectual property laws.</p>
          
          <h2>13. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, SwapStar and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
          
          <h2>14. Indemnification</h2>
          <p>You agree to defend, indemnify, and hold harmless SwapStar and its affiliates from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the Service or your violation of these Terms.</p>
          
          <h2>15. Modifications to Terms</h2>
          <p>SwapStar reserves the right to modify these Terms at any time. We will provide notice of significant changes to these Terms by posting the new terms on our platform. Your continued use of the Service after any changes to these Terms constitutes your acceptance of such changes.</p>
          
          <h2>16. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which SwapStar operates, without regard to its conflict of law principles.</p>
          
          <h2>17. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>Email: <a href="mailto:yeattypersonal@gmail.com" className="text-primary hover:underline">yeattypersonal@gmail.com</a></p>
          <p>Telegram: <a href="https://t.me/xSwapStar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://t.me/xSwapStar</a></p>
        </div>
      </motion.div>
    </div>
  );
}