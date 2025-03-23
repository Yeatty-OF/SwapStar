import { motion } from "framer-motion";

interface StarLogoProps {
  size?: number;
  className?: string;
}

export function StarLogo({ size = 40, className = "" }: StarLogoProps) {
  return (
    <div className={`star-logo ${className}`} style={{ width: size, height: size }}>
      <div className="star-shine" style={{ 
        width: size * 1.5, 
        height: size * 1.5, 
        top: -size * 0.25, 
        left: -size * 0.25 
      }}></div>
      
      <motion.svg
        viewBox="0 0 24 24"
        className="star-logo-inner text-primary"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <path 
          d="M12 1.25L14.793 8.564L22.5 9.125L16.75 14.375L18.187 22L12 18L5.812 22L7.25 14.375L1.5 9.125L9.207 8.564L12 1.25Z" 
          fill="currentColor"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="0.5"
        />
      </motion.svg>
    </div>
  );
}