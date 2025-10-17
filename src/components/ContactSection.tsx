import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-2 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Are you interested in collaborating with me? Send a message my way
          with the contacts below!
        </p>
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 max-w-5xl items-start">
          <div className="flex items-center space-x-4 ">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="">
              <h4 className="font-medium">Email</h4>
              <a
                href="mailto:alessio.calore96@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
              >
                alessio.calore96@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <h4 className="font-medium">Phone</h4>
              <a
                href="tel:+393402956476"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
              >
                +393402956476
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <h4 className="font-medium">Location</h4>
              <a className="text-muted-foreground hover:text-primary transition-colors">
                Rome, Lazio, Italy
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <h4 className="font-medium">Find me on</h4>
              <a
                className="text-muted-foreground hover:text-primary transition-colors"
                href="https://www.linkedin.com/in/alessio-calore-562385120"
                target="_blank"
              >
                Linkedin!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
