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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/20 text-teal-light text-sm font-medium mb-6 backdrop-blur-sm border border-teal/30">
              <Star className="w-4 h-4 fill-current" />
              Premium Shore Home Concierge
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-sand-light leading-tight mb-6"
          >
            Your Shore Home,{" "}
            <span className="text-teal-light">Always Ready</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-sand/80 mb-8 max-w-2xl"
          >
            We're your trusted concierge for second homes on the shore. From stocking your fridge 
            to climate control, home checks, and seasonal prep — we handle everything so you can 
            simply arrive and relax.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button variant="hero" size="xl">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Explore Services
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-6 md:gap-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-6 h-6 text-teal-light" />
              </div>
              <div>
                <p className="text-sand-light font-semibold">Fully Insured</p>
                <p className="text-sand/60 text-sm">Licensed & bonded</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center backdrop-blur-sm">
                <Clock className="w-6 h-6 text-teal-light" />
              </div>
              <div>
                <p className="text-sand-light font-semibold">24/7 Support</p>
                <p className="text-sand/60 text-sm">Always available</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center backdrop-blur-sm">
                <Star className="w-6 h-6 text-teal-light fill-current" />
              </div>
              <div>
                <p className="text-sand-light font-semibold">5-Star Rated</p>
                <p className="text-sand/60 text-sm">Trusted by 200+ families</p>
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
