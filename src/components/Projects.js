import React from "react";
import { ExternalLink, Github, Code, Eye, ArrowUpRight } from "lucide-react";
import ProjectsData from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="projects"
          className="flex flex-col items-center text-center mb-12"
        >
          <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-600 rounded-full mb-3">
            <Code size={14} className="inline mr-1" /> Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600 mb-8">
            Explore my latest work and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ProjectsData.reverse().map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Card Content - Always visible */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category badge */}
                {project.category && (
                  <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-gray-900 bg-opacity-70 text-white rounded">
                    {project.category}
                  </span>
                )}
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 opacity-50 transition-opacity duration-500"></div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  {project.name}
                  <ArrowUpRight size={16} className="ml-1 text-blue-500" />
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project?.technologies?.map((tech, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <div className="flex gap-2">
                    {project?.icons?.slice(0, 3).map((Icon, index) => (
                      <span key={index} className="text-gray-500">
                        <Icon className="w-5 h-5" />
                      </span>
                    ))}
                    {project?.icons?.length > 3 && (
                      <span className="text-xs font-medium text-gray-500">
                        +{project.icons.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View source code on GitHub"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live demo"
                      >
                        <Eye size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Overlay - Separate from DOM flow, fixed position relative to card */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-blue-900 to-purple-900 flex flex-col justify-center items-center p-6 text-white opacity-0 scale-105 group-hover:opacity-95 group-hover:scale-100 transition-all duration-300 ease-in-out pointer-events-none"
              >
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <p className="text-center mb-6">{project.description}</p>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      className="flex items-center gap-2 px-4 py-2 bg-white text-blue-900 rounded-full font-medium hover:bg-opacity-90 transition-colors pointer-events-auto"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} /> Source
                    </a>
                  )}
                  {project.demo && (
                    <a
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors pointer-events-auto"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {ProjectsData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;