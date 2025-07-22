import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation } from "@tanstack/react-query";
import { 
  MapPin, 
  DollarSign, 
  GraduationCap, 
  CheckCircle,
  Upload,
  X
} from "lucide-react";
import { supabase } from "@/lib/supabase";

interface JobListing {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  color: string;
}

interface ApplicationFormData {
  position: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumeUrl: string;
  coverLetter: string;
}

export default function Careers() {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState<ApplicationFormData>({
    position: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resumeUrl: "",
    coverLetter: ""
  });

  // Fetch job listings from Supabase
  const { data: jobListings = [], isLoading, error } = useQuery({
    queryKey: ["job_listings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('job_listings')
        .select('*')
        .order('title', { ascending: true });
      if (error) throw error;
      return data;
    }
  });

  const applicationMutation = useMutation({
    mutationFn: async (data: ApplicationFormData) => {
      const { error } = await supabase
        .from('job_applications')
        .insert([{
          job_id: selectedJob?.id || null,
          position: data.position,
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          resume_url: data.resumeUrl,
          cover_letter: data.coverLetter,
          created_at: new Date().toISOString()
        }]);
      if (error) throw error;
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Application submitted successfully!",
        description: "We'll review your application and get back to you soon.",
      });
      setFormData({
        position: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        resumeUrl: "",
        coverLetter: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error submitting application",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  // Show loading or error states
  if (isLoading) {
    return <div className="container mx-auto px-6 py-24 text-center">Loading current openings...</div>;
  }
  if (error) {
    return <div className="container mx-auto px-6 py-24 text-center text-red-600">Failed to load openings: {error.message}</div>;
  }



  const handleApplyClick = (job: JobListing) => {
    setSelectedJob(job);
    setFormData(prev => ({ ...prev, position: job.title }));
    setShowApplicationForm(true);
  };

  const handleInputChange = (field: keyof ApplicationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.position) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    applicationMutation.mutate(formData);
  };

  const closeApplicationForm = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
    setFormData({
      position: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      resumeUrl: "",
      coverLetter: ""
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Build your career with Technext Consultants. We're always looking for talented engineers 
              and professionals who share our passion for excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Current Openings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore exciting opportunities to work on cutting-edge infrastructure projects with our expert team.
            </p>
          </div>
          
          <div className="space-y-6">
            {jobListings.map((job) => (
              <Card key={job.id} className={`hover:shadow-xl transition-all duration-300 border-l-4 ${job.color}`}>
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <Badge className="bg-primary/10 text-primary">
                          {job.type}
                        </Badge>
                        <Badge variant="secondary">
                          {job.department}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-2 text-primary" />
                          {job.salary}
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-2 text-primary" />
                          Professional Level
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 lg:mt-0 lg:ml-6">
                      <Button 
                        onClick={() => handleApplyClick(job)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Culture */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Why Join Technext Consultants?</h3>
                
                <div className="space-y-4">
                  {[
                    "Competitive salary and performance bonuses",
                    "401(k) with company matching",
                    "Professional development and continuing education",
                    "Flexible work arrangements and remote options",
                    "Paid time off and holidays"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Culture */}
            <div className="bg-primary/5 dark:bg-accent/5 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Our Culture</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Innovation First</h4>
                  <p className="text-muted-foreground">
                    We encourage creative problem-solving and embrace new technologies to deliver cutting-edge solutions.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Collaborative Environment</h4>
                  <p className="text-muted-foreground">
                    Work with talented professionals across disciplines in a supportive, team-oriented atmosphere.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Growth Opportunities</h4>
                  <p className="text-muted-foreground">
                    Advance your career with mentorship programs, leadership development, and diverse project exposure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold">
                  Apply for {selectedJob?.title}
                </h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={closeApplicationForm}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="resumeUrl">Resume URL</Label>
                  <Input
                    id="resumeUrl"
                    type="url"
                    value={formData.resumeUrl}
                    onChange={(e) => handleInputChange("resumeUrl", e.target.value)}
                    placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                    className="mt-2"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Please provide a public link to your resume
                  </p>
                </div>
                
                <div>
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                    rows={6}
                    placeholder="Tell us why you're interested in this position and what you can bring to our team..."
                    className="mt-2"
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={applicationMutation.isPending}
                  >
                    {applicationMutation.isPending ? "Submitting..." : "Submit Application"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={closeApplicationForm}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't See the Right Position?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            We're always interested in hearing from talented engineers and professionals. 
            Send us your resume and let us know how you'd like to contribute to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold">
              Send General Application
            </Button>
            <Button variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-semibold">
              Contact HR Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
