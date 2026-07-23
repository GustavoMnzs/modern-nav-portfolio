import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 90, prefix: "~", suffix: "%", label: "do planejamento operacional de conteúdo automatizado", compact: false },
  { value: 10, prefix: "", suffix: "→1", label: "dias no processo de contratos", compact: false },
  { value: 6, prefix: "", suffix: "→1", label: "meses no ciclo estimado de desenvolvimento", compact: false },
  { value: 180, prefix: "R$ ", suffix: " mil+", label: "em faturamento apoiado pela infraestrutura", compact: true },
];

function AnimatedCounter({
  value,
  prefix,
  suffix,
  inView,
  compact,
}: {
  value: number;
  prefix: string;
  suffix: string;
  inView: boolean;
  compact: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = duration / value;
    const timer = window.setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) window.clearInterval(timer);
    }, step);
    return () => window.clearInterval(timer);
  }, [inView, value]);

  if (compact) {
    return (
      <span className="inline-flex items-baseline justify-center gap-1 font-bold text-primary mono tabular-nums leading-none whitespace-nowrap">
        <span className="text-base min-[420px]:text-lg sm:text-2xl md:text-3xl">{prefix.trim()}</span>
        <span className="text-2xl min-[420px]:text-3xl sm:text-4xl md:text-5xl">{count}</span>
        <span className="text-sm min-[420px]:text-base sm:text-lg md:text-2xl">{suffix.trim()}</span>
      </span>
    );
  }

  return (
    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mono tabular-nums whitespace-nowrap">
      {prefix}{count}{suffix}
    </span>
  );
}

const Impact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative scroll-fade-section" ref={ref}>
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mono">
              Impacto
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              Resultados <span className="text-primary">reais</span>
            </h2>
          </div>

          <div className="rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] p-8 md:p-12 overflow-hidden relative">
            {/* Glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-primary/8 rounded-full blur-[100px]" />

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    inView={inView}
                    compact={stat.compact}
                  />
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
