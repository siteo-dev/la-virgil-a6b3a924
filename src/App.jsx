import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, MapPin, Mail, Clock, Shield, Award, Users, Star, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import { cn } from '@/lib/utils';
import DemoBanner from './DemoBanner';
import LightRays from './LightRays';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Our Story' },
    { id: 'services', label: 'Menu' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const stats = [
    { value: 350, suffix: '+', label: 'Happy Customers' },
    { value: 200, suffix: '+', label: 'Meals Served Daily' },
    { value: 100, suffix: '%', label: 'Fresh Ingredients' },
    { value: 5, suffix: '', label: 'Stars Average Rating' }
  ];

  const aboutItems = [
    {
      icon: Shield,
      title: "Traditional Recipes",
      description: "Passed down through generations"
    },
    {
      icon: Award,
      title: "Local Ingredients",
      description: "Sourced from regional farms"
    },
    {
      icon: Users,
      title: "Cozy Atmosphere",
      description: "Perfect for family gatherings"
    },
    {
      icon: Clock,
      title: "Authentic Experience",
      description: "Taste the real Romania"
    }
  ];

  const servicesItems = [
    {
      name: "Ciorba de vaca",
      description: "Slow-braised beef soup with vegetables and herbs",
      price: "34 RON"
    },
    {
      name: "Ciorba de perisoare",
      description: "Pork rib soup with garlic and paprika",
      price: "33 RON"
    },
    {
      name: "Vita",
      description: "Tender slow-braised beef with potatoes and carrots",
      price: "89 RON"
    },
    {
      name: "Ciorbe de burta",
      description: "Beef stomach soup with spices and fresh herbs",
      price: "44 RON"
    }
  ];

  const whyUsFeatures = [
    {
      Icon: Shield,
      name: "Traditional Recipes",
      description: "Our family recipes have been perfected over generations, ensuring each dish delivers authentic Romanian taste that brings families together.",
      className: "col-span-3 lg:col-span-1"
    },
    {
      Icon: Award,
      name: "Local Sourcing",
      description: "We source ingredients from local farms within 50km of our restaurant, guaranteeing the freshest produce and meats for our traditional dishes.",
      className: "col-span-3 lg:col-span-2"
    },
    {
      Icon: Users,
      name: "Cozy Atmosphere",
      description: "Our warm, inviting space creates the perfect environment for family dinners and special occasions, with comfortable seating for groups up to 20 guests.",
      className: "col-span-3 lg:col-span-2"
    },
    {
      Icon: Clock,
      name: "Fresh Preparation",
      description: "All our meals are prepared daily from scratch using time-honored techniques that preserve the true essence of Romanian comfort food.",
      className: "col-span-3 lg:col-span-1"
    }
  ];

  const reviews = [
    {
      name: "Maria I.",
      gender: "F",
      text: "The ciorba de vaca was incredible! I've never tasted anything so rich and comforting. My family loves coming here every weekend.",
      rating: 5
    },
    {
      name: "Andrei M.",
      gender: "M",
      text: "Best beef dish in town! The vita was perfectly cooked and the portion size was generous. Service was friendly and attentive throughout our meal.",
      rating: 5
    },
    {
      name: "Elena S.",
      gender: "F",
      text: "Authentic flavors that remind me of home. The ciorbe de burta brought back memories of my grandmother's cooking. Will definitely return soon!",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "What are your opening hours?",
      answer: "We're open Tuesday through Sunday from 12:00 PM to 10:00 PM. Closed on Mondays for family time."
    },
    {
      question: "Do you offer takeout or delivery?",
      answer: "Yes, we provide both takeout and delivery services. Order online or call us at +40757263744."
    },
    {
      question: "What makes your cuisine authentic?",
      answer: "Our recipes are passed down from generations of Romanian families who have perfected these traditional dishes over decades."
    },
    {
      question: "Can I book a table for large groups?",
      answer: "Absolutely! We can accommodate groups up to 30 people. Please call ahead to reserve your preferred time."
    },
    {
      question: "Do you have vegetarian options?",
      answer: "While our menu focuses on meat-based dishes, we offer vegetable sides and can prepare special requests upon request."
    },
    {
      question: "Are children welcome at your restaurant?",
      answer: "Yes! We're family-friendly with high chairs available. Our cozy atmosphere makes it perfect for families."
    }
  ];

  const contactItems = [
    { icon: MapPin, text: "soseaua tudor valdimirescu, domnesti, ilfov" },
    { icon: Phone, text: "+40757263744" },
    { icon: Mail, text: "contact@virgil.com" }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <DemoBanner />
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">La Virgil</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] p-4">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); setIsMenuOpen(false); }}
                  className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <section id="hero" className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip">
        <div className="absolute inset-0 z-0">
          <LightRays 
            raysOrigin="top-center" 
            raysColor="#f4bc17" 
            raysSpeed={1} 
            lightSpread={isMobile ? 2 : 0.5} 
            rayLength={isMobile ? 3 : 1} 
            followMouse={true} 
            mouseInfluence={0.05} 
            noiseAmount={0} 
            distortion={0} 
            pulsating={false} 
            fadeDistance={1} 
            saturation={1} 
          />
        </div>
        
        <DotPattern opacity={0.15} className="absolute inset-0 z-0" />
        
        <div className="container mx-auto px-6 sm:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hero-blur hero-delay-1 mb-6">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
                <AnimatedShinyText className="text-sm font-medium">Authentic Romanian Cuisine Since 2019</AnimatedShinyText>
              </div>
            </div>
            
            <h1 className="hero-blur hero-delay-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              Authentic Romanian Flavors
            </h1>
            
            <p className="hero-blur hero-delay-3 text-lg text-muted-foreground max-w-xl mx-auto mb-12">
              Discover the warmth of traditional Romanian cooking in our cozy restaurant. We serve hearty soups, slow-braised meats, and authentic dishes made with locally sourced ingredients.
            </p>
            
            <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <ShimmerButton className="shadow-2xl btn-hover" background="rgba(244,188,23, 1)">
                <span className="text-sm font-medium text-black">Book a Table</span>
              </ShimmerButton>
              
              <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
            
            <div className="hero-blur hero-delay-5 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
              {stats.map((stat, i) => (
                <div key={i} className={cn("text-center", i > 0 && "sm:border-l sm:border-white/10 sm:pl-12")}>
                  <NumberTicker 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    className="text-4xl font-black bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(244,188,23,0.6)]" 
                  />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
      </section>

      <section id="about" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="container mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Our Story & Values</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              La Virgil brings the heart of Romanian cuisine to Domneşti. Our passion for traditional cooking started in 2019 with a simple mission: to share authentic flavors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-on-scroll">
            {aboutItems.map((item, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(244,188,23,0.15)] transition-all duration-500">
                      <item.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-amber-50 transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
        
        <div className="container mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Our Signature Dishes</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Savor our carefully crafted traditional Romanian meals made with love and authentic ingredients.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
            {servicesItems.map((service, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-50 transition-colors">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Separator className="mb-5 bg-white/[0.06]" />
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">{service.price}</span>
                    <ShimmerButton className="shadow-2xl btn-hover" background="rgba(244,188,23, 1)">
                      <span className="text-xs font-medium text-black">Order Now</span>
                    </ShimmerButton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Why Choose La Virgil?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We stand out for our commitment to authentic flavors, quality ingredients, and exceptional service.
            </p>
          </div>
          
          <BentoGrid className="lg:grid-rows-2">
            {whyUsFeatures.map((feature, index) => (
              <BentoCard 
                key={index} 
                className={cn(feature.className, "hover:border-amber-500/20")} 
                background={feature.background}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(244,188,23,0.15)] transition-all duration-500">
                    <feature.Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-amber-50 transition-colors">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      <section id="reviews" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-amber-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="container mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Real reviews from real people who've experienced our authentic Romanian cuisine.
            </p>
          </div>
          
          <div className="relative flex max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover max-w-sm mx-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">{review.text}</p>
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10 mr-3">
                        <AvatarImage src={`/assets/people/${review.gender === 'M' ? 'boy_1' : 'girl_1'}.jpg`} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{review.name}</p>
                        <p className="text-xs text-muted-foreground">Customer</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Find answers to common questions about our restaurant and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <Accordion type="multiple" className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/[0.06]">
                  <AccordionTrigger className="text-left hover:bg-white/[0.02] transition-colors duration-200 py-4">
                    <span className="font-medium">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-amber-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Visit Us Today</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Come experience authentic Romanian flavors in our warm, welcoming restaurant located in Domneşti.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 animate-on-scroll">
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <Card key={index} className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                  <div className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                </Card>
              ))}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <ShimmerButton className="shadow-2xl btn-hover" background="rgba(244,188,23, 1)">
                  <span className="text-sm font-medium text-black">WhatsApp Us</span>
                </ShimmerButton>
              </div>
            </div>
            
            <div className="h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <iframe
                src={"https://www.google.com/maps?q=" + encodeURIComponent("soseaua tudor valdimirescu, domnesti, ilfov") + "&output=embed"}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden py-8 pb-32">
        <Separator />
        <div className="container mx-auto px-6 sm:px-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} La Virgil. All rights reserved.</p>
            <div className="flex gap-3">
              <a href="https://instagram.com/lavirgil" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-white/[0.05] h-10 w-10">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block"><ProgressiveBlur position="bottom" height="250px" /></div><div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden"><ProgressiveBlur position="bottom" height="150px" /></div>
    </>
  );
};

export default App;
