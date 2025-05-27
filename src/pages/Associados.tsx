import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Heart, Users, CheckCircle, User, Mail, Lock, Phone, MapPin, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Associados = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showMembership, setShowMembership] = useState(false);

  const benefits = [
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

  const planos = [
    {
      titulo: "Plano Mensal",
      descricao: "Flexibilidade para começar sua jornada",
      beneficios: [
        "Flexibilidade de pagamento mensal",
        "Acesso a todos os benefícios de associados",
        "Sem compromisso de longo prazo",
        "Fortalecimento da causa da Verde Ancestral"
      ]
    },
    {
      titulo: "Plano Anual",
      descricao: "Maior economia e compromisso",
      beneficios: [
        "Economize 1 parcela no ano",
        "Tratamento garantido por 1 ano",
        "Maior compromisso com a causa",
        "Fortalecimento da APEPI"
      ]
    }
  ];

  if (showMembership) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <Header />
        
        <main className="pt-20">
          {/* Header com botão voltar */}
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <Button 
                variant="outline" 
                onClick={() => setShowMembership(false)}
                className="mb-4"
              >
                ← Voltar ao Login
              </Button>
              <h1 className="text-4xl font-bold text-green-800 text-center mb-4">
                Seja um Associado
              </h1>
              <p className="text-xl text-gray-600 text-center">
                Escolha o plano que melhor se adapta às suas necessidades
              </p>
            </div>
          </section>

          {/* Planos de Associação */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8">
                {planos.map((plano, index) => (
                  <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    index === 1 ? 'ring-2 ring-verde scale-105' : ''
                  }`}>
                    {index === 1 && (
                      <div className="absolute top-0 left-0 right-0 bg-verde text-white text-center py-2 text-sm font-semibold">
                        MAIS ECONÔMICO
                      </div>
                    )}
                    <CardHeader className={`text-center ${index === 1 ? 'pt-12' : 'pt-6'}`}>
                      <CardTitle className="text-2xl text-gray-800">
                        {plano.titulo}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-lg">
                        {plano.descricao}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-4 mb-8">
                        {plano.beneficios.map((beneficio, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-verde mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full ${
                          index === 1 
                            ? 'bg-verde hover:bg-verde/90' 
                            : 'bg-gray-700 hover:bg-gray-800'
                        }`}
                      >
                        Escolher {plano.titulo}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">
                  * Todos os planos incluem acesso aos óleos certificados e acompanhamento médico.
                </p>
                <p className="text-sm text-gray-500">
                  Entre em contato para mais informações sobre condições especiais e descontos.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  {isLogin ? 'Área do Associado' : 'Faça Parte da'}
                  <span className="text-verde block">Verde Ancestral</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {isLogin 
                    ? 'Acesse sua conta para gerenciar seu tratamento e acompanhar seu progresso.'
                    : 'Junte-se à maior rede de apoio à cannabis medicinal do Brasil. Acesso legal, seguro e com total suporte científico e médico.'
                  }
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

                {!isLogin && (
                  <Button 
                    onClick={() => setShowMembership(true)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full"
                  >
                    Seja um Associado
                  </Button>
                )}
              </div>

              {/* Right side - Login/Registration Form */}
              <Card className="shadow-xl">
                <CardHeader className="bg-verde text-white rounded-t-lg">
                  <CardTitle className="text-2xl text-center">
                    {isLogin ? 'Login do Associado' : 'Cadastro de Associado'}
                  </CardTitle>
                  <CardDescription className="text-green-100 text-center">
                    {isLogin ? 'Acesse sua conta' : 'Preencha seus dados para começar'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    {isLogin ? (
                      // Login Form
                      <>
                        <div>
                          <Label htmlFor="email" className="flex items-center">
                            <Mail className="w-4 h-4 mr-2" />
                            E-mail
                          </Label>
                          <Input id="email" type="email" placeholder="seu@email.com" />
                        </div>
                        
                        <div>
                          <Label htmlFor="password" className="flex items-center">
                            <Lock className="w-4 h-4 mr-2" />
                            Senha
                          </Label>
                          <Input id="password" type="password" placeholder="••••••••" />
                        </div>
                        
                        <Button className="w-full bg-verde hover:bg-verde/90 py-3 text-lg">
                          Entrar
                        </Button>
                        
                        <div className="text-center">
                          <a href="#" className="text-verde text-sm hover:underline">
                            Esqueci minha senha
                          </a>
                        </div>
                      </>
                    ) : (
                      // Registration Form
                      <>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="nome" className="flex items-center">
                              <User className="w-4 h-4 mr-2" />
                              Nome Completo
                            </Label>
                            <Input id="nome" placeholder="Seu nome completo" />
                          </div>
                          <div>
                            <Label htmlFor="cpf">CPF</Label>
                            <Input id="cpf" placeholder="000.000.000-00" />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="email" className="flex items-center">
                            <Mail className="w-4 h-4 mr-2" />
                            E-mail
                          </Label>
                          <Input id="email" type="email" placeholder="seu@email.com" />
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="telefone" className="flex items-center">
                              <Phone className="w-4 h-4 mr-2" />
                              Telefone
                            </Label>
                            <Input id="telefone" placeholder="(11) 99999-9999" />
                          </div>
                          <div>
                            <Label htmlFor="nascimento" className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              Data de Nascimento
                            </Label>
                            <Input id="nascimento" type="date" />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="cep" className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            CEP
                          </Label>
                          <Input id="cep" placeholder="00000-000" />
                        </div>
                        
                        <div>
                          <Label htmlFor="condicao">Condição Médica (opcional)</Label>
                          <Input id="condicao" placeholder="Descreva brevemente sua condição" />
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="password" className="flex items-center">
                              <Lock className="w-4 h-4 mr-2" />
                              Senha
                            </Label>
                            <Input id="password" type="password" placeholder="••••••••" />
                          </div>
                          <div>
                            <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                            <Input id="confirmPassword" type="password" placeholder="••••••••" />
                          </div>
                        </div>
                        
                        <Button className="w-full bg-verde hover:bg-verde/90 py-3 text-lg">
                          Criar Conta
                        </Button>
                      </>
                    )}
                    
                    <div className="text-center pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        {isLogin ? 'Ainda não é associado?' : 'Já possui uma conta?'}
                      </p>
                      <Button 
                        type="button"
                        variant="link" 
                        className="text-verde hover:text-verde/80"
                        onClick={() => setIsLogin(!isLogin)}
                      >
                        {isLogin ? 'Cadastre-se aqui' : 'Faça login aqui'}
                      </Button>
                    </div>
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

            <div className="grid md:grid-cols-3 gap-8">
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
      </main>

      <Footer />
    </div>
  );
};

export default Associados;
