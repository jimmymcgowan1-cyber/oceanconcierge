import { motion } from "framer-motion";
import { CheckCircle2, Users, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Local Expertise",
    description: "Our team lives and works at the beach. We know the area, the vendors, and what your property needs.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "24/7 emergency response and regular communication keep you informed no matter where you are.",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description: "We treat your home like our own. Every detail matters, from fresh flowers to your favorite snacks.",
  },
];

const benefits = [
  "Fully licensed, bonded, and insured",
  "Vetted and trusted local vendor network",
  "Photo documentation with every visit",
  "Secure key and access management",
  "Customized service plans",
  "No long-term contracts required",
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why ShoreHands
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Your Trusted Partner for Beach Home Care
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We understand the unique challenges of owning a second home at the beach. 
              That's why we've built a comprehensive service that handles everything, 
              giving you complete peace of mind.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-teal/30 transition-all duration-300 hover:shadow-medium"
              >
                <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
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

export default WhyUs;
