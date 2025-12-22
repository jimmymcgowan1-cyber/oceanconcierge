import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & Michael Thompson",
    location: "Long Beach Island",
    image: "ST",
    rating: 5,
    text: "ShoreHands has been a game-changer for us. We live in Philadelphia and used to stress about our LBI house all winter. Now we get regular updates with photos, and everything is perfect when we arrive for summer weekends.",
  },
  {
    name: "David Chen",
    location: "Ocean City, NJ",
    image: "DC",
    rating: 5,
    text: "The grocery stocking service alone is worth it. After a 3-hour drive with the kids, walking into a stocked fridge and cool house is absolute heaven. Highly recommend!",
  },
  {
    name: "Patricia Williams",
    location: "Avalon",
    image: "PW",
    rating: 5,
    text: "During last year's storm, ShoreHands checked on our property, documented everything, and coordinated repairs before we even knew there was damage. True peace of mind.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-navy text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-teal-light font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Loved by Shore Homeowners
          </h2>
          <p className="text-lg text-sand/70">
            Don't just take our word for it — hear from families who trust ShoreHands 
            with their shore properties.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-navy-light/50 backdrop-blur-sm rounded-2xl p-8 border border-sand/10 h-full">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-teal/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-coral fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sand/90 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center text-teal-light font-semibold">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-sand-light">{testimonial.name}</p>
                    <p className="text-sand/60 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
