import { motion } from "framer-motion";

const Section = ({ title, subtitle, children }) => (
  <section className="px-4 sm:px-6 lg:px-8 py-12">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {title && <h2 className="text-3xl font-bold mb-1">{title}</h2>}
      {subtitle && <p className="text-neutral-400 mb-8">{subtitle}</p>}
      <div className="grid gap-6">{children}</div>
    </motion.div>
  </section>
);
export default Section;