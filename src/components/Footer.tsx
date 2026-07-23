import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1 */}
          <div className="space-y-5">
            <span className="text-2xl font-semibold text-primary tracking-tight">nexio</span>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Transforming Businesses Through Technology. We build scalable, secure, and intelligent digital solutions.
            </p>
            <div className="space-y-1.5 text-sm text-foreground font-medium">
              <p>hello@nexio.biz</p>
              <p>www.nexio.biz</p>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold mb-5 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-semibold mb-5 text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/services/digital-solutions" className="hover:text-primary transition-colors">Digital Solutions</a></li>
              <li><a href="/services/ai-automation" className="hover:text-primary transition-colors">AI and Automation</a></li>
              <li><a href="/services/cloud-solutions" className="hover:text-primary transition-colors">Cloud Solutions</a></li>
              <li><a href="/services/cybersecurity" className="hover:text-primary transition-colors">Cybersecurity</a></li>
              <li><a href="/services/technology-consulting" className="hover:text-primary transition-colors">Technology Consulting</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-semibold mb-5 text-sm">Connect</h4>
            <div className="flex gap-3 mb-7">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <span className="text-muted-foreground/30">|</span>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2026 Nexio Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
