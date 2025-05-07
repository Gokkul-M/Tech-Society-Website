import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(1, { message: "Last name must be at least 1 characters." }),
  registrationNumber: z.string().max(12, { message: "Registration number must be atmost 12 characters." }),
  department: z.string().min(2, { message: "Department must be at least 2 characters." }),
  year: z.string().min(1, { message: "Please select your year." }),
  phone: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  communityPreference: z.string().min(1, { message: "Please select a community." }),
  experience: z.number().min(1, { message: "Please rate your experience." }),
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." }).max(500, { message: "Bio cannot exceed 500 characters." }),
  terms: z.boolean().refine(val => val, { message: "You must accept the terms and conditions." })
});

type FormValues = z.infer<typeof formSchema>;

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      registrationNumber: "",
      department: "",
      year: "",
      phone: "",
      email: "",
      communityPreference: "",
      experience: 1,
      bio: "",
      terms: false
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    setTimeout(() => {
      setFormSubmitted(true);
      toast.success("Registration submitted successfully!");
    }, 1500);
  };

  const nextStep = async () => {
    if (currentStep === 1) {
      const firstStepFields = ['firstName', 'lastName', 'registrationNumber', 'department', 'year', 'email'];
      const isFirstStepValid = await form.trigger(firstStepFields as any);

      if (isFirstStepValid) {
        setCurrentStep(2);
      }
    }
  };

  const prevStep = () => {
    setCurrentStep(1);
  };

  const communityOptions = [
    { value: "web-dev", label: "Web Development" },
    { value: "mobile-dev", label: "Game and App Development" },
    { value: "intell-sys ", label: "Intelligent System" },
    { value: "ml", label: "Machine Learning" },
    { value: "cybersecurity", label: "Cybersecurity" },
  ];

  return (
    <Layout>
      <div className="pt-20 pb-20 md:pt-28">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block mb-6">
              <div className="bg-accent px-4 py-1.5 rounded-full">
                <span className="text-sm font-medium text-accent-foreground">
                  Join Our Community
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Become a <span className="text-tech-purple text-glow">Tech Society</span> member
            </h1>

            <p className="text-muted-foreground">
              Join our vibrant community of tech enthusiasts and be part of something amazing.
            </p>
          </div>

          {/* Registration Form */}
          <div className="max-w-3xl mx-auto bg-card border rounded-xl shadow-sm overflow-hidden">
            {formSubmitted ? (
              <div className="p-8 md:p-12 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-display font-bold mb-4">Registration Successful!</h2>
                <p className="text-muted-foreground mb-8">
                  Thank you for joining Tech Society! We've sent a confirmation email with next steps to your inbox.
                </p>
                <div className="flex justify-center">
                  <Button asChild>
                    <a href="/">Return to Home</a>
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {/* Progress Steps */}
                <div className="bg-muted/50 pt-6 pb-10 border-b">
                  <div className="relative max-w-xl mx-auto flex items-center justify-between px-6">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center flex-1">
                      <div className={cn(
                        "w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium z-10",
                        currentStep >= 1
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted-foreground/30 text-muted-foreground"
                      )}>
                        1
                      </div>
                      <span className="mt-2 text-xs font-medium">Personal Info</span>
                    </div>

                    {/* Progress Line */}
                    <div className="absolute top-4 left-[15%] right-[15%] h-1 bg-muted z-0">
                      <div
                        className={cn(
                          "h-full transition-all duration-500",
                          currentStep >= 2 ? "bg-primary w-full" : "bg-primary w-1/2"
                        )}
                      ></div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center flex-1">
                      <div className={cn(
                        "w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium z-10",
                        currentStep === 2
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted-foreground/30 text-muted-foreground"
                      )}>
                        2
                      </div>
                      <span className="mt-2 text-xs font-medium">Tech Profile</span>
                    </div>
                  </div>
                </div>


                <div className="p-6 md:p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {currentStep === 1 && (
                        <div className="space-y-6 animate-fade-in">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>First Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your first name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Last Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your last name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="registrationNumber"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Registration Number</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your registration number" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="department"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Department</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your department" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="year"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Year</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your year (e.g., 1st, 2nd, etc.)" {...field} />
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
                                    <Input type="email" placeholder="Your email" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="communityPreference"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Which community would you like to join?</FormLabel>
                                  <FormControl>
                                    <Select
                                      value={field.value}
                                      onValueChange={field.onChange}
                                    >
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select a community" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {communityOptions.map(option => (
                                          <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="experience"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Rate your experience</FormLabel>
                                  <FormControl>
                                    <Input type="number" placeholder="Rate 1-5" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Bio</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="Tell us about yourself" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      <FormField
                        control={form.control}
                        name="terms"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="font-normal cursor-pointer">
                                I agree to the <a href="#" className="text-tech-purple hover:underline">terms and conditions</a> and <a href="#" className="text-tech-purple hover:underline">privacy policy</a>
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      <div className="flex space-x-4 justify-end">
                        {currentStep === 2 && (
                          <Button variant="outline" onClick={prevStep} className="flex items-center space-x-2">
                            <ArrowRight className="rotate-180" />
                            <span>Back</span>
                          </Button>
                        )}
                        <Button onClick={nextStep} className="flex items-center space-x-2">
                          <span>{currentStep === 2 ? 'Submit' : 'Next'}</span>
                          <ArrowRight />
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
