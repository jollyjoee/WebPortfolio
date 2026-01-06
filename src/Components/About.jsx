import { useState, useEffect } from 'react';

function SkillBar({ skill, level, index }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), index * 100);
    return () => clearTimeout(timer);
  }, [level, index]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-white font-semibold">{skill}</span>
        <span className="text-cyan-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}

function About() {
  const skillsUnsorted = [
    { name: "React", level: 75 },
    { name: "Next.js", level: 75 },
    { name: "JavaScript", level: 75 },
    { name: "Java", level: 70 },
    { name: "Tailwind CSS", level: 90 },
    { name: "API Development", level: 70 },
    { name: "API Integration", level: 80 },
    { name: "Python", level: 60 },
    { name: "AutoHotKey", level: 95 },
    { name: "Lua", level: 75 },
    { name: "Cloudflare", level: 65 },
  ];

  const skills = [...skillsUnsorted].sort((a, b) => b.level - a.level);

  const copyToClipboard = (text, callback) => {
    navigator.clipboard.writeText(text);
    callback(true);
    setTimeout(() => callback(false), 2000);
  };

  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-4">Julijo Pisk Jr.</h3>
              <div className="space-y-2 mb-6">
                <p className="text-cyan-400 text-lg">Full Stack Developer</p>
                <p className="text-blue-400 text-lg">Game Experience Developer</p>
                <p className="text-purple-400 text-lg">Automation Enthusiast</p>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Passionate developer specializing in building modern web applications, game scripts, and automation tools.
                Focused on creating efficient, user-friendly solutions with clean code and great attention to detail.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => copyToClipboard('piskjulijo@gmail.com', setEmailCopied)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                  {emailCopied ? '✓ Email Copied!' : '📧 piskjulijo@gmail.com'}
                </button>

                <button
                  onClick={() => copyToClipboard('+63 (992) 761-4953', setPhoneCopied)}
                  className="w-full px-6 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors"
                >
                  {phoneCopied ? '✓ Phone Copied!' : '📱 +63 (992) 761-4953'}
                </button>

                <a
                  href="https://github.com/jollyjoee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 border-2 border-gray-600 rounded-lg font-semibold text-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"
                >
                  🔗 GitHub Profile
                </a>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <p className="text-gray-400 text-sm mb-2">📍 Location</p>
              <p className="text-white">Lumil, Silang, Cavite, Philippines</p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
            <div>
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill.name} level={skill.level} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;