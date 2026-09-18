import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

// Inline Brand SVGs to prevent Vite module export errors
const LinkedinIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z" />
  </svg>
);

const TwitterIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TwitchIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.571 4.714h1.715v5.143h-1.715zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
  </svg>
);

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate sending delay
    setTimeout(() => {
      setIsSending(false);
      setShowToast(true);
      setFormData({ name: "", email: "", message: "" });

      // Auto-hide toast notification after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="pt-24 pb-12 px-4 relative z-10 flex flex-col justify-between min-h-screen">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Get In <span className="text-primary text-glow">Touch</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Info */}
          <div className="space-y-8 text-left md:pt-4">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50 font-medium uppercase tracking-wider">Email</p>
                  <p className="text-sm md:text-base text-foreground font-medium">mohammadsharifi2505@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50 font-medium uppercase tracking-wider">Phone</p>
                  <p className="text-sm md:text-base text-foreground font-medium">+93 (0) 796353616</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50 font-medium uppercase tracking-wider">Location</p>
                  <p className="text-sm md:text-base text-foreground font-medium">Kabul, Afghanistan</p>
                </div>
              </div>
            </div>

            {/* Connect With Me (Social Logos) */}
            <div className="pt-6">
              <p className="text-sm font-medium text-foreground/80 mb-4">Connect With Me</p>
              <div className="flex items-center gap-4">
                {/* Social links set to '#' so you can update them individually */}
                <a
                  href="https://www.linkedin.com/in/mohammad-sharifi-a068443b2"
                  className="text-foreground/70 hover:text-primary transition-colors p-2 rounded-lg bg-card/40 hover:bg-card border border-border/40"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/m_sharifi_page313/"
                  className="text-foreground/70 hover:text-primary transition-colors p-2 rounded-lg bg-card/40 hover:bg-card border border-border/40"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-6 md:p-8 shadow-xl text-left">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-foreground/70 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-background/80 border border-border/60 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/70 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-background/80 border border-border/60 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/70 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-lg bg-background/80 border border-border/60 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full cosmic-button py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{isSending ? "Sending..." : "Send Message"}</span>
                {!isSending && <Send className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Right Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce flex items-center gap-3 bg-card border border-primary/40 text-foreground px-5 py-3 rounded-xl shadow-2xl backdrop-blur-xl">
          <CheckCircle2 className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium">Message sent successfully!</span>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border/40 text-center text-xs text-foreground/50">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-foreground">[313-SHARIFI]</span>. All rights reserved.
        </p>
      </footer>
    </section>
  );
};