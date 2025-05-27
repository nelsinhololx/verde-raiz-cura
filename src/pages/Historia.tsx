
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Heart, Users } from "lucide-react";

const Historia = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Raízes que Nutrem o Futuro
            </h1>
            <div className="w-24 h-1 bg-verde-gradient mx-auto rounded mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Uma jornada que une tradição ancestral e ciência moderna
            </p>
          </div>
        </section>

        {/* História das Famílias */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* História do avô de Fabiane */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-verde-gradient rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">ES</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800">Espírito Santo</h3>
                    <p className="text-green-600">Década de 1950</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O avô de Fabiane, no interior do Espírito Santo, fazia garrafadas com flores de cannabis, 
                  ajudando vizinhos com dores crônicas, insônia e males da alma.
                </p>
                <div className="border-l-4 border-green-500 pl-4 italic text-green-700">
                  "Cada gota preparada com fé e conhecimento passado de geração em geração."
                </div>
              </div>

              {/* História da avó de Nelson */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-terra-gradient rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">PI</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-800">Piauí</h3>
                    <p className="text-amber-600">Tradição Ancestral</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A avó de Nelson, no interior do Piauí, preparava tinturas com raízes e ervas sagradas, 
                  incluindo a cannabis, usada com fé e sabedoria em benzimentos e cuidados populares.
                </p>
                <div className="border-l-4 border-amber-500 pl-4 italic text-amber-700">
                  "A natureza como farmácia divina, onde cada planta tem seu propósito sagrado."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Jornada */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-amber-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nossa Jornada
              </h2>
              <p className="text-xl text-gray-600">
                Do quintal à ciência: uma evolução natural
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-verde-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  Tradição Ancestral
                </h3>
                <p className="text-gray-700">
                  Conhecimento passado de geração em geração pelos nossos antepassados
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-verde-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  Ciência Moderna
                </h3>
                <p className="text-gray-700">
                  Análises rigorosas pela CIATox - Unicamp garantem qualidade e segurança
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-verde-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  Comunidade Acolhedora
                </h3>
                <p className="text-gray-700">
                  Uma rede de apoio que une tradição familiar e cuidado profissional
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Citação Final */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <blockquote className="text-xl md:text-2xl text-gray-800 italic leading-relaxed mb-6">
              "Antes que houvesse bula, havia mãos. Antes da ciência, a sabedoria popular guiava a cura 
              com respeito e fé na natureza. A Verde Ancestral nasce dessa herança – a da planta verde 
              e sagrada, e da cura sem fronteiras."
            </blockquote>
            <div className="w-16 h-1 bg-verde-gradient mx-auto rounded"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Historia;
