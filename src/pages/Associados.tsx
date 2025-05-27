
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Heart, Users, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Associados = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Suporte Jurídico Completo",
      description: "Orientação legal especializada para uso medicinal da cannabis"
    },
    {
      icon: FileText,
      title: "Óleos Certificados",
      description: "Acesso a produtos com laudos técnicos da CIATox - Unicamp"
    },
    {
      icon: Heart,
      title: "Acompanhamento Médico",
      description: "Rede de médicos especializados em cannabis medicinal"
    },
    {
      icon: Users,
      title: "Comunidade Acolhedora",
      description: "Grupos de apoio e encontros educativos regulares"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Faça Parte da
                  <span className="text-verde block">Verde Ancestral</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Junte-se à maior rede de apoio à cannabis medicinal do Brasil. 
                  Acesso legal, seguro e com total suporte científico e jurídico.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-verde" />
                    <span className="text-gray-700">100% Legal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-verde" />
                    <span className="text-gray-700">Certificado Científico</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-verde" />
                    <span className="text-gray-700">Suporte Médico</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-verde" />
                    <span className="text-gray-700">Sem Fins Lucrativos</span>
                  </div>
                </div>
              </div>

              {/* Right side - Registration Form */}
              <Card className="shadow-xl">
                <CardHeader className="bg-verde text-white rounded-t-lg">
                  <CardTitle className="text-2xl text-center">Cadastro de Associado</CardTitle>
                  <CardDescription className="text-green-100 text-center">
                    Preencha seus dados para começar
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input id="nome" placeholder="Seu nome completo" />
                      </div>
                      <div>
                        <Label htmlFor="cpf">CPF</Label>
                        <Input id="cpf" placeholder="000.000.000-00" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input id="telefone" placeholder="(11) 99999-9999" />
                      </div>
                      <div>
                        <Label htmlFor="cep">CEP</Label>
                        <Input id="cep" placeholder="00000-000" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="condicao">Condição Médica (opcional)</Label>
                      <Input id="condicao" placeholder="Descreva brevemente sua condição" />
                    </div>
                    
                    <Button className="w-full bg-verde hover:bg-verde/90 py-3 text-lg">
                      Enviar Solicitação
                    </Button>
                    
                    <p className="text-sm text-gray-600 text-center">
                      Após o envio, nossa equipe entrará em contato em até 24h
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Benefícios Exclusivos
              </h2>
              <p className="text-xl text-gray-600">
                O que você recebe ao se tornar nosso associado
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center p-6">
                    <div className="w-16 h-16 bg-verde/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-verde" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-amber-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Como Funciona
              </h2>
              <p className="text-xl text-gray-600">
                Processo simples e transparente
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-verde text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Cadastro
                </h3>
                <p className="text-gray-600">
                  Preencha o formulário com seus dados pessoais e informações médicas
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-verde text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Avaliação
                </h3>
                <p className="text-gray-600">
                  Nossa equipe médica avalia seu caso e define o melhor tratamento
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-verde text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Acompanhamento
                </h3>
                <p className="text-gray-600">
                  Receba suporte contínuo e acesso aos nossos produtos certificados
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Associados;
