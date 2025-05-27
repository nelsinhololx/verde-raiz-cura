
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-800 to-green-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <ArrowDown className="w-12 h-12 text-green-300 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Junte-se à Verde Ancestral
          </h2>
          <div className="w-24 h-1 bg-green-300 mx-auto rounded mb-8"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-green-100 mb-10 leading-relaxed">
          Faça parte de uma rede que honra o passado, cura o presente e planta o futuro.
        </p>

        <Button 
          size="lg" 
          className="bg-white text-green-800 hover:bg-green-50 px-10 py-4 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          Quero Ser Associado
        </Button>

        <p className="text-green-200 mt-6 text-sm">
          Cadastro gratuito • Processo 100% legal • Suporte completo
        </p>
      </div>
    </section>
  );
};

export default CTASection;
