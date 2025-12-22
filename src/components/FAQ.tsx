import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We currently serve beach communities in Maryland and Delaware, including Ocean City MD, Rehoboth Beach, Bethany Beach, Dewey Beach, Fenwick Island, and Lewes. If your property is in the coastal Mid-Atlantic region, reach out — we may be able to help!",
  },
  {
    question: "How does the concierge service work?",
    answer: "It's simple! After an initial consultation, we create a customized service plan for your property. You can schedule regular check-ins, request arrival preparation, or call us anytime for one-off services. We handle everything and keep you updated with photos and reports.",
  },
  {
    question: "What's included in a home check-in?",
    answer: "Our standard check-in includes a full interior and exterior inspection, checking for leaks or damage, verifying HVAC and water heater operation, flushing toilets, running faucets, checking security systems, and photo documentation sent directly to you.",
  },
  {
    question: "How much do your services cost?",
    answer: "Pricing depends on your property size and the services you need. We offer flexible plans starting from basic monthly check-ins to comprehensive full-service concierge packages. Contact us for a free, no-obligation quote tailored to your specific needs.",
  },
  {
    question: "Can you stock my fridge before I arrive?",
    answer: "Absolutely! Just send us your grocery list and preferred stores, and we'll have everything stocked and ready. We can also pick up specialty items, beverages, and even prepare welcome baskets for your guests.",
  },
  {
    question: "What happens during a storm or emergency?",
    answer: "We monitor weather conditions and proactively check on properties before and after storms. In emergencies, we can secure your property, document any damage, coordinate with insurance, and manage repairs with our trusted vendor network.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer: "No! We offer flexible month-to-month service with no long-term commitments. You can adjust your service level or pause anytime. We believe in earning your business through great service, not contracts.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, ShoreHands is fully licensed, bonded, and insured. All our team members undergo background checks, and we carry comprehensive liability insurance for your peace of mind.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you don't see what you're looking for, 
            feel free to reach out directly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-teal/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-teal hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
