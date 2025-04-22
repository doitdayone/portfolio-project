export default function SkillsSection() {
  const skills = [
    { name: "Frontend Development", level: 100 },
    { name: "Backend Development", level: 100 },
    { name: "Mobile Development", level: 100 },
    { name: "Teamwork", level: 100 },
    { name: "Project Management", level: 100 },
  ];

  const tools = [
    "ASP.NET",
    "C#",
    "Unity",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Java",
    "Springboot",
    "Thymelyf",
    "Android",

    "Java",
    "PostgreSQL",
    "MySQL",
    "MSSQL",
    "Git",
    "Photoshop",
  ];

  return (
    <section className="min-w-full h-screen flex items-center snap-start p-4 md:p-8 lg:p-16 bg-gradient-to-br from-[#e8f0df] to-[#f1f5e8]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#86a877]/20 text-[#5c7850] text-sm font-medium mb-4">
            My Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5c7850]">
            Technical <span className="text-[#86a877]">Expertise</span>
          </h2>
          <p className="text-[#5c7850]/80 max-w-2xl mx-auto mt-4">
            I&apos;ve developed a diverse set of skills across design and
            development, allowing me to create comprehensive solutions from
            concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#5c7850]">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#5c7850]">{skill.name}</span>
                    <span className="text-[#86a877]"></span>
                  </div>
                  <div className="w-full h-2 bg-[#e8f0df] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#86a877] rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#5c7850]">
              Tools &amp; Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#86a877]/20 text-[#5c7850] rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-[#5c7850] mb-4">
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-[#86a877] pl-4 pb-4">
                  <h4 className="text-[#5c7850] font-medium">
                    Bachelor&apos;s in Software Engineering
                  </h4>
                  <p className="text-[#86a877]">
                    FPT Da Nang University &bull; 2021–2025
                  </p>
                </div>

                <div className="border-l-2 border-[#86a877] pl-4 pb-4">
                  <h4 className="text-[#5c7850] font-medium">
                    On The Job Training Certificate
                  </h4>
                  <p className="text-[#86a877]">
                    FPT Software, Da Nang &bull; Jan 2024 – Apr 2024
                  </p>
                </div>
                <div className="border-l-2 border-[#86a877] pl-4 pb-4">
                  <h4 className="text-[#5c7850] font-medium">
                    Academic Preparatory English Certificate
                  </h4>
                  <p className="text-[#86a877]">
                    FPT University, Da Nang Campus &bull; Summit 2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
