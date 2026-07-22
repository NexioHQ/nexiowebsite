import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-card border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Col 1 */}
          <div className="space-y-6">
            <span className="text-2xl font-bold text-primary tracking-tight">Nexio</span>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Transforming Businesses Through Technology. We build scalable, secure, and intelligent digital solutions.
            </p>
            <div className="space-y-2 text-sm text-foreground font-medium">
              <p>hello@nexio.biz</p>
              <p>www.nexio.biz</p>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#industries" className="hover:text-primary transition-colors">Industries</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Digital Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI & Automation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Technology Consulting</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-semibold mb-6">Connect</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">Privacy Policy</a>
              <span>&middot;</span>
              <a href="#" className="hover:text-foreground">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 Nexio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
