import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Privacy() {
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
        
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>At SwapStar, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our cryptocurrency exchange service.</p>
          
          <h2>2. Information We Collect</h2>
          <p>We collect minimal information necessary to provide our service:</p>
          <ul>
            <li>Transaction data: cryptocurrency addresses, transaction amounts, and blockchain transaction IDs</li>
            <li>Technical data: IP address, browser type, device information, and cookies</li>
            <li>Communication data: if you contact our support team, we may keep records of that correspondence</li>
          </ul>
          
          <h2>3. How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>To process your cryptocurrency exchanges</li>
            <li>To provide customer support</li>
            <li>To improve our service and user experience</li>
            <li>To comply with legal obligations and prevent fraudulent activities</li>
          </ul>
          
          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          
          <h2>5. Data Retention</h2>
          <p>We retain your information only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
          
          <h2>6. Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your data:</p>
          <ul>
            <li>Right to access your personal data</li>
            <li>Right to rectification of inaccurate information</li>
            <li>Right to erasure of your personal data</li>
            <li>Right to restrict processing of your data</li>
            <li>Right to data portability</li>
            <li>Right to object to processing of your data</li>
          </ul>
          
          <h2>7. Cookies</h2>
          <p>We use cookies to enhance your experience on our platform. You can set your browser to refuse all or some browser cookies, but this may affect certain functionalities of our service.</p>
          
          <h2>8. Third-Party Services</h2>
          <p>Our service integrates with third-party services, particularly blockchain networks and cryptocurrency exchange providers. These third parties may collect or have access to information about you. We encourage you to review the privacy policies of these third parties.</p>
          
          <h2>9. Children's Privacy</h2>
          <p>Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.</p>
          
          <h2>10. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page.</p>
          
          <h2>11. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Email: <a href="mailto:yeattypersonal@gmail.com" className="text-primary hover:underline">yeattypersonal@gmail.com</a></p>
          <p>Telegram: <a href="https://t.me/xSwapStar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://t.me/xSwapStar</a></p>
        </div>
      </motion.div>
    </div>
  );
}