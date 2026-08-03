import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";
import logo from "../assets/logo2.png";

export function Footer() {
  return (
<footer className="bg-white dark:bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-12">
          {/* Col 1 */}
          <div className="space-y-5">
            <Link href="/">
              <img src={logo} alt="Nexio" className="h-7 w-auto cursor-pointer block mb-4" />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Transforming Businesses Through Technology. We build scalable, secure, and intelligent digital solutions.
            </p>
            <div className="space-y-1.5 text-sm text-foreground font-medium">
              <p>nexiogbl@gmail.com</p>
              <p>www.nexiogbl.com</p>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold mb-5 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about"><span className="hover:text-primary transition-colors cursor-pointer">About Us</span></Link></li>
              <li><Link href="/resources"><span className="hover:text-primary transition-colors cursor-pointer">Resources</span></Link></li>
              <li><Link href="/careers"><span className="hover:text-primary transition-colors cursor-pointer">Careers</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary transition-colors cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-semibold mb-5 text-sm">Solutions</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/solutions/digital-solutions"><span className="hover:text-primary transition-colors cursor-pointer">Digital Solutions</span></Link></li>
              <li><Link href="/solutions/ai-automation"><span className="hover:text-primary transition-colors cursor-pointer">AI & Automation</span></Link></li>
              <li><Link href="/solutions/cybersecurity"><span className="hover:text-primary transition-colors cursor-pointer">Cybersecurity</span></Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-semibold mb-5 text-sm">Connect</h4>
            <div className="flex gap-3 mb-7">
              <a href="https://www.linkedin.com/company/nexioglobal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://www.facebook.com/nexiogbl" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/nexiogbl?igsh=MTJnZTE5bmhtaWZ1bg%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/privacy-policy"><span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span></Link>
              <span className="text-muted-foreground/30">|</span>
              <Link href="/terms-of-service"><span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span></Link>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Nexio Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

