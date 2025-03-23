import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function ExchangeWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load the ChangeNow stepper connector script
    const script = document.createElement('script');
    script.src = 'https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js';
    script.defer = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Remove the script when component unmounts
      const loadedScript = document.querySelector('script[src="https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js"]');
      if (loadedScript && loadedScript.parentNode) {
        loadedScript.parentNode.removeChild(loadedScript);
      }
    };
  }, []);

  return (
    <motion.div 
      className="widget-container h-[356px] w-full max-w-[440px] mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <iframe 
        ref={iframeRef}
        id="iframe-widget" 
        src="https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=0.1&amountFiat&backgroundColor=2B2B35&darkMode=true&from=btc&horizontal=false&isFiat=false&lang=en-US&link_id=c5b6ffeeda088dfe0d5dfd1349185776fb34ba1670d654c4b4ecc03d7e57d0a4&locales=true&logo=false&primaryColor=8d0db8&to=eth&toTheMoon=false"
        style={{ height: "100%", width: "100%", border: "none" }}
        title="ChangeNow Exchange Widget"
      />
    </motion.div>
  );
}
