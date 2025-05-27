
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Users, BookOpen, Heart, Shield, Award } from "lucide-react";

const Missao = () => {
  const missoes = [
    {
      icon: Heart,
      title: "Sem fins lucrativos",
      description: "Voltada à saúde e ao bem-estar coletivo, priorizando sempre o cuidado humanizado."
    },
    {
      icon: BookOpen,
      title: "Pesquisa e instrução",
      description: "Apoiamos estudos científicos e orientação segura sobre o uso medicinal da cannabis."
    },
    {
      icon: Users,
      title: "Rede médica parceira",
      description: "Médicos prescritores com experiência e responsabilidade no tratamento com cannabis."
    },
    {
      icon: Check,
      title: "Qualidade testada",
      description: "Óleos medicinais analisados rigorosamente pela CIATox – Unicamp."
    }
  ];

  const valores = [
    {
      icon: Shield,
      title: "Transparência Total",
      description: "Todos os nossos processos são abertos e verificáveis pelos associados."
    },
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Cada pessoa é única e merece atenção personalizada em sua jornada de cura."
    },
    {
      icon: Award,
      title: "Excelência Científica",
      description: "Compromisso com os mais altos padrões de qualidade e segurança."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Nossa Missão
            </h1>
            <div className="w-24 h-1 bg-verde-gradient mx-auto rounded mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Comprometidos com a excelência, transparência e cuidado humanizado
            </p>
          </div>
        </section>

        {/* Missões Principais */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nossos Pilares
              </h2>
              <p className="text-xl text-gray-600">
                Os fundamentos que guiam nosso trabalho
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {missoes.map((missao, index) => {
                const IconComponent = missao.icon;
                return (
                  <div 
                    key={index}
                    className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-verde-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-3">
                      {missao.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {missao.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-amber-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nossos Valores
              </h2>
              <p className="text-xl text-gray-600">
                O que nos move e nos define como organização
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {valores.map((valor, index) => {
                const IconComponent = valor.icon;
                return (
                  <div 
                    key={index}
                    className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-verde-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-3">
                      {valor.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {valor.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Visão de Futuro */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Nossa Visão
            </h2>
            <div className="w-24 h-1 bg-verde-gradient mx-auto rounded mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Ser reconhecida como a principal referência em cannabis medicinal no Brasil, 
              promovendo acesso legal, seguro e humanizado para todos que necessitam, 
              sempre respeitando a sabedoria ancestral e aplicando os mais altos padrões científicos.
            </p>
            <div className="bg-gradient-to-r from-green-100 to-amber-100 rounded-2xl p-8">
              <blockquote className="text-lg italic text-green-800">
                "Acreditamos que a cura é um direito de todos, e que a união entre tradição e ciência 
                pode transformar vidas e construir um futuro mais saudável para nossa sociedade."
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Missao;
