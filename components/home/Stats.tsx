"use client";

import CountUp from "react-countup";
import { Award, Smartphone, CheckCircle, Cpu } from "lucide-react";

const stats = [
  {
    num: 2,
    suffix: "+",
    label: "Years Experience",
    subtext: "Production mobile & ai",
    icon: <Award className="w-5 h-5 text-sky-400" />,
  },
  {
    num: 7,
    suffix: "+",
    label: "Shipped Projects",
    subtext: "Live citizen & commercial apps",
    icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
  },
  {
    num: 100,
    suffix: "%",
    label: "Store Deployment",
    subtext: "App Store & Google Play verified",
    icon: <CheckCircle className="w-5 h-5 text-indigo-400" />,
  },
  {
    num: 12,
    suffix: "+",
    label: "Tech Ecosystem",
    subtext: "Flutter, React Native, Django, AI",
    icon: <Cpu className="w-5 h-5 text-purple-400" />,
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {stats.map((item, index) => (
        <div
          key={index}
          className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900/80 transition-all flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              {item.label}
            </span>
            <div className="p-2 rounded-xl bg-zinc-800/60 border border-zinc-700/50">
              {item.icon}
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-baseline tracking-tight">
              <CountUp
                delay={0.2}
                duration={2.5}
                end={item.num}
              />
              <span className="text-sky-400 ml-0.5">{item.suffix}</span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{item.subtext}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;