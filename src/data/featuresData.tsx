import React from 'react';
import { Cpu, ShieldCheck, Smartphone, Server, Gauge, Layers } from 'lucide-react';

export const features = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Web Systems Engineering",
    description: "Design and development of scalable, high-performance web systems built for reliability."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Cyber Security",
    description: "Penetration testing, VAPT, and security-focused architecture for modern systems."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Engineering",
    description: "Production-grade mobile applications engineered for performance and stability."
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Infrastructure",
    description: "Scalable system architecture designed to support growth and complex workloads."
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "Performance Engineering",
    description: "Optimization of systems for speed, efficiency, and consistent performance."
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "System Architecture",
    description: "Structured, maintainable, and secure system design across all layers."
  }
];