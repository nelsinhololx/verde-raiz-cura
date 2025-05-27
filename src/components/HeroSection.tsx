
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-green-700/60 z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Verde Ancestral
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-8 rounded"></div>
          <h2 className="text-2xl md:text-4xl text-green-100 font-light mb-8">
            A Cura que Vem da Raiz
          </h2>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg md:text-xl text-green-50 mb-12 max-w-4xl mx-auto leading-relaxed">
            Desde os quintais do Espírito Santo e do Piauí até os laboratórios certificados de hoje – 
            honramos a sabedoria dos nossos ancestrais com ciência e compaixão.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#historia">
              <Button 
                size="lg" 
                className="bg-white text-green-800 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Conheça Nossa História
              </Button>
            </Link>
            <Link to="/associados">
              <Button 
                size="lg" 
                className="bg-white text-green-800 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Seja Associado
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
