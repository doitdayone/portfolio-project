import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section className="min-w-full h-screen flex items-center snap-start p-4 md:p-8 lg:p-16 bg-gradient-to-br from-[#e8f0df] to-[#f1f5e8]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#86a877]/20 text-[#5c7850] text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5c7850]">
            Let&apos;s <span className="text-[#86a877]">Connect</span>
          </h2>
          <p className="text-[#5c7850]/80 max-w-2xl mx-auto mt-4">
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you. Fill out the form below and I&apos;ll get back to you
            as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-[#5c7850] mb-6">
              Send Me a Message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-[#5c7850]"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="border-[#86a877]/30 focus-visible:ring-[#5c7850]"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-[#5c7850]"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="border-[#86a877]/30 focus-visible:ring-[#5c7850]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-[#5c7850]"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="border-[#86a877]/30 focus-visible:ring-[#5c7850]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[#5c7850]"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="border-[#86a877]/30 focus-visible:ring-[#5c7850]"
                />
              </div>
              <Button className="w-full bg-[#5c7850] hover:bg-[#4a6340] text-white">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#5c7850] mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#86a877]/20 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-[#5c7850]" />
                  </div>
                  <div>
                    <h4 className="text-[#5c7850] font-medium">Email</h4>
                    <p className="text-[#86a877]">hungvo4work@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#86a877]/20 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-[#5c7850]" />
                  </div>
                  <div>
                    <h4 className="text-[#5c7850] font-medium">Phone</h4>
                    <p className="text-[#86a877]">0869872867</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#86a877]/20 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-[#5c7850]" />
                  </div>
                  <div>
                    <h4 className="text-[#5c7850] font-medium">Location</h4>
                    <p className="text-[#86a877]">Hòa Vang 1, Đà Nẵng</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#5c7850] mb-6">
                Follow Me
              </h3>
              {/* social icons vẫn giữ nguyên */}
            </div>

            <div className="bg-[#86a877]/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#5c7850] mb-2">
                Available for Freelance
              </h3>
              <p className="text-[#5c7850]/80 mb-4">
                I&apos;m currently available for freelance work. If you have a
                project that needs some creative direction, I&apos;d love to
                hear about it.
              </p>
              <Button className="bg-[#5c7850] hover:bg-[#4a6340] text-white">
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
