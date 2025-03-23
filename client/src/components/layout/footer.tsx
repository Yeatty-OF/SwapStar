import { Link } from "wouter";
import { StarLogo } from "@/assets/svgs/star-logo";

export function Footer() {
  return (
    <footer className="bg-background pt-12 pb-8 border-t border-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <StarLogo size={28} />
              <h2 className="text-xl font-bold">Swap<span className="text-primary">Star</span></h2>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Instant cryptocurrency exchange with no registration required. Secure, fast, and transparent.
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/xSwapStar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SwapStar. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
