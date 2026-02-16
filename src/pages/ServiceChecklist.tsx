import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Check, Send, Plane, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import logo from "@/assets/ocean-concierge-logo.jpg";

const formSchema = z.object({
  // Contact Info
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  preferredContact: z.enum(["phone", "email", "text"]),
  bestTimeToContact: z.string().optional(),

  // Property Details
  propertyAddress: z.string().min(5, "Please enter your property address"),
  propertyType: z.string().min(1, "Please select a property type"),
  squareFootage: z.string().optional(),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  hasPool: z.boolean().default(false),
  hasHotTub: z.boolean().default(false),
  hasOutdoorShower: z.boolean().default(false),
  hasDeckPatio: z.boolean().default(false),
  visitFrequency: z.string().optional(),

  // Regular Services
  homeCheckIns: z.boolean().default(false),
  homeCheckInFrequency: z.string().optional(),
  climateControl: z.boolean().default(false),
  groceryStocking: z.boolean().default(false),
  maintenanceCoordination: z.boolean().default(false),
  poolSpaCare: z.boolean().default(false),
  keyAccessManagement: z.boolean().default(false),
  lawnExterior: z.boolean().default(false),

  // Seasonal & Storm Services
  winterization: z.boolean().default(false),
  springOpening: z.boolean().default(false),
  preStormPrep: z.boolean().default(false),
  postStormInspection: z.boolean().default(false),
  droneBeforeAfterWeather: z.boolean().default(false),
  droneMonthlyCheck: z.boolean().default(false),
  droneOnDemand: z.boolean().default(false),

  // Arrival Preparation
  adjustHVAC: z.boolean().default(false),
  fullHouseCleaning: z.boolean().default(false),
  linenTowelService: z.boolean().default(false),
  stockRefrigerator: z.boolean().default(false),
  turnOnUtilities: z.boolean().default(false),
  setupOutdoorFurniture: z.boolean().default(false),

  // Additional Info
  howDidYouHear: z.string().optional(),
  specialRequests: z.string().optional(),
  preferredStartDate: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const sections = [
  { id: 1, title: "Contact Info", icon: "📞" },
  { id: 2, title: "Property Details", icon: "🏠" },
  { id: 3, title: "Regular Services", icon: "🔧" },
  { id: 4, title: "Seasonal & Storm", icon: "🌊" },
  { id: 5, title: "Arrival Prep", icon: "✈️" },
  { id: 6, title: "Additional Info", icon: "📝" },
];

const ServiceChecklist = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preferredContact: "email",
      hasPool: false,
      hasHotTub: false,
      hasOutdoorShower: false,
      hasDeckPatio: false,
      homeCheckIns: false,
      climateControl: false,
      groceryStocking: false,
      maintenanceCoordination: false,
      poolSpaCare: false,
      keyAccessManagement: false,
      lawnExterior: false,
      winterization: false,
      springOpening: false,
      preStormPrep: false,
      postStormInspection: false,
      droneBeforeAfterWeather: false,
      droneMonthlyCheck: false,
      droneOnDemand: false,
      adjustHVAC: false,
      fullHouseCleaning: false,
      linenTowelService: false,
      stockRefrigerator: false,
      turnOnUtilities: false,
      setupOutdoorFurniture: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const payload = {
        formType: "checklist",
        ...data,
        timestamp: new Date().toISOString(),
      };
      await fetch("https://script.google.com/macros/s/AKfycbys2CXtM2Df4sMqt_wALQDmRGznlL8qJE1RM_okYigYj__7pPlby8BzrieT4vwEKmJqww/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setIsSubmitted(true);
      toast({
        title: "Checklist Submitted!",
        description: "We'll be in touch within 24 hours to discuss your needs.",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextSection = () => {
    if (currentSection < 6) setCurrentSection(currentSection + 1);
  };

  const prevSection = () => {
    if (currentSection > 1) setCurrentSection(currentSection - 1);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card rounded-3xl p-8 md:p-12 max-w-xl shadow-medium"
        >
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-teal" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
              You're All Set!
            </h2>
            <p className="text-muted-foreground">
              We've received your service interest checklist and we're excited to help care for your property.
            </p>
          </div>

          <div className="space-y-4 mb-10">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              What Happens Next
            </h3>
            {[
              { step: "1", title: "We Review Your Needs", description: "Our team will review your checklist and prepare a personalized service plan." },
              { step: "2", title: "We'll Reach Out Within 24 Hours", description: "Expect a call or email from us to discuss your property and answer any questions." },
              { step: "3", title: "Custom Quote Delivered", description: "You'll receive a detailed quote tailored to the services you selected — no obligation." },
              { step: "4", title: "Relax, We've Got It", description: "Once approved, we start taking care of your beach home so you don't have to worry." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-teal/10 text-teal flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.title}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 rounded-xl p-5 mb-8 text-center">
            <p className="text-sm text-muted-foreground mb-1">Questions in the meantime?</p>
            <a href="tel:6098654038" className="text-teal font-semibold hover:underline">
              609-865-4038
            </a>
            <span className="text-muted-foreground mx-2">·</span>
            <a href="mailto:nicole.k.mcgowan@gmail.com" className="text-teal font-semibold hover:underline text-sm">
              nicole.k.mcgowan@gmail.com
            </a>
          </div>

          <div className="text-center">
            <Link to="/">
              <Button variant="teal" size="lg">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Ocean Concierge" className="h-10 w-auto rounded-lg" />
              <span className="font-heading font-bold text-lg text-foreground">
                Ocean Concierge
              </span>
            </Link>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Progress Indicator */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            {sections.map((section, index) => (
              <div key={section.id} className="flex items-center">
                <button
                  onClick={() => setCurrentSection(section.id)}
                  className={`flex flex-col items-center gap-1 transition-colors ${
                    currentSection === section.id
                      ? "text-teal"
                      : currentSection > section.id
                      ? "text-gold"
                      : "text-muted-foreground"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-colors ${
                      currentSection === section.id
                        ? "bg-teal text-white"
                        : currentSection > section.id
                        ? "bg-gold text-white"
                        : "bg-muted"
                    }`}
                  >
                    {currentSection > section.id ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      section.icon
                    )}
                  </div>
                  <span className="text-xs hidden md:block">{section.title}</span>
                </button>
                {index < sections.length - 1 && (
                  <div
                    className={`w-8 md:w-16 h-0.5 mx-1 ${
                      currentSection > section.id ? "bg-gold" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-6 md:p-10 shadow-soft border border-border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* Section 1: Contact Info */}
                {currentSection === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                        Contact Information
                      </h2>
                      <p className="text-muted-foreground">
                        How can we reach you?
                      </p>
                    </div>

                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
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
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Contact Method</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex gap-6"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="phone" id="phone" />
                                <Label htmlFor="phone">Phone</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="email" id="email" />
                                <Label htmlFor="email">Email</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="text" id="text" />
                                <Label htmlFor="text">Text</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bestTimeToContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Best Time to Contact</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                              <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                              <SelectItem value="anytime">Anytime</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Section 2: Property Details */}
                {currentSection === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                        Property Details
                      </h2>
                      <p className="text-muted-foreground">
                        Tell us about your beach home
                      </p>
                    </div>

                    <FormField
                      control={form.control}
                      name="propertyAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Property Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Ocean Drive, Bethany Beach, DE" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="propertyType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Property Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select property type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="single-family">Single Family Home</SelectItem>
                              <SelectItem value="condo">Condo</SelectItem>
                              <SelectItem value="townhouse">Townhouse</SelectItem>
                              <SelectItem value="multi-unit">Multi-Unit</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="squareFootage"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Square Footage</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="under-1000">Under 1,000</SelectItem>
                                <SelectItem value="1000-2000">1,000 - 2,000</SelectItem>
                                <SelectItem value="2000-3000">2,000 - 3,000</SelectItem>
                                <SelectItem value="3000-4000">3,000 - 4,000</SelectItem>
                                <SelectItem value="over-4000">Over 4,000</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="visitFrequency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How Often Do You Visit?</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select frequency" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="seasonally">Seasonally</SelectItem>
                                <SelectItem value="rarely">Rarely</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="bedrooms"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bedrooms</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[1, 2, 3, 4, 5, 6, "7+"].map((num) => (
                                  <SelectItem key={num} value={String(num)}>
                                    {num}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="bathrooms"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bathrooms</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[1, 1.5, 2, 2.5, 3, 3.5, 4, "5+"].map((num) => (
                                  <SelectItem key={num} value={String(num)}>
                                    {num}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div>
                      <Label className="text-base mb-3 block">Property Amenities</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="hasPool"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">Pool</FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="hasHotTub"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">Hot Tub / Spa</FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="hasOutdoorShower"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">Outdoor Shower</FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="hasDeckPatio"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">Deck / Patio</FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 3: Regular Services */}
                {currentSection === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                        Regular Concierge Services
                      </h2>
                      <p className="text-muted-foreground">
                        Select the ongoing services you're interested in
                      </p>
                    </div>

                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="homeCheckIns"
                        render={({ field }) => (
                          <div className="p-4 rounded-xl border border-border hover:border-teal/30 transition-colors">
                            <FormItem className="flex items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1">
                                <FormLabel className="font-semibold">Home Check-Ins</FormLabel>
                                <p className="text-sm text-muted-foreground">
                                  Regular inspections to ensure your property is secure and in perfect condition
                                </p>
                              </div>
                            </FormItem>
                            {field.value && (
                              <div className="mt-3 ml-7">
                                <FormField
                                  control={form.control}
                                  name="homeCheckInFrequency"
                                  render={({ field }) => (
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <SelectTrigger className="w-48">
                                        <SelectValue placeholder="Select frequency" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="weekly">Weekly</SelectItem>
                                        <SelectItem value="bi-weekly">Bi-Weekly</SelectItem>
                                        <SelectItem value="monthly">Monthly</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  )}
                                />
                              </div>
                            )}
                          </div>
                        )}
                      />

                      {[
                        { name: "climateControl" as const, label: "Climate Control Management", desc: "HVAC adjustments before your arrival" },
                        { name: "groceryStocking" as const, label: "Grocery Stocking", desc: "Fully stocked fridge when you arrive" },
                        { name: "maintenanceCoordination" as const, label: "Maintenance Coordination", desc: "Coordinate repairs with trusted local vendors" },
                        { name: "poolSpaCare" as const, label: "Pool & Spa Care", desc: "Professional pool and spa maintenance" },
                        { name: "keyAccessManagement" as const, label: "Key & Access Management", desc: "Secure key holding and smart lock management" },
                        { name: "lawnExterior" as const, label: "Lawn & Exterior Maintenance", desc: "Keep your exterior looking pristine" },
                      ].map((service) => (
                        <FormField
                          key={service.name}
                          control={form.control}
                          name={service.name}
                          render={({ field }) => (
                            <div className="p-4 rounded-xl border border-border hover:border-teal/30 transition-colors">
                              <FormItem className="flex items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <div className="space-y-1">
                                  <FormLabel className="font-semibold">{service.label}</FormLabel>
                                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                                </div>
                              </FormItem>
                            </div>
                          )}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Section 4: Seasonal & Storm Services */}
                {currentSection === 4 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                        Seasonal & Storm Services
                      </h2>
                      <p className="text-muted-foreground">
                        Protect your property year-round
                      </p>
                    </div>

                    <div className="space-y-4">
                      {[
                        { name: "winterization" as const, label: "Winterization Services", desc: "Prepare your home for the off-season" },
                        { name: "springOpening" as const, label: "Spring Opening Services", desc: "Get your property ready for the season" },
                        { name: "preStormPrep" as const, label: "Pre-Storm Preparation", desc: "Secure outdoor items, board windows, etc." },
                        { name: "postStormInspection" as const, label: "Post-Storm Inspection", desc: "Assess and document any storm damage" },
                      ].map((service) => (
                        <FormField
                          key={service.name}
                          control={form.control}
                          name={service.name}
                          render={({ field }) => (
                            <div className="p-4 rounded-xl border border-border hover:border-teal/30 transition-colors">
                              <FormItem className="flex items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <div className="space-y-1">
                                  <FormLabel className="font-semibold">{service.label}</FormLabel>
                                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                                </div>
                              </FormItem>
                            </div>
                          )}
                        />
                      ))}
                    </div>

                    {/* Drone Services - Featured */}
                    <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-teal/10 to-coral/10 border-2 border-teal/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-teal/20 rounded-xl flex items-center justify-center">
                          <Plane className="w-6 h-6 text-teal" />
                        </div>
                        <div>
                          <h3 className="text-lg font-heading font-bold text-foreground">
                            Drone Fly-Around Inspection
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Aerial eyes on your property anytime
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <FormField
                          control={form.control}
                          name="droneBeforeAfterWeather"
                          render={({ field }) => (
                            <FormItem className="flex items-start space-x-3 space-y-0 bg-card/50 p-3 rounded-lg">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div>
                                <FormLabel className="font-semibold">Before & After Major Weather Events</FormLabel>
                                <p className="text-sm text-muted-foreground">
                                  Document your property's condition around storms
                                </p>
                              </div>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="droneMonthlyCheck"
                          render={({ field }) => (
                            <FormItem className="flex items-start space-x-3 space-y-0 bg-card/50 p-3 rounded-lg">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div>
                                <FormLabel className="font-semibold">Monthly Visual Property Check</FormLabel>
                                <p className="text-sm text-muted-foreground">
                                  Regular aerial inspection of roof, exterior, and grounds
                                </p>
                              </div>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="droneOnDemand"
                          render={({ field }) => (
                            <FormItem className="flex items-start space-x-3 space-y-0 bg-card/50 p-3 rounded-lg">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div>
                                <FormLabel className="font-semibold">On-Demand Aerial Inspection</FormLabel>
                                <p className="text-sm text-muted-foreground">
                                  Request a fly-around anytime you want eyes on your home
                                </p>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 5: Arrival Preparation */}
                {currentSection === 5 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                        Arrival Preparation Services
                      </h2>
                      <p className="text-muted-foreground">
                        Arrive to a home that's ready for you
                      </p>
                    </div>

                    <div className="space-y-4">
                      {[
                        { name: "adjustHVAC" as const, label: "Adjust HVAC Before Arrival", desc: "Perfect temperature when you walk in" },
                        { name: "fullHouseCleaning" as const, label: "Full House Cleaning", desc: "Deep clean before every visit" },
                        { name: "linenTowelService" as const, label: "Linen & Towel Service", desc: "Fresh linens on all beds" },
                        { name: "stockRefrigerator" as const, label: "Stock Refrigerator & Pantry", desc: "Your grocery list, our shopping" },
                        { name: "turnOnUtilities" as const, label: "Turn On Water/Utilities", desc: "Everything ready when you arrive" },
                        { name: "setupOutdoorFurniture" as const, label: "Set Up Outdoor Furniture", desc: "Deck and patio ready for relaxing" },
                      ].map((service) => (
                        <FormField
                          key={service.name}
                          control={form.control}
                          name={service.name}
                          render={({ field }) => (
                            <div className="p-4 rounded-xl border border-border hover:border-teal/30 transition-colors">
                              <FormItem className="flex items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <div className="space-y-1">
                                  <FormLabel className="font-semibold">{service.label}</FormLabel>
                                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                                </div>
                              </FormItem>
                            </div>
                          )}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Section 6: Additional Info */}
                {currentSection === 6 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                        Additional Information
                      </h2>
                      <p className="text-muted-foreground">
                        Almost done! Just a few more details.
                      </p>
                    </div>

                    <FormField
                      control={form.control}
                      name="howDidYouHear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How did you hear about us?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="google">Google Search</SelectItem>
                              <SelectItem value="referral">Friend/Family Referral</SelectItem>
                              <SelectItem value="realtor">Real Estate Agent</SelectItem>
                              <SelectItem value="social">Social Media</SelectItem>
                              <SelectItem value="local-ad">Local Advertisement</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredStartDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>When would you like services to begin?</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="specialRequests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Requests or Concerns</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about any specific needs, concerns, or questions you have..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-10 pt-6 border-t border-border">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevSection}
                    disabled={currentSection === 1}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </Button>

                  {currentSection < 6 ? (
                    <Button type="button" variant="teal" onClick={nextSection}>
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button type="submit" variant="teal" disabled={isSubmitting}>
                      {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                      {isSubmitting ? "Submitting..." : "Submit Checklist"}
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceChecklist;
