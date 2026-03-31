import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Efficiency Managed IT Services",
    description: "Our solutions ensure availability, minimal downtime.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: "02",
    title: "Fortifying Cybersecurity",
    description: "Secure & scalable systems for modern businesses.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    id: "03",
    title: "Building Resilient Networks",
    description: "Robust infrastructure for digital transformation.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48",
  },
  {
    id: "04",
    title: "Global Cloud Infrastructure",
    description: "Next-gen cloud solutions for enterprises.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
  },
];

// clones add
const extended = [
  projects[projects.length - 1], // last clone
  ...projects,
  projects[0], // first clone
];

const CaseStudies = () => {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIndex((prev) => prev - 1);
  };

  // 🔥 Magic: seamless reset
  useEffect(() => {
    if (index === extended.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 600);
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(extended.length - 2);
      }, 600);
    }
  }, [index]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-blue-600 text-sm font-bold uppercase">
              Case Studies
            </p>
            <h2 className="text-4xl font-bold">
              Our Success Stories
            </h2>
          </div>

          <div className="flex gap-3">
            <button onClick={prev} className="p-3 border rounded-full">
              <ArrowLeft />
            </button>
            <button onClick={next} className="p-3 border rounded-full">
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={transition ? { duration: 0.6 } : { duration: 0 }}
            onAnimationComplete={() => setTransition(true)}
          >
            {extended.map((item, i) => (
              <div key={i} className="min-w-full">
                <div className="p-6">
                  <img
                    src={`${item.image}?auto=format&fit=crop&w=800`}
                    className="w-full h-72 object-cover rounded-xl"
                  />
                  <h3 className="text-xl font-bold mt-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
