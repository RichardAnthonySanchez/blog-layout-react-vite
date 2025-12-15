import { Wheat } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-primary py-4 px-6">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wheat className="h-5 w-5 text-secondary" />
          <span className="font-display text-lg font-semibold tracking-wide text-primary-foreground">
            GOLDCOAST SHROOMS
          </span>
          <Wheat className="h-5 w-5 text-secondary" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium">
            Home
          </Link>
          <Link to="/articles" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium">
            Articles
          </Link>
          <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium">
            Topics
          </a>
          <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium">
            About
          </Link>
        </div>
        <button className="px-5 py-2 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-accent transition-colors">
          Subscribe
        </button>
      </nav>
    </header>
  );
};

export default Header;
