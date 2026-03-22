import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star, Users, Zap, MapPin, Phone, Mail, Sparkles, MessageCircle, Clock } from "lucide-react";
import { useRef } from "react";

const WHATSAPP_LINK = "https://wa.me/5511939424322";

export default function Home() {
  const contactFormRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-white">
      {/* Navigation */}
      <nav ref={navRef} className="sticky top-0 z-50 border-b border-yellow-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={scrollToTop} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/assets/logo.jpg" alt="Dra. Graziela Prin Logo" className="h-12 w-auto rounded-full shadow-md" />
            <div>
              <div className="text-sm text-yellow-600 font-semibold tracking-wide">CLÍNICA ODONTOLÓGICA</div>
              <div className="text-xl font-light text-slate-900">Dra. Graziela Prin</div>
            </div>
          </button>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-slate-600 hover:text-yellow-600 transition font-light">
              Serviços
            </a>
            <a href="#about" className="text-slate-600 hover:text-yellow-600 transition font-light">
              Sobre
            </a>
            <a href="#testimonials" className="text-slate-600 hover:text-yellow-600 transition font-light">
              Depoimentos
            </a>
            <Button onClick={openWhatsApp} className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 rounded-full px-6 flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              <span className="text-yellow-600 font-light tracking-widest text-sm">TRANSFORME SEU SORRISO</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 leading-tight">
              Sorriso Saudável e Autoestima Renovada
            </h1>
            <p className="text-lg text-slate-600 mb-8 font-light leading-relaxed">
              Cuidado odontológico humanizado e especializado com a Dra. Graziela Prin. Transformando vidas através do sorriso com elegância e delicadeza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={openWhatsApp} className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 rounded-full px-8 py-6 text-lg flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Agendar no WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="border-2 border-yellow-300 text-yellow-700 hover:bg-yellow-50 rounded-full px-8 py-6 text-lg bg-transparent">
                Nossos Serviços
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-pink-100 rounded-3xl blur-2xl opacity-40"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-yellow-200">
              <img 
                src="/assets/dentista.png" 
                alt="Dra. Graziela Prin" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-yellow-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-3 rounded-full">
                  <Sparkles className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="font-light text-slate-900 text-sm">Referência em</p>
                  <p className="text-yellow-600 font-semibold">Odontologia Estética</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 via-pink-50 to-yellow-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-yellow-400"></div>
              <span className="text-yellow-600 font-light tracking-widest text-sm">ESPECIALIDADES</span>
              <div className="h-px w-8 bg-yellow-400"></div>
            </div>
            <h2 className="text-4xl font-light text-slate-900 mb-4">Nossos Serviços</h2>
            <p className="text-lg text-slate-600 font-light">
              Tratamentos completos para a sua saúde bucal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Clínica Geral",
                description: "Prevenção, limpeza e tratamentos essenciais para manter seu sorriso sempre saudável.",
              },
              {
                icon: Users,
                title: "Ortodontia",
                description: "Aparelhos modernos para alinhar seu sorriso com conforto e eficiência.",
              },
              {
                icon: CheckCircle,
                title: "Estética Dental",
                description: "Lentes de contato, clareamento e restaurações para o sorriso dos seus sonhos.",
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="group">
                  <Card className="bg-white border border-yellow-100 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardHeader>
                      <div className="bg-gradient-to-br from-yellow-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-all">
                        <Icon className="h-8 w-8 text-yellow-600" />
                      </div>
                      <CardTitle className="text-slate-900 font-light text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 font-light leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-yellow-400"></div>
                <span className="text-yellow-600 font-light tracking-widest text-sm">CONHECER</span>
              </div>
              <h2 className="text-4xl font-light text-slate-900 mb-8">Sobre a Dra. Graziela Prin</h2>
              <p className="text-lg text-slate-600 mb-6 font-light leading-relaxed">
                Com anos de experiência e dedicação à odontologia, a Dra. Graziela Prin combina técnica avançada com um atendimento acolhedor e humanizado.
              </p>
              <p className="text-lg text-slate-600 mb-10 font-light leading-relaxed">
                Nossa missão é proporcionar não apenas tratamentos, mas uma experiência positiva que devolva a confiança e o bem-estar de cada paciente.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-2 rounded-full">
                    <CheckCircle className="text-yellow-600 h-5 w-5" />
                  </div>
                  <span className="text-slate-700 font-light">Especialista em Ortodontia</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-2 rounded-full">
                    <CheckCircle className="text-yellow-600 h-5 w-5" />
                  </div>
                  <span className="text-slate-700 font-light">Referência em Estética</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-2 rounded-full">
                    <CheckCircle className="text-yellow-600 h-5 w-5" />
                  </div>
                  <span className="text-slate-700 font-light">Atendimento Humanizado</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-pink-100 rounded-3xl blur-xl opacity-50"></div>
                <img 
                  src="/assets/logo.jpg" 
                  alt="Logo Clínica" 
                  className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl border-2 border-yellow-200 relative"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 via-pink-50 to-yellow-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-yellow-400"></div>
              <span className="text-yellow-600 font-light tracking-widest text-sm">DEPOIMENTOS</span>
              <div className="h-px w-8 bg-yellow-400"></div>
            </div>
            <h2 className="text-4xl font-light text-slate-900 mb-4">O que nossos pacientes dizem</h2>
            <p className="text-lg text-slate-600 font-light">
              Histórias reais de sorrisos transformados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mariana Silva",
                role: "Paciente de Ortodontia",
                content:
                  "O atendimento da Dra. Graziela é impecável. Meu tratamento ortodôntico foi super tranquilo e o resultado ficou incrível!",
                rating: 5,
              },
              {
                name: "Ricardo Santos",
                role: "Paciente de Estética",
                content:
                  "Fiz clareamento e algumas restaurações estéticas. A atenção aos detalhes e o cuidado da Dra. fazem toda a diferença.",
                rating: 5,
              },
              {
                name: "Ana Oliveira",
                role: "Paciente de Clínica Geral",
                content:
                  "Melhor dentista que já fui. Super atenciosa, explica tudo com calma e o consultório é muito acolhedor.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="bg-white border border-yellow-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300 rounded-2xl">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.rating)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                  </div>
                  <CardTitle className="text-slate-900 font-light text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="text-yellow-600 font-light">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 italic font-light leading-relaxed">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactFormRef} className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-yellow-400"></div>
              <span className="text-yellow-600 font-light tracking-widest text-sm">CONTATO</span>
              <div className="h-px w-8 bg-yellow-400"></div>
            </div>
            <h2 className="text-4xl font-light text-slate-900 mb-6">Agende sua Avaliação</h2>
            <p className="text-lg text-slate-600 mb-10 font-light leading-relaxed">
              Estamos prontos para cuidar do seu sorriso. Entre em contato pelo WhatsApp e agende sua consulta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-6 rounded-2xl bg-white/50 border border-yellow-100/50 hover:border-yellow-200 transition-all">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-full shrink-0">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-light text-slate-900 text-lg mb-1">WhatsApp</h3>
                <p className="text-slate-600 font-light mb-4">Envie sua mensagem e agende sua consulta</p>
                <Button onClick={openWhatsApp} className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 rounded-full px-8 py-2">
                  Abrir WhatsApp
                </Button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-6 rounded-2xl bg-white/50 border border-yellow-100/50 hover:border-yellow-200 transition-all">
              <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-4 rounded-full shrink-0">
                <Phone className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-light text-slate-900 text-lg mb-1">Telefone</h3>
                <p className="text-slate-600 font-light mb-4">(11) 93942-4322</p>
                <Button variant="outline" className="border-2 border-yellow-300 text-yellow-700 hover:bg-yellow-50 rounded-full px-8 py-2">
                  Ligar Agora
                </Button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-6 rounded-2xl bg-white/50 border border-yellow-100/50 hover:border-yellow-200 transition-all">
              <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-4 rounded-full shrink-0">
                <MapPin className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-light text-slate-900 text-lg mb-1">Localização</h3>
                <p className="text-slate-600 font-light mb-4">Av. Nordestina, 1166 São Miguel Paulista</p>
                <Button variant="outline" className="border-2 border-yellow-300 text-yellow-700 hover:bg-yellow-50 rounded-full px-8 py-2">
                  Ver no Mapa
                </Button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-6 rounded-2xl bg-white/50 border border-yellow-100/50 hover:border-yellow-200 transition-all">
              <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-4 rounded-full shrink-0">
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-light text-slate-900 text-lg mb-2">Horário de Atendimento</h3>
                <div className="flex flex-col gap-1">
                  <p className="text-slate-600 font-light">Segunda a Sexta: <span className="font-normal text-slate-900">9h às 18h</span></p>
                  <p className="text-slate-600 font-light">Sábado: <span className="font-normal text-slate-900">9h às 16h</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-4">
            <button onClick={scrollToTop} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/assets/logo.jpg" alt="Logo" className="h-10 w-auto rounded-full shadow-lg" />
              <div>
                <div className="text-xs text-yellow-400 font-light tracking-wide">CLÍNICA ODONTOLÓGICA</div>
                <span className="text-lg font-light">Dra. Graziela Prin</span>
              </div>
            </button>
            <div className="flex gap-6 text-sm">
              <a href="#services" className="text-slate-300 hover:text-yellow-400 transition font-light">Serviços</a>
              <a href="#about" className="text-slate-300 hover:text-yellow-400 transition font-light">Sobre</a>
              <a href="#testimonials" className="text-slate-300 hover:text-yellow-400 transition font-light">Depoimentos</a>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-3 text-center text-slate-400 font-light text-sm">
            <p>&copy; 2026 Dra. Graziela Prin - Odontologia. Todos os direitos reservados.</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <p className="text-slate-400 font-light text-sm">Feito por</p>
              <a href="https://wa.me/5511951608812" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 group">
                <img src="/assets/jg_logo.jpg" alt="JG Digital Logo" className="h-5 w-auto" />
                <span className="text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">JG Digital</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
