export type ExperienceSection = "research" | "internships" | "extracurricular-projects" | "class-projects";

export type ExperienceImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ExperienceItem = {
  section: ExperienceSection;
  slug: string;
  title: string;
  year: number;
  tags: string[];

  overview?: string;
  roleBullets?: string[];
  skills?: string[];
  goals?: string[];
  outcomes?: string[];
  lessonsLearned?: string[];
  images?: ExperienceImage[];
};

export const experience = [
    {
      section: "research",
      slug: "amphibious-robotic-turtle",
      title: "Amphibious Robotic Turtle",
      year: 2024,
      tags: ["Soft Robotics", "Locomotion"],
    },
    {
      section: "internships",
      slug: "blue-ghost",
      title: "Firefly Aerospace - Blue Ghost Landing Case Valve Simulation Testbench",
      year: 2024,
      tags: ["Simulation", "Testbench", "Aerospace"],

      overview:
      "As Blue Ghost approached environmental testing at NASA, we needed to close out critical action items. One key task was running a landing-case simulation to verify valve actuation and overall sequence behavior. A major blocker was that RCS solenoid coils overheated rapidly when run without propellant, making testing difficult.",

    roleBullets: [
    'Designed and implemented a water-cooling solution (“Valve Soup”) by running solenoid coils submerged in distilled water to keep temperatures manageable during long simulations.',
    "Upgraded the engine + attitude-control valve simulation setup into a higher-fidelity valve rack testbench using real valves for power-consumption realism, plus control + DAQ interface capabilities and LED feedback.",
    "Soldered, tested, and validated surface-mount power emulator boards for payload customer testing with Firefly hardware.",
    ],

    skills: [
    "Heat transfer fundamentals",
    "Fluid flow basics",
    "Altium",
    "Circuit analysis",
    "DAQ + lab instrumentation (load, supply, scope, NI cDAQ, DMM)",
    "SMT soldering + inspection/debug",
    "Python scripting",
    "Iterative design + validation",
    "Communication + presentation",
    ],

    goals: [
    "Prevent valve overheating during landing-case simulation",
    "Deliver usable power emulators for customer payload testing",
    "Build a higher-fidelity valve simulator testbench",
    ],

    outcomes: [
    "Landing-case simulation successfully ran end-to-end",
    "Hardware progressed toward environmental test readiness shortly after",
    "Expanded mission-scenario testing became possible with RCS simulation included",
    ],

    lessonsLearned: [
    "Use first-principles heat transfer thinking to quickly narrow down viable cooling concepts.",
    "Validate with data early; don’t over-trust nominal datasheet values without checking reality.",
    "Avoid analysis paralysis: prototype + measure beats guessing.",
    "Always sanity-check the test setup; make sure results reflect the true system behavior.",
    ],

    images: [
    {
        src: "/experience/blue-ghost/bucket.png",
        alt: "Solenoid coils submerged in a bucket of distilled water",
        caption: "Single bucket with 4 solenoid coils (distilled water cooling).",
    },
    {
        src: "/experience/blue-ghost/single-emulator.png",
        alt: "Power emulator board",
        caption: "A single power emulator with overcurrent light, button, and LED feedback.",
    },
    {
        src: "/experience/blue-ghost/old-sim.png",
        alt: "Old valve simulation pelican case",
        caption: "Old valve simulation pelican case integrating with NI cDAQ + avionics rack.",
    },
    {
        src: "/experience/blue-ghost/integration.png",
        alt: "Buckets integrated with avionics rack",
        caption: "Integration of cooling buckets with existing simulation rack setup.",
    },
    {
        src: "/experience/blue-ghost/emulator.png",
        alt: "Three power emulators",
        caption: "Three power emulators I assembled and validated.",
    },
    {
        src: "/experience/blue-ghost/rack-front.png",
        alt: "High-fidelity valve rack testbench",
        caption:
        "Upgraded high-fidelity valve rack testbench: real valves, cDAQ connectors, LED indicators, and cooling loop.",
    },
    ],
    },
    {
      section: "class-projects",
      slug: "self-balancing-motorcycle",
      title: "Self-Balancing Motorcycle",
      year: 2024,
      tags: ["Control Systems", "Embedded Systems", "Robotics"]
    },
    {
      section: "extracurricular-projects",
      slug: "pl-asi",
      title: "Project Liquid - Augmented Spark Igniter",
      year: 2023,
      tags: ["Leadership", "Team Management", "Aerospace", "PCB"]
    },
];