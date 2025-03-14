
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkCard, { Work } from "@/components/WorkCard";
import workData from "@/data/work.json";

const WorkPage = () => {
  // Split experiences into professional and hobbyist
  const professionalExperiences = workData.filter(
    (exp): exp is Work =>
      exp.workType === "asEmployee" || exp.workType === "asFreelancer"
  );

  const hobbyistExperiences = workData.filter(
    (exp): exp is Work => exp.workType === "asHobbyist"
  );

  const techs = Array.from(new Set(workData.flatMap((exp) => exp.techs || [])));

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              What I've worked on
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bits of this and bits of that
            </p>
          </div>

          {/* Professional Experience Section */}
          <div className="space-y-8 mb-20">
            <h2 className="text-2xl font-medium mb-6 animate-slide-up">
              Professional Experience
            </h2>

            {professionalExperiences.map((experience, index) => (
              <WorkCard
                key={`${experience.title}-${index}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>

          {/* Hobbyist Projects Section */}
          {hobbyistExperiences.length > 0 && (
            <div className="space-y-8 mb-20">
              <h2 className="text-2xl font-medium mb-6 animate-slide-up">
                Side Projects & Experiments
              </h2>

              {hobbyistExperiences.map((experience, index) => (
                <WorkCard
                  key={`${experience.title}-${index}`}
                  experience={experience}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* Key Technologies Section */}
          <div className="mt-20">
            <h2 className="text-2xl font-medium mb-8 animate-slide-up">
              Technologies I Worked With
            </h2>

            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {techs.map((tech, index) => (
                <div
                  key={tech}
                  className="bg-white border border-border rounded-lg p-4 text-center hover:border-primary/50 hover:shadow-sm transition-all duration-300"
                  style={{ animationDelay: `${0.1 * (index % 4)}s` }}
                >
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WorkPage;
