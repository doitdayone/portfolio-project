import Image from "next/image";
export default function AboutSection() {
  return (
    <section className="min-w-full h-screen flex items-center snap-start p-4 md:p-8 lg:p-16 bg-gradient-to-br from-[#f1f5e8] to-[#e8f0df]">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="hidden md:block relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#86a877]/20 rounded-lg transform -rotate-6"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#5c7850]/20 rounded-lg transform rotate-3"></div>
          {/* Dùng Image nếu có Next.js, hoặc giữ nguyên img nếu không */}
          <Image
            src="images/body.png"
            alt="About me"
            width={400}
            height={400}
            className="relative z-10 rounded-lg shadow-lg w-64 h-64 object-cover object-top mx-auto"
          />
        </div>
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-[#86a877]/20 text-[#5c7850] text-sm font-medium">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5c7850]">
            Passionate about creating{" "}
            <span className="text-[#86a877]">meaningful</span> experiences
          </h2>
          <p className="text-[#5c7850]/80">
            I&apos;m a software engineer with over 3 years of coding. My
            approach combines aesthetic sensibility with technical expertise to
            build solutions that are both beautiful and functional.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <h3 className="text-xl font-bold text-[#5c7850]">3+</h3>
              <p className="text-[#86a877]">Years Coding</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#5c7850]">5+</h3>
              <p className="text-[#86a877]">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#5c7850]">5+</h3>
              <p className="text-[#86a877]">Team Works</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#5c7850]">3.4+</h3>
              <p className="text-[#86a877]">GPA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
