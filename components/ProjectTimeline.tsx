import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function ProjectTimeline() {
  const projects = [
    {
      year: "2025",
      title: "FPT Programming Practice Platform",
      description:
        "A web-based platform built for FPT Da Nang students to practice coding and participate in programming competitions. Features include an integrated code editor, class management, and tools for instructors to create and monitor progress tests throughout the course.",
      tags: ["ASP.NET", "Next.js", "PostgreSQL"],
      role: "Fullstack Developer",
      github: "https://dev.azure.com/hoangvhde170274/campscholar",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      year: "2024",
      title: "Rep Count",
      description:
        "An Android workout diary app that helps users track their progress by logging reps and sets over time. Visualizes improvements and performance trends to keep users motivated on their fitness journey.",
      tags: ["Java", "Android", "SQLite"],
      role: "Mobile Developer",
      github: "https://github.com/tainguyen222/Project_PRM_RepCount_Android",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      year: "2024",
      title: "Tech E-Commerce",
      description:
        "An online hardware store with full PC-building functionality, allowing users to customize and purchase PC components. Integrated with VNPAY for secure transactions.",
      tags: ["Java", "Spring Boot", "MSSQL", "Thymeleaf"],
      role: "Fullstack Developer",
      github: "https://github.com/doitdayone/projectojt",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      year: "2023",
      title: "Social Scholar Platform",
      description:
        "A learning platform designed to boost research motivation and collaboration by allowing users to form topic-based groups, share study materials, and exchange knowledge. Active users are rewarded with coins and collectible items that can be converted to real money via PayPal.",
      tags: ["Java", "Spring Boot", "MySQL", "React"],
      role: "Backend Developer",
      github: "https://github.com/hoangvh238/social-scholar--backend",
      image: "/placeholder.svg?height=300&width=500",
    },
  ];

  return (
    <section className="min-w-full h-screen flex items-center snap-start p-4 md:p-8 lg:p-16 bg-gradient-to-br from-[#f1f5e8] to-[#e8f0df]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#86a877]/20 text-[#5c7850] text-sm font-medium mb-4">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5c7850]">
            Project <span className="text-[#86a877]">Timeline</span>
          </h2>
          <p className="text-[#5c7850]/80 max-w-2xl mx-auto mt-4">
            A selection of my most recent and impactful projects across various
            industries and technologies.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#86a877]/50 transform md:translate-x-[-0.5px]"></div>

          <div className="space-y-12 relative mt-12 md:mt-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`md:flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Year marker */}
                <div className="absolute left-[-10px] md:left-1/2 md:transform md:translate-x-[-10px] bg-[#5c7850] text-white rounded-full w-5 h-5 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Year label - visible only on mobile */}
                <div className="md:hidden pl-4 pb-2 font-bold text-[#5c7850]">
                  {project.year}
                </div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                  } pl-4 md:pl-0`}
                >
                  {/* Year label - visible only on desktop */}
                  <div className="hidden md:block font-bold text-[#5c7850] mb-2">
                    {project.year}
                  </div>
                  <h3 className="text-xl font-bold text-[#5c7850]">
                    {project.title}
                  </h3>
                  <p className="text-[#5c7850]/80 my-2">
                    {project.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 my-3 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-[#86a877]/20 text-[#5c7850] rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-[#5c7850] hover:text-[#5c7850] hover:bg-[#86a877]/20"
                      >
                        <Github className="h-4 w-4 mr-1" /> Code
                      </Button>
                    </a>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-[#5c7850] hover:text-[#5c7850] hover:bg-[#86a877]/20"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Demo
                    </Button>
                  </div>
                </div>

                {/* Image */}
                {/* <div className="md:w-1/2 mt-4 md:mt-0 pl-4 md:pl-0 md:pr-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className={`rounded-lg shadow-md w-full max-w-xs mx-auto ${
                      index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                    }`}
                    unoptimized
                  />
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
