import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-8 px-4 mt-12 mb-4 relative z-10"
    >
      {/* Subtle top border/glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div className="text-muted-foreground text-sm md:text-base flex flex-wrap justify-center gap-1.5 items-center cursor-default">
          <span className="hover:text-foreground transition-colors duration-300">
            © 2026 Shreyash Shinde.
          </span>
          <span className="text-muted-foreground/80 hover:text-foreground transition-colors duration-300">
            Crafted with lots of ☕
          </span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
