import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone must be less than 20 characters"),
  propertyLocation: z.string().trim().min(1, "Property location is required").max(200, "Location must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyLocation: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours with your custom quote.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-24 bg-cream/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-6">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Request Your{" "}
              <span className="text-gold">Free Quote</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us about your beach property and we'll create a custom concierge 
              plan tailored to your needs. No commitment required.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Service Area</h4>
                  <p className="text-muted-foreground">
                    Ocean City, MD to Rehoboth Beach, DE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground">(410) 555-BEACH</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">hello@oceanconcierge.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 shadow-elegant border border-border/50"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(609) 555-1234" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="propertyLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Property Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Ocean City, MD" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How Can We Help?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your property and what services you're interested in..."
                          className="min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="teal" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Request Free Quote
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  We'll respond within 24 hours. No spam, ever.
                </p>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;