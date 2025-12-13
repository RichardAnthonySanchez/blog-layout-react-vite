import { Wheat, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 px-6 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <Wheat className="h-6 w-6 text-secondary" />
            <span className="font-display text-xl font-semibold text-primary-foreground">
              HARVEST & SCROLL
            </span>
            <Wheat className="h-6 w-6 text-secondary" />
          </div>
          
          <p className="text-primary-foreground/70 max-w-md mb-8">
            Stories of earth, growth, and mindful living. Join our community of curious souls.
          </p>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center bg-primary-foreground/10 rounded-full overflow-hidden">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="bg-transparent px-5 py-3 text-primary-foreground placeholder:text-primary-foreground/50 outline-none w-64"
              />
              <button className="bg-secondary text-secondary-foreground px-5 py-3 font-semibold hover:bg-accent transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-primary-foreground/60 text-sm">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Contact</a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary-foreground/10 w-full flex items-center justify-center gap-1 text-primary-foreground/50 text-sm">
            Made with <Heart className="h-4 w-4 text-secondary fill-secondary" /> for nature lovers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
