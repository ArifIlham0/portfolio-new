"use client";

import { Data } from "@/constants/data";
import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [project, setProject] = useState(Data.projects[0]);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        Projects
      </div>
    </motion.div>
  )
}

export default Projects