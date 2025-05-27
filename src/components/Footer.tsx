
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-verde mb-4">Verde Ancestral</h3>
          <div className="w-16 h-1 bg-verde-gradient mx-auto rounded mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contato</h4>
            <p className="text-gray-300 mb-2">contato@verdeancestral.org</p>
            <p className="text-gray-300">Atendimento humanizado</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Transparência</h4>
            <p className="text-gray-300 mb-2">Laudos CIATox - Unicamp</p>
            <p className="text-gray-300">Certificação científica</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Redes Sociais</h4>
            <p className="text-gray-300 mb-2">@verdeancestral</p>
            <p className="text-gray-300">Acompanhe nossa jornada</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            Verde Ancestral – Associação sem fins lucrativos registrada.
          </p>
          <p className="text-gray-500 text-sm">
            Atuando com base legal, respeito à ciência e fé nas raízes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
