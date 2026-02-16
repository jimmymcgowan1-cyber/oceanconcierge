import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hero-beach-house.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury beach house at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold-light text-sm font-medium mb-6 backdrop-blur-sm border border-gold/30">
              <Star className="w-4 h-4 fill-current" />
              Premium Beach Home Concierge
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            Your Beach Home,{" "}
            <span className="text-gold-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">Always Ready</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] font-medium"
          >
            We're your trusted concierge for second homes at the beach. From stocking your fridge 
            to climate control, home checks, and seasonal prep — we handle everything so you can 
            simply arrive and relax.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href="#contact">
              <Button variant="hero" size="xl">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="hero-outline" size="xl">
                Explore Services
              </Button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-6 md:gap-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-6 h-6 text-gold-light" />
              </div>
              <div>
                <p className="text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Peace of Mind</p>
                <p className="text-white/80 text-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">Your home in good hands</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center backdrop-blur-sm">
                <Clock className="w-6 h-6 text-gold-light" />
              </div>
              <div>
                <p className="text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">24/7 Support</p>
                <p className="text-white/80 text-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">Always available</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center backdrop-blur-sm">
                <Star className="w-6 h-6 text-gold-light fill-current" />
              </div>
              <div>
                <p className="text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">New to the Shore</p>
                <p className="text-white/80 text-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">Locally owned & operated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;