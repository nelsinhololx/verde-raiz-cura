
const HistorySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Raízes que Nutrem o Futuro
          </h2>
          <div className="w-24 h-1 bg-verde-gradient mx-auto rounded mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* História do avô de Fabiane */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
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

        <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <blockquote className="text-xl md:text-2xl text-gray-800 italic leading-relaxed">
            "Antes que houvesse bula, havia mãos. Antes da ciência, a sabedoria popular guiava a cura 
            com respeito e fé na natureza. A Verde Ancestral nasce dessa herança – a da planta verde 
            e sagrada, e da cura sem fronteiras."
          </blockquote>
          <div className="mt-6">
            <div className="w-16 h-1 bg-verde-gradient mx-auto rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
