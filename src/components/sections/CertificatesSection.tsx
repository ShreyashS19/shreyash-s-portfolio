import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, Medal, BadgeCheck, FileBadge, Code } from 'lucide-react';

const certificates = [
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'Nov 2025',
    description: 'Developed strong full-stack development skills through practical projects using modern frameworks and tools.',
    icon: FileBadge,
    color: 'text-[#61DAFB]',
    bgColor: 'bg-[#61DAFB]/10'
  },
  {
    title: 'Internship 6.0 (B2): Banking Activity Simulation Platform',
    issuer: 'Infosys Springboard',
    date: 'Sep 2025 - Nov 2025',
    description: 'Completed hands-on mandatory assignment focusing on a banking activity simulation platform.',
    icon: BadgeCheck,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    title: '1M1B Green Internship',
    issuer: '1M1B,  AICTE',
    date: 'Jul 2025 - Aug 2025',
    description: 'Completed 60 hours comprising Sustainable Mindset, Tableau training, and a Live Project.',
    icon: Award,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },
  {
    title: 'Google Cloud Career Launchpad: Cloud Engineer',
    issuer: 'Google Cloud',
    date: 'Nov 2024',
    description: 'Successfully completed all courses and labs in the Cloud Engineer track.',
    icon: Medal,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10'
  },
  {
    title: 'WCE Hackathon 2024',
    issuer: 'Walchand College of Engineering, Sangli',
    date: '2024',
    description: 'Secured Runner-up position in the Expert track among highly competitive teams.',
    icon: Trophy,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  },
  {
    title: 'Python Foundation Certification',
    issuer: 'Infosys Springboard',
    date: 'Nov 2023',
    description: 'Certificate of Achievement for successfully completing the Python Foundation framework and methodologies.',
    icon: Code,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10'
  }
];

export const CertificatesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-4 mb-6">
             <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my continuous learning and competitive achievements in the tech space.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:bg-white/[0.04] transition-all duration-300 border border-white/5 hover:border-white/10 group flex flex-col h-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${cert.bgColor} group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${cert.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground leading-tight line-clamp-3">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground/80 mb-2 font-mono">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/5">
                  <span className="text-xs font-mono text-muted-foreground/80 px-2 py-1 rounded-md bg-white/5">
                    {cert.date}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
