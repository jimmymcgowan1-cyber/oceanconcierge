import { motion } from "framer-motion";
import { Phone, ClipboardCheck, Sparkles, Key } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Get in Touch",
    description: "Tell us about your property and what services you need. We'll schedule a consultation to understand your requirements.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Customize Your Plan",
    description: "We create a personalized concierge plan based on your needs — from weekly check-ins to full arrival preparation.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "We Handle Everything",
    description: "Our team takes care of your home with regular updates and photos, so you always know your property is in great hands.",
  },
  {
    number: "04",
    icon: Key,
    title: "Arrive & Relax",
    description: "Walk into your perfectly prepared beach home — climate set, fridge stocked, and everything exactly how you like it.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Simple Steps to Peace of Mind
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started with ShoreHands is easy. Here's how we make caring for your 
            second home completely effortless.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 text-center relative z-10 border border-border hover:border-teal/30 transition-all duration-300 hover:shadow-medium h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-teal text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-teal/10 flex items-center justify-center mb-6 mt-2">
                    <step.icon className="w-8 h-8 text-teal" />
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
