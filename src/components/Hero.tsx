import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[65vh] flex flex-col justify-center overflow-visible bg-gradient-hero hero-glow pb-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        <div className="absolute top-1/4 left-10 w-56 h-56 sm:w-72 sm:h-72 bg-crypto-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-crypto-light-purple/10 rounded-full filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container mx-auto px-5 sm:px-8 py-16 sm:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="w-full lg:w-1/2 animate-fade-in-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 mb-5 text-xs text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-crypto-purple mr-2 animate-pulse"></span>
              Systems Engineering · Web · Security
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tight">
              <span className="text-gradient">Engineering systems</span>
              <br />
              <span className="text-white">beyond limits</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              We design and build scalable web systems, secure infrastructures, and
              high-performance applications for the next generation.
            </p>

            {/* CTA Buttons — stacked on mobile, side-by-side on sm+ */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-crypto-purple hover:bg-crypto-dark-purple text-white px-7 py-5 text-base w-full sm:w-auto"
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-700 text-white hover:bg-white/5 py-5 text-base w-full sm:w-auto"
              >
                View Work
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Stats strip — visible on md+ */}
          <div className="hidden md:flex lg:w-1/2 justify-end">
            <div className="flex flex-col gap-4 text-right">
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '3+', label: 'Years of Engineering' },
                { value: '100%', label: 'Uptime Focused' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — signals there is more below */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 animate-bounce z-10">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </section>
  );
};

export default Hero;