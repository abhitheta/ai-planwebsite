import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { FadeInView } from '../components/FadeInView';
import { WorksWhereverBanner } from '../components/WorksWhereverBanner';

const CONTACT_CHANNELS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'support@thetadynamics.io',
    caption: 'Our team replies within 24 hours',
    href: 'mailto:support@thetadynamics.io',
  },
  {
    icon: Clock,
    label: 'Support Hours',
    value: '24 / 7 Support',
    caption: 'Round-the-clock assistance',
  },
  {
    icon: Phone,
    label: 'Sales Hours',
    value: '9am – 5pm GMT',
    caption: 'Monday to Friday',
  },
  {
    icon: MapPin,
    label: 'Global Presence',
    value: 'Serving clients worldwide',
    caption: 'Europe, North America & beyond',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: 'theta-pmo',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    'w-full px-4 py-3 rounded-[12px] bg-white border border-[#E5E7EC] text-[15px] text-[#111019] placeholder:text-[#9CA0AD] focus:border-[#007695] focus:ring-2 focus:ring-[#CCE4EC] outline-none transition';

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#007695] uppercase mb-5">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-normal tracking-tight lg:tracking-[-3px] text-[#111019] leading-[1.05] mb-6">
            Let's talk about your operations.
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] leading-[30px] text-[#3B394E] font-normal max-w-[720px] mx-auto">
            Ready to transform the way your teams plan, execute, and report? Tell us
            a little about your organization — we'll respond within one business day.
          </p>
        </div>
      </section>

      {/* ── Contact info + form ── */}
      <section className="pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Contact channels */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-[-1.5px] text-[#111019] leading-[1.15] mb-5">
                  Contact Information
                </h2>
                <p className="text-[15px] leading-[26px] text-[#3B394E] mb-10">
                  We're here to help. Reach out to our team and we'll respond as soon
                  as possible.
                </p>

                <div className="grid grid-cols-2 gap-3 sm:gap-5">
                  {CONTACT_CHANNELS.map((channel) => (
                    <div
                      key={channel.label}
                      className="bg-white rounded-[18px] p-4 sm:p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-8px_rgba(16,24,40,0.08)]"
                    >
                      <div className="w-10 h-10 rounded-[12px] bg-[#E6F4F8] flex items-center justify-center mb-4">
                        <channel.icon className="w-5 h-5 text-[#007695]" />
                      </div>
                      <p className="text-[12px] font-semibold tracking-[0.1em] text-[#6B6A7C] uppercase mb-1.5">
                        {channel.label}
                      </p>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          className="block text-[14px] sm:text-[15px] font-semibold text-[#111019] hover:text-[#007695] transition-colors break-all"
                        >
                          {channel.value}
                        </a>
                      ) : (
                        <p className="text-[14px] sm:text-[15px] font-semibold text-[#111019]">
                          {channel.value}
                        </p>
                      )}
                      <p className="text-[12.5px] text-[#6B6A7C] mt-1">
                        {channel.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form card */}
              <div className="lg:col-span-3">
                <div className="relative">
                  {/* Even all-sides teal glow behind the form card */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-10 rounded-[60px] blur-3xl"
                    style={{
                      background:
                        'radial-gradient(circle at center, rgba(34,211,238,0.2) 0%, rgba(103,232,249,0.12) 40%, rgba(34,211,238,0.05) 65%, rgba(34,211,238,0) 80%)',
                    }}
                  />
                  <div className="relative bg-white rounded-[24px] px-6 py-8 sm:px-10 sm:py-12 shadow-[0_0_20px_rgba(34,211,238,0.18),0_0_40px_rgba(34,211,238,0.12),0_0_70px_rgba(103,232,249,0.1)]">
                    <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-normal tracking-[-1px] text-[#111019] leading-[1.15] mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-[14px] text-[#6B6A7C] mb-8">
                      Fields marked * are required
                    </p>

                    {submitted && (
                      <div className="mb-6 p-4 bg-[#E6F7EE] border border-[#B7E8C9] rounded-[12px] flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#36B37E] rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-[#224229] font-medium text-[14px]">
                          Thank you! We'll get back to you soon.
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-[13px] font-medium text-[#111019] mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-[13px] font-medium text-[#111019] mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-[13px] font-medium text-[#111019] mb-2"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="Your Company"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-[13px] font-medium text-[#111019] mb-2"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="interest"
                          className="block text-[13px] font-medium text-[#111019] mb-2"
                        >
                          I'm interested in *
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          required
                          value={formData.interest}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="theta-pmo">AI PMO Assistance</option>
                          <option value="theta-hse">AI Safety Guardian</option>
                          <option value="theta-ops">AI Operations & Maintenance</option>
                          <option value="theta-procurement">AI Procurement & Warranty</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-[13px] font-medium text-[#111019] mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`${inputClass} resize-none`}
                          placeholder="Tell us about your needs and how we can help..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center rounded-full bg-[#007695] px-8 py-4 text-[15.6px] font-medium text-white shadow-[0_0_0_4.45px_#CCE4EC] hover:bg-[#005d77] transition-colors tracking-[0.08px]"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>

      <WorksWhereverBanner />
    </div>
  );
}
