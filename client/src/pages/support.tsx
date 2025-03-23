import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Support() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! We'll get back to you as soon as possible.",
    });
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  
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
        
        <h1 className="text-3xl font-bold mb-8">Support</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-6">Having trouble with our service or have questions? We're here to help!</p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Support</h3>
                  <p className="text-muted-foreground mb-1">For general inquiries:</p>
                  <a href="mailto:yeattypersonal@gmail.com" className="text-primary hover:underline">yeattypersonal@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <i className="fab fa-telegram text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telegram Support</h3>
                  <p className="text-muted-foreground mb-1">Get faster responses through Telegram:</p>
                  <a 
                    href="https://t.me/xSwapStar" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline"
                  >
                    https://t.me/xSwapStar
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <i className="fas fa-question-circle text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">FAQs</h3>
                  <p className="text-muted-foreground mb-1">Check our FAQ section for quick answers:</p>
                  <Link href="/#faq" className="text-primary hover:underline">
                    View FAQs
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            
            {formStatus.submitted && formStatus.success ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6">
                <p className="text-green-400">{formStatus.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="transaction">Transaction Issue</option>
                    <option value="refund">Refund Request</option>
                    <option value="rates">Exchange Rates Question</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg px-6 py-3 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
            
            <div className="mt-6 text-sm text-muted-foreground">
              <p>By submitting this form, you agree to our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}