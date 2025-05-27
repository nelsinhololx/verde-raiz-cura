
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

  const mensalidades = [
    {
      categoria: "Estudante",
      valor: "R$ 50,00",
      descricao: "Para estudantes com comprovação de matrícula",
      beneficios: ["Acesso aos óleos", "Consulta médica mensal", "Grupo de apoio"]
    },
    {
      categoria: "Associado Regular",
      valor: "R$ 100,00",
      descricao: "Mensalidade padrão para associados",
      beneficios: ["Todos os benefícios", "Acompanhamento personalizado", "Suporte jurídico"]
    },
    {
      categoria: "Associado Contribuinte",
      valor: "R$ 200,00",
      descricao: "Para quem deseja contribuir mais com a causa",
      beneficios: ["Benefícios premium", "Consultas ilimitadas", "Acesso VIP a eventos"]
    },
    {
      categoria: "Associado Benfeitor",
      valor: "R$ 500,00",
      descricao: "Apoio máximo à associação e suas atividades",
      beneficios: ["Todos os benefícios", "Mentoria exclusiva", "Participação em pesquisas"]
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
              <h1 className="text-4xl font-bold text-green-800 text-center">
                Escolha seu Plano de Associação
              </h1>
            </div>
          </section>

          {/* Planos de Mensalidade */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mensalidades.map((mensalidade, index) => (
                  <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    index === 1 ? 'ring-2 ring-verde scale-105' : ''
                  }`}>
                    {index === 1 && (
                      <div className="absolute top-0 left-0 right-0 bg-verde text-white text-center py-2 text-sm font-semibold">
                        MAIS POPULAR
                      </div>
                    )}
                    <CardHeader className={`text-center ${index === 1 ? 'pt-12' : 'pt-6'}`}>
                      <CardTitle className="text-xl text-gray-800">
                        {mensalidade.categoria}
                      </CardTitle>
                      <div className="text-3xl font-bold text-verde">
                        {mensalidade.valor}
                      </div>
                      <CardDescription className="text-gray-600">
                        {mensalidade.descricao}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-3 mb-6">
                        {mensalidade.beneficios.map((beneficio, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-verde mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{beneficio}</span>
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
                        Escolher Plano
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">
                  * Valores mensais. Estudantes devem apresentar comprovação de matrícula.
                </p>
                <p className="text-sm text-gray-500">
                  Todas as mensalidades incluem acesso aos óleos certificados e acompanhamento médico básico.
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
                    Ver Planos de Associação
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
