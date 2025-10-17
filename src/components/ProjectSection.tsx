import { ArrowRight, ExternalLink, Github, Youtube } from "lucide-react";
// import { Carousel } from "./Carousel";

const projects = [
  {
    id: 1,
    title: "Cell Resistance",
    description: `<b>Winner of Kingston Univeristy's 2018 Game Jam!</b> <br/> Cell Resistance is a top-down shooter taking place inside a sick person's body, where the player controls a white cell that can switch between two states of resistance. This game was developed as a team effort over the course of 24 hours during Kingston University's 2018 Game Jam. The contest's theme was "Resistance", thus we settled on the idea of a little white cell helping a body resist a viral attack. I was assigned the task of creating the AI for the enemies in the game.`,
    images: ["/projects/cellRes2.jpg", "/projects/cellRes1.jpg"],
    tags: ["Unity"],
    demoUrl: "",
    githubUrl: "https://github.com/Yggahs/CellRes",
    youtubeUrl: "https://www.youtube.com/watch?v=ftNPEQPny4w",
  },
  {
    id: 2,
    title: "Unity ECS Demonstration: Galaxy",
    description: `This project was created in a week as a way to showcase Unity's recent implementation of the Entity Component System. This system can allow for exceptional levels of optimization and thus the amount of entities that are allowed to be on the screen without the framerate dropping.`,
    images: ["/projects/ecs.png"],
    tags: ["Unity", "ECS"],
    demoUrl: "",
    githubUrl: "https://github.com/Yggahs/ECS",
    youtubeUrl: "https://www.youtube.com/watch?v=x0Y9T27UZaU",
  },
  {
    id: 3,
    title: "Arkanoid PS4",
    description: `This project was created in a week as a way to showcase Unity's recent implementation of the Entity Component System. This system can allow for exceptional levels of optimization and thus the amount of entities that are allowed to be on the screen without the framerate dropping.`,
    images: ["/projects/ps4.png"],
    tags: ["Unity", "PS4"],
    demoUrl: "",
    githubUrl: "https://github.com/Yggahs/ArkanoidPs4",
    youtubeUrl: "https://www.youtube.com/watch?v=_bj2gIhxJ2o",
  },
  {
    id: 4,
    title: "Silence in the Snow",
    description: `Silence in the Snow is a 4 player free-for-all game similar to Splatoon. The objective of the game is to cover the ground with as much blood of the color of your team as possible, before the timer reaches zero. To do so, players will have to defeat AI controlled enemies that spawn at the edges of the map. The project was made to showcase Unity's online capabilities, in particular Photon.`,
    images: ["/projects/silence-in-the-snow.png"],
    tags: ["Unity", "Photon"],
    demoUrl: "",
    githubUrl: "https://github.com/Yggahs/SilenceInTheSnow",
    youtubeUrl: "",
  },
  // {
  //   id: 5,
  //   title: "The Danger Zone",
  //   description: `The Danger Zone is a third person shooter inspired by the Ratchet and Clank universe where the player takes control of a crash test dummy and the objective is to survive the onslaught of enemies to get to the end of the gauntlet. I worked on the weapons, the player's controls and the enemies' AI.`,
  //   images: ["/projects/silence-in-the-snow.png"],
  //   tags: ["Unreal 4"],
  //   demoUrl: "",
  //   githubUrl: "",
  // },
  {
    id: 6,
    title: "Thrash the Dove",
    description: `Thrash The Dove is a physics based game inspired by the flash game Toss the Turtle: the objective of the game is to have the dove land as far as possible; the player is provided with a shotgun that can launch the dove even farther.`,
    images: ["/projects/thrashdove.png"],
    tags: ["GFC"],
    demoUrl: "",
    githubUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=tn8j_Dq-MJ8",
  },
  {
    id: 7,
    title: "Han is Solo",
    description: `Han Is Solo is a stealth game set in the Star Wars universe; the player takes control of Han Solo and the objective is to escape the Empire base without being caught by the droids.
The player has to collect different color-coded keycards in order to escape the maze; ammos can be picked up around the maze to shoot droids with a stun gun that will disable them temporarily.`,
    images: ["/projects/hanissolo.png"],
    tags: ["GFC"],
    demoUrl: "",
    githubUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=GVEVFpo-uRU",
  },
  {
    id: 8,
    title: "Volcano Isles",
    description: `This is a small project made in OpenGL, we were asked to create a scene containing objects, particle effects, water, multitexturing, a skybox and a height map.
The scene is meant to represent a tropical volcanic archipelago; it’s main volcano is erupting and a lone airplane is passing by to witness the spectacle. In the meantime, a small indigenous hut is left to its fate as it inhabitants have already evacuated the area.`,
    images: ["/projects/volcanoisles.png"],
    tags: ["OpenGL"],
    demoUrl: "",
    githubUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=KBYI3O1ZtM0",
  },
  {
    id: 9,
    title: "Unreal Shaders",
    description: `This project showcases some shaders made in Unreal. There are 5 main shaders, each of which was custom made though the use of Unreal's shader tool. A version of this same project was also made in Unity.
The shaders in this project are:
<ul>
<li><b>Fire</b> - The wall of fire in front of the room;</li>
<li><b>Blood</b> - The liquid that covers the floor;</li>
<li><b>Fiery Dissolvence</b> - The effect applied to the disappearing demon;</li>
<li><b>Glowing Altars</b> - The effect applied to the altars;</li>
<li><b>Tornado of souls</b> - The cone of revolving images around the demon.</li>
</ul>`,
    images: ["/projects/unrealshaders.png"],
    tags: ["Unreal 4"],
    demoUrl: "",
    githubUrl: "https://github.com/Yggahs/UnrealShaders",
    youtubeUrl: "https://www.youtube.com/watch?v=52AHUlJ0zQU",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are a few of projects I've worked on.
          <br /> You'll find links to demos, videos and repos on the bottom
          left!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overdlow-hidden">
                {/* <Carousel
                  images={project.images}
                  projectTitle={project.title}
                  // 
                /> */}
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      key={key}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p
                  className="text-muted-foreground text-sm mb-4 flex-grow"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                >
                  {/* {project.description} */}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : (
                      ""
                    )}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    ) : (
                      ""
                    )}
                    {project.youtubeUrl ? (
                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Youtube size={20} />
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://www.github.com/Yggahs"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
