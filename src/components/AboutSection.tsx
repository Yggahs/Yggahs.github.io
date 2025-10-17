import { Briefcase, Joystick, Laptop } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My name is Alessio</h3>
            <p className="text-muted-foreground">
              I'm a {new Date().getFullYear() - 1996} year old post-graduate at
              Kingston University from Italy who dreams of becoming a game
              developer. I've always been fascinated with videogames, so much so
              that I somewhat consider them a contemporary form of art; I do my
              best to have looks, narrative and gameplay blend in my work in
              such a way that it is at the very least pleasant to play. I
              usually use either Unity or Unreal to work on my projects, and
              thus I know how to program in C# and C++, although I'm always open
              to learning new programming languages and tools. For this reason,
              I've accepted non-gaming related jobs, and as a resul not only I
              learned some Java, but I also got into web development; This site,
              for example, is made entirely by me. When making games, I try and
              make most of the assets myself, and thus usually use Photoshop for
              what regards 2d and either Blender or Maya for 3d, although as of
              late I've had the opportunity to use Cinema4d as well. Other than
              a bachelor's degree in games technology, my academic background
              includes a diploma in an IT oriented course, from which I learned
              the basics of programming; I got use out of this experience for a
              short time, all the way back in 2016 in Rome.
            </p>
            <p className="text-muted-foreground">
              As soon as I came back from the UK, I started working for a
              software development company in Rome; a friend referred me in a
              web development company during this time and, looking to broaden
              my horizons in the IT field, I started working for this company
              soon after. When working in groups I tend to take on the role of
              the leader, or at least monitor my teammates in such a way that
              not only makes for an interesting final result but also a good
              time overall. I find investment in a project very important to its
              overall success, therefore I always try to work on ideas that
              resonate with me.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href={"/projects/CV_AlessioCalore17072025-EN.pdf"}
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid frid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              {" "}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Joystick className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Game Development</h4>
                  <p className="text-muted-foreground">
                    Throughout my game development journey, I've used many
                    different engines, such as Unity and Unreal; I have also
                    worked on projects that required deployment on mobile and a
                    singular PS4 game. More recently I've also had the chance to
                    work on a AR/VR training application for a high profile
                    client in the energy industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    I've been working as a front-end web developer since 2019. I
                    have experience in many modern frameworks, such as Angular,
                    React and Vue; Other relevant technologies include Redux,
                    rxjs, and their Angular counterparts.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Current employment</h4>
                  <p className="text-muted-foreground">
                    I am currently employed at DGS S.p.A. in Rome as a
                    developer, and have been for the past{" "}
                    {new Date().getFullYear() - 2022} years. They have free
                    coffee in the office!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
