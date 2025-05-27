
import { Shield, FileText, Heart, Users } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Suporte jurídico e orientação",
      description: "Para uso medicinal legal com total segurança"
    },
    {
      icon: FileText,
      title: "Óleos full spectrum",
      description: "Com procedência certificada e laudo técnico completo"
    },
    {
      icon: Heart,
      title: "Acompanhamento médico",
      description: "Humanizado com profissionais especializados"
    },
    {
      icon: Users,
      title: "Encontros educativos",
      description: "Espaço seguro de escuta e acolhimento"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Benefícios aos Associados
          </h2>
          <div className="w-24 h-1 bg-verde-gradient mx-auto rounded mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma rede completa de apoio para sua jornada de cura e bem-estar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-verde-gradient rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
