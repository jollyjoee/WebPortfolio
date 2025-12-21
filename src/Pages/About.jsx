import { useEffect, useRef, useState } from "react";
import Mugshot from '../assets/mugshot.png'

function About() {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        },
        { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);
    
    const skills = [
        { name: "React", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "API Development", level: 70 },
        { name: "API Integration", level: 80 },
        { name: "Python", level: 60 },
        { name: "AutoHotKey", level: 95 },
        { name: "Lua", level: 75 },
        { name: "Cloudflare Tools", level: 70 },
    ];

    const sorted = [...skills].sort((a, b) =>  b.level - a.level)

    const info = {
        name: "Julijo Pisk Jr.",
        title: "Full Stack Developer || Game Experience Developer || Automation Beginner",
        location: "Lumil, Silang, Cavite, Philippines",
        bio: "Passionate developer specializing in building modern web applications, game scripts, and automation tools. I create efficient, user-friendly solutions with clean code and great attention to detail.",
        email: "piskjulijo@gmail.com",
        github: "https://github.com/jollyjoee",
    };

    return (
        <div ref={ref} className={`min-w-full min-h-120 flex flex-col gap-8 p-5 transition duration-750
            ${visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"}`}>
            {/* Header */}
            <div className='text-5xl font-extrabold text-center tracking-wider font2'>ABOUT ME</div>
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Profile & Bio */}
                <div className="flex flex-col gap-6">
                    {/* Profile Card */}
                    <div className="bg-neutral-800/50 rounded-2xl p-6 flex flex-col items-center gap-6 grow">
                        <div className="w-64 h-64 rounded-full overflow-hidden ring-4 ring-purple-500/30">
                            <img 
                                src={Mugshot} 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="grow flex flex-col gap-1 text-center justify-center">
                            <h2 className="text-3xl font-bold">{info.name}</h2>
                            <p className="text-xl text-purple-400">{info.title}</p>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="bg-neutral-800/50 rounded-2xl p-6">
                        <h3 className="text-2xl font-bold mb-4">Bio</h3>
                        <p className="text-gray-300 leading-relaxed">{info.bio}</p>
                        
                        {/* Contact Links */}
                        <div className="flex gap-4 mt-6">
                            <a 
                                href={`mailto:${info.email}`}
                                onClick={(e) => {
                                    setTimeout(() => {
                                    if (document.activeElement === e.target) {
                                        navigator.clipboard.writeText(info.email);
                                        alert('Email copied to clipboard!');
                                    }
                                    }, 100);
                                }}
                                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                            >
                                Email Me
                            </a>
                            <a 
                                href={info.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="bg-neutral-800/50 rounded-2xl p-6 flex flex-col">
                    <h3 className="text-2xl font-bold mb-6">Skills</h3>
                    <div className="grow flex flex-col justify-between">
                        {sorted.map((skill) => (
                            <div key={skill.name} className="mb-4">
                                <div className="flex justify-between mb-4">
                                    <span className="font-semibold">{skill.name}</span>
                                    <span className="text-gray-400">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-neutral-700 rounded-full h-2.5">
                                    <div 
                                        className="bg-linear-to-r from-purple-500 to-pink-500 h-2.5 rounded-full transition-all duration-1000"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>      
            </div>
            {/* Map */}
            <div className="bg-neutral-800/50 rounded-2xl p-6 min-h-fit w-full">
                <h3 className="text-2xl font-bold mb-2">Location</h3>
                <p className="text-sm text-gray-400 mb-2">📍 {info.location}</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9200.138580174866!2d121.00639212433775!3d14.184129184695344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd7bea47823f65%3A0x7de76e34763f2e1b!2sLumil%2C%20Silang%2C%20Cavite!5e0!3m2!1sen!2sph!4v1766340359082!5m2!1sen!2sph"
                    loading="lazy"
                    className='w-full min-h-75 rounded-xl'
                />
            </div>
        </div>
    )
}

export default About;