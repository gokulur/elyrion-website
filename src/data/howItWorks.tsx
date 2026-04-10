import React from "react";
import { Search, Layers, Rocket } from "lucide-react";

export const steps = [
  {
    number: "01",
    icon: <Search className="h-6 w-6" />,
    title: "Understanding Requirements",
    description: "We analyze your needs, systems, and goals to define a clear technical direction."
  },
  {
    number: "02",
    icon: <Layers className="h-6 w-6" />,
    title: "System Design",
    description: "We design scalable architecture, focusing on performance, security, and maintainability."
  },
  {
    number: "03",
    icon: <Rocket className="h-6 w-6" />,
    title: "Build & Deploy",
    description: "We develop, test, and deploy robust systems ready for real-world scale."
  }
];