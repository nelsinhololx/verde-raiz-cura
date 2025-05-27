
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, FileText, Heart, Users, Award, CheckCircle, Stethoscope, Book, Brain, Zap } from "lucide-react";

const Beneficios = () => {
  const beneficiosAssociados = [
    {
      icon: Shield,
      title: "Suporte jurídico e orientação",
      description: "Para uso medicinal legal com total segurança e tranquilidade"
    },
    {
      icon: FileText,
      title: "Óleos full spectrum",
      description: "Com procedência certificada e laudo técnico completo da CIATox"
    },
    {
      icon: Heart,
      title: "Acompanhamento médico",
      description: "Humanizado com profissionais especializados em cannabis medicinal"
    },
    {
      icon: Users,
      title: "Encontros educativos",
      description: "Espaço seguro de escuta, acolhimento e troca de experiências"
    }
  ];

  const beneficiosOleos = [
    {
      icon: Award,
      title: "Certificação CIATox - Unicamp",
      description: "Análises laboratoriais rigorosas garantem pureza e potência"
    },
    {
      icon: CheckCircle,
      title: "Full Spectrum",
      description: "Preserva todos os canabinoides naturais para máxima eficácia"
    },
    {
      icon: Stethoscope,
      title: "Prescrição Médica",
      description: "Dosagem personalizada conforme orientação médica especializada"
    },
    {
      icon: Book,
      title: "Rastreabilidade Total",
      description: "Histórico completo desde o cultivo até o produto final"
    }
  ];

  const condicoesNeurologicas = [
    "Epilepsia refratária (ex: Síndrome de Dravet, Lennox-Gastaut)",
    "Transtorno do espectro autista (TEA) – melhora na comunicação, sono e redução de agressividade",
    "Transtorno de Déficit de Atenção e Hiperatividade (TDAH)",
    "Ansiedade generalizada, pânico e fobia social",
    "Transtorno do estresse pós-traumático (TEPT)",
    "Depressão leve a moderada",
    "Insônia crônica ou relacionada à dor/ansiedade",
    "Doença de Alzheimer – efeitos neuroprotetores",
    "Doença de Parkinson – controle de tremores e rigidez",
    "Esclerose Múltipla – melhora da espasticidade"
  ];

  const condicoesDorInflamacao = [
    "Dores crônicas e neuropáticas (ex: fibromialgia, neuralgia do trigêmeo)",
    "Artrite e artrose – ação anti-inflamatória",
    "Dor oncológica – especialmente em cuidados paliativos",
    "Enxaqueca crônica",
    "Endometriose e cólicas intensas"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Benefícios Exclusivos
            </h1>
            <div className="w-24 h-1 bg-verde-gradient mx-auto rounded mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Uma rede completa de apoio para sua jornada de cura e bem-estar
            </p>
          </div>
        </section>

        {/* Benefícios aos Associados */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Benefícios aos Associados
              </h2>
              <p className="text-xl text-gray-600">
                Tudo que você precisa para um tratamento seguro e eficaz
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {beneficiosAssociados.map((beneficio, index) => {
                const IconComponent = beneficio.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-verde-gradient rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">
                        {beneficio.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {beneficio.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefícios dos Óleos */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-green-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Qualidade dos Nossos Óleos
              </h2>
              <p className="text-xl text-gray-600">
                Produtos certificados com os mais altos padrões de qualidade
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {beneficiosOleos.map((beneficio, index) => {
                const IconComponent = beneficio.icon;
                return (
                  <div 
                    key={index}
                    className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-14 h-14 bg-verde-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-green-800 mb-2">
                      {beneficio.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {beneficio.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Condições Tratadas */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Condições Tratadas
              </h2>
              <p className="text-xl text-gray-600">
                Principais condições que podem se beneficiar do tratamento com cannabis medicinal
              </p>
            </div>

            {/* Condições Neurológicas */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  🧠 Neurológicas e Neuropsiquiátricas
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {condicoesNeurologicas.map((condicao, index) => (
                  <div 
                    key={index}
                    className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium">{condicao}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Condições de Dor e Inflamação */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  🩺 Dor e Inflamação
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {condicoesDorInflamacao.map((condicao, index) => (
                  <div 
                    key={index}
                    className="flex items-start p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200"
                  >
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium">{condicao}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 italic">
                * Esta lista não é exaustiva. Consulte nossos médicos para avaliação do seu caso específico.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-100 to-amber-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Pronto para Começar sua Jornada?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Junte-se a milhares de pessoas que já encontraram alívio e qualidade de vida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/associados" className="bg-verde text-white px-8 py-3 rounded-full font-semibold hover:bg-verde/90 transition-colors">
                Tornar-se Associado
              </a>
              <a href="tel:+5511999999999" className="bg-white text-verde border-2 border-verde px-8 py-3 rounded-full font-semibold hover:bg-verde hover:text-white transition-colors">
                Falar com Especialista
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Beneficios;
