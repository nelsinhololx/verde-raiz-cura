
import { Check, Users, BookOpen, Heart } from "lucide-react";

const MissionSection = () => {
  const missions = [
    {
      icon: Heart,
      title: "Sem fins lucrativos",
      description: "Voltada à saúde e ao bem-estar coletivo."
    },
    {
      icon: BookOpen,
      title: "Pesquisa e instrução",
      description: "Apoiamos estudos e orientação segura sobre o uso medicinal da cannabis."
    },
    {
      icon: Users,
      title: "Rede médica parceira",
      description: "Médicos prescritores com experiência e responsabilidade."
    },
    {
      icon: Check,
      title: "Qualidade testada",
      description: "Óleos medicinais analisados rigorosamente pela CIATox – Unicamp."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossa Missão
          </h2>
          <div className="w-24 h-1 bg-verde-gradient mx-auto rounded mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprometidos com a excelência, transparência e cuidado humanizado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => {
            const IconComponent = mission.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-verde-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  {mission.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {mission.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
