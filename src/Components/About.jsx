import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, MapPin, Copy, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

function SkillBar({ skill, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="mb-5"
    >
      <div className="flex justify-between mb-2">
        <span className="text-[--text-primary] font-medium">{skill}</span>
        <span className="text-[--accent] font-mono text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-[--bg-tertiary] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-emerald-500 to-emerald-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

function About() {
  const skillsUnsorted = [
    { name: 'React', level: 75 },
    { name: 'Next.js', level: 75 },
    { name: 'JavaScript', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'API Development', level: 70 },
    { name: 'API Integration', level: 80 },
    { name: 'Python', level: 60 },
    { name: 'AutoHotKey', level: 95 },
    { name: 'Lua', level: 75 },
    { name: 'Cloudflare', level: 65 },
  ];

  const skills = [...skillsUnsorted].sort((a, b) => b.level - a.level);

  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyToClipboard = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block text-sm font-medium text-[--accent] uppercase tracking-widest mb-4"
          >
            Get to Know Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Info */}
          <div className="space-y-6">
            <ScrollReveal variant="slideLeft" delay={0.1}>
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-[--text-primary] mb-4">
                  Julijo Pisk Jr.
                </h3>
                <div className="space-y-2 mb-6">
                  <p className="text-[--accent] font-medium">Full Stack Developer</p>
                  <p className="text-[--accent-light] font-medium">Game Experience Developer</p>
                  <p className="text-[--text-secondary] font-medium">Automation Enthusiast</p>
                </div>

                <p className="text-[--text-secondary] leading-relaxed mb-8">
                  Passionate developer specializing in building modern web applications, game
                  scripts, and automation tools. Focused on creating efficient, user-friendly
                  solutions with clean code and great attention to detail.
                </p>

                {/* Contact Buttons */}
                <div className="space-y-3">
                  <motion.button
                    onClick={() => copyToClipboard('piskjulijo@gmail.com', setEmailCopied)}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl btn-primary font-semibold"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-5 h-5" />
                        Email Copied!
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        piskjulijo@gmail.com
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    onClick={() => copyToClipboard('+63 (992) 761-4953', setPhoneCopied)}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl btn-outline font-semibold"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {phoneCopied ? (
                      <>
                        <Check className="w-5 h-5" />
                        Phone Copied!
                      </>
                    ) : (
                      <>
                        <Phone className="w-5 h-5" />
                        +63 (992) 761-4953
                      </>
                    )}
                  </motion.button>

                  <motion.a
                    href="https://github.com/jollyjoee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border border-[--border-default] text-[--text-primary] font-semibold hover:border-[--accent] hover:bg-[--accent-subtle] transition-all"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Github className="w-5 h-5" />
                    GitHub Profile
                  </motion.a>
                </div>
              </div>
            </ScrollReveal>

            {/* Location Card */}
            <ScrollReveal variant="slideLeft" delay={0.2}>
              <div className="card p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[--accent-subtle] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[--accent]" />
                </div>
                <div>
                  <p className="text-[--text-muted] text-sm mb-1">Location</p>
                  <p className="text-[--text-primary] font-medium">
                    Lumil, Silang, Cavite, Philippines
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Skills */}
          <ScrollReveal variant="slideRight" delay={0.2}>
            <div className="card p-8 h-full">
              <h3 className="text-xl font-bold text-[--text-primary] mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-[--accent] rounded-full" />
                Technical Skills
              </h3>
              <div>
                {skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill.name} level={skill.level} index={index} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default About;