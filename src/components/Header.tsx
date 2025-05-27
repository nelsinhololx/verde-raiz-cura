
import { Button } from "@/components/ui/button";
import { User, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-verde">Verde Ancestral</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#historia" className="text-gray-700 hover:text-verde transition-colors">
              Nossa História
            </a>
            <a href="#missao" className="text-gray-700 hover:text-verde transition-colors">
              Missão
            </a>
            <a href="#beneficios" className="text-gray-700 hover:text-verde transition-colors">
              Benefícios
            </a>
            <a href="/associados" className="text-gray-700 hover:text-verde transition-colors">
              Área do Associado
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="text-verde border-verde hover:bg-verde hover:text-white">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-verde hover:bg-verde/90">
              Seja Associado
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <a href="#historia" className="text-gray-700 hover:text-verde transition-colors">
                Nossa História
              </a>
              <a href="#missao" className="text-gray-700 hover:text-verde transition-colors">
                Missão
              </a>
              <a href="#beneficios" className="text-gray-700 hover:text-verde transition-colors">
                Benefícios
              </a>
              <a href="/associados" className="text-gray-700 hover:text-verde transition-colors">
                Área do Associado
              </a>
              <div className="flex flex-col space-y-2 pt-3 border-t border-gray-200">
                <Button variant="outline" size="sm" className="text-verde border-verde">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button size="sm" className="bg-verde hover:bg-verde/90">
                  Seja Associado
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
