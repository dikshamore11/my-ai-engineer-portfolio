import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Send } from 'lucide-react';
import { profile } from '../data/portfolio';
import Reveal from './Reveal';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, copy: true },
  { label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin, Icon: LinkedinIcon, external: true },
  { label: 'GitHub', value: profile.githubHandle, href: profile.github, Icon: GithubIcon, external: true },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Field({ id, label, error, as = 'input', ...props }) {
  const Comp = as;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-plum">{label}</label>
      <Comp
        id={id}
        name={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-2xl border bg-ivory px-4 py-3 text-[15px] text-plum placeholder:text-[#A79DB3] transition-all focus:bg-white focus:outline-none focus:ring-4 focus:ring-lavender ${
          error ? 'border-rose-300' : 'border-line hover:border-lilac/70 focus:border-lilac'
        } ${as === 'textarea' ? 'min-h-[140px] resize-y' : ''}`}
        {...props}
      />
      {error && <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-rose-600">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const update = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Please enter your name.';
    if (!emailPattern.test(form.email.trim())) er.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 10) er.message = 'Please write a message of at least 10 characters.';
    return er;
  };

  // No backend: the form opens the visitor's email client with everything pre-filled.
  const submit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) {
      document.getElementById(Object.keys(er)[0])?.focus();
      return;
    }
    const subject = form.subject.trim() || `Opportunity for ${profile.name}`;
    const body = `${form.message.trim()}\n\n${form.name.trim()}\n${form.email.trim()}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: the mailto link still works */
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <div className="bg-pastel relative overflow-hidden rounded-[2.5rem] border border-white p-6 shadow-lift sm:p-10 lg:p-14">
          {/* floating decorative elements */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <motion.div
              className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/50 blur-3xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-lilac/30 blur-3xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="absolute right-[8%] top-[10%] hidden h-5 w-5 rounded-full border-2 border-white md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <Reveal>
              <p className="mb-4 flex items-center gap-3">
                <span className="flex h-7 items-center rounded-full bg-white/80 px-3 text-[11px] font-semibold tracking-wider text-iris-deep">07</span>
                <span className="eyebrow !text-iris-deep">Contact</span>
              </p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
                Let&apos;s build something <span className="text-gradient">together</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-plum-soft sm:text-[17px]">
                I&apos;m actively looking for AI Engineer, Software Developer, Full-Stack Developer, Java Developer and
                Graduate Engineer Trainee opportunities. If you&apos;re hiring or want to talk about a project, my inbox is open.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {channels.map(({ label, value, href, Icon, external, copy }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-4 rounded-2xl border border-white bg-white/75 p-4 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-pill"
                  >
                    <span className="icon-tile h-11 w-11 shrink-0">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="min-w-0 flex-1">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-plum-soft">{label}</span>
                      <span className="block truncate text-[15px] font-medium text-plum group-hover:text-iris-deep">{value}</span>
                    </a>
                    {copy ? (
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-plum-soft transition-colors hover:bg-lavender/60 hover:text-iris-deep"
                        aria-label={copied ? 'Email copied' : 'Copy email address'}
                      >
                        {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                      </button>
                    ) : (
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-plum-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-iris-deep"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
                <p className="flex items-center gap-2 px-1 pt-1 text-sm text-plum-soft">
                  <MapPin className="h-4 w-4 text-iris" aria-hidden="true" /> Based in {profile.location}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={submit} noValidate className="rounded-3xl bg-white p-6 shadow-lift sm:p-8" aria-label="Contact form">
                <h3 className="text-lg font-semibold">Send a message</h3>
                <p className="mt-1 text-sm text-plum-soft">I usually reply within a day or two.</p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Name" placeholder="Your name" autoComplete="name" value={form.name} onChange={update} error={errors.name} />
                  <Field id="email" label="Email" type="email" placeholder="you@company.com" autoComplete="email" value={form.email} onChange={update} error={errors.email} />
                </div>
                <div className="mt-5">
                  <Field id="subject" label="Subject (optional)" placeholder="AI Engineer role at …" value={form.subject} onChange={update} />
                </div>
                <div className="mt-5">
                  <Field id="message" as="textarea" label="Message" placeholder="Tell me about the role or project…" value={form.message} onChange={update} error={errors.message} />
                </div>

                <button type="submit" className="btn-primary group mt-6 w-full !py-3.5">
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
                <p className="mt-3 text-center text-xs text-plum-soft">Opens your email app with the message ready to send.</p>

                <AnimatePresence>
                  {sent && (
                    <motion.p
                      role="status"
                      className="mt-5 flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800 ring-1 ring-emerald-200"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                      Your email app should open now. If it doesn&apos;t, write to {profile.email}.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
