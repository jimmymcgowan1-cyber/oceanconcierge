import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-sand opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Ready to Enjoy Your Shore Home{" "}
            <span className="text-teal">Worry-Free?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let us handle the details so you can focus on making memories. Get in touch today 
            for a free consultation and custom quote for your property.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="teal" size="xl">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" className="border-2">
              <Phone className="w-5 h-5" />
              (609) 555-SHORE
            </Button>
          </div>

          <p className="mt-8 text-muted-foreground text-sm">
            No commitment required • Serving the Jersey Shore from LBI to Cape May
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
