import { motion } from "framer-motion";
import { 
  Home, 
  Thermometer, 
  ShoppingCart, 
  Wrench, 
  Droplets,
  KeyRound,
  Leaf,
  Shield,
  Plane
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home Check-Ins",
    description: "Regular inspections to ensure your property is secure, clean, and in perfect condition while you're away.",
    color: "bg-gold/10 text-gold",
  },
  {
    icon: Thermometer,
    title: "Climate Control",
    description: "We'll adjust your HVAC before arrival so your home is at the perfect temperature when you walk in.",
    color: "bg-coral/10 text-coral",
  },
  {
    icon: ShoppingCart,
    title: "Grocery Stocking",
    description: "Send us your list and we'll have your fridge fully stocked with fresh groceries before you arrive.",
    color: "bg-gold/10 text-gold",
  },
  {
    icon: Wrench,
    title: "Maintenance Coordination",
    description: "From plumbers to electricians, we coordinate all repairs and maintenance with trusted local vendors.",
    color: "bg-navy/10 text-navy",
  },
  {
    icon: Droplets,
    title: "Pool & Spa Care",
    description: "Professional pool and spa maintenance to ensure crystal-clear water awaits your arrival.",
    color: "bg-gold-light/10 text-gold-light",
  },
  {
    icon: KeyRound,
    title: "Key & Access Management",
    description: "Secure key holding, contractor access coordination, and smart lock management services.",
    color: "bg-navy/10 text-navy",
  },
  {
    icon: Leaf,
    title: "Seasonal Prep",
    description: "Winterization, storm prep, and seasonal opening/closing services for your beach property.",
    color: "bg-gold/10 text-gold",
  },
  {
    icon: Shield,
    title: "Storm Watch",
    description: "During severe weather, we monitor your property and take immediate action if needed.",
    color: "bg-coral/10 text-coral",
  },
  {
    icon: Plane,
    title: "Drone Fly-Around",
    description: "Aerial inspection of your property before and after major weather events, or on-demand anytime.",
    color: "bg-teal/10 text-teal",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Everything Your Beach Home Needs
          </h2>
          <p className="text-lg text-muted-foreground">
            From routine check-ins to full arrival preparation, we offer comprehensive 
            concierge services tailored to second homeowners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-medium">
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;