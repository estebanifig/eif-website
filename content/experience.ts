export type ExperienceSection = "research" | "internships" | "extracurricular-projects" | "class-projects";

export type ExperienceImage = {
    src: string;      // e.g. "/Media/ART/Clamp.png"
    alt: string;
    caption?: string;
};

export type ExperienceVideo = {
    src: string;      // e.g. "/Media/ART/DemoBox.MOV"
    type?: string;    // e.g. "video/quicktime"
    caption?: string;
};

export type ExperienceDocument = {
    src: string;      // e.g. "/Media/ART/ONRAnnualReview.pdf"
    title: string;    // e.g. "ONR Annual Review"
    description?: string;
};

export type ExperienceLink = {
    href: string;
    label: string;
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
    futureWork?: string[];
  
    images?: ExperienceImage[];
    videos?: ExperienceVideo[];
    documents?: ExperienceDocument[];
    links?: ExperienceLink[];
};

export const experience = [
    {
        section: "research",
        slug: "amphibious-robotic-turtle",
        title: "The Faboratory: Amphibious Robotic Turtle – Performance Enhancement",
        year: 2024,
        tags: ["Soft Robotics", "Morphing", "Pneumatics", "PCB", "Research"],
        
        overview:
            "The Morphing Amphibious Robotic Turtle at Yale (MARTY) is a platform for studying cost of transport, cost of morphing, and shape/stiffness adaptation in soft robotic flippers. When I joined, MARTY relied on off-board pneumatic hardware tethered to a gas generator, vacuum pump, and compressor. My work focused on untethering the system by integrating a compact onboard Pneumatic Control Unit (PCU) that could autonomously inflate, deflate, soften, and stiffen the flippers while reducing energy usage.",
        
        roleBullets: [
            "Designed and built four iterations of an onboard Pneumatic Control Unit (PCU) using miniature pumps, solenoid valves, a motor driver, a Darlington transistor array, power sensing, and pressure sensors around an Arduino Nano.",
            "Reduced cost of morphing by roughly an order of magnitude compared with the original off-board actuation setup using external pumps and thermoset epoxy curing.",
            "Implemented closed-loop pressure control: pressure sensors feed back to the microcontroller so the pumps can compensate for leaks and hold target pressures automatically.",
            "Designed a bellow-clamping shoulder structure that houses the locomotion motors and keeps the interior of the bellows dry, reducing the risk of water ingress and motor damage.",
            "Collaborated with the team to integrate the PCU with MARTY’s mechanical design, experimental workflows, and data collection pipelines."
        ],
        
        skills: [
            "Circuit design",
            "PCB layout (Altium)",
            "Embedded systems (Arduino)",
            "Pneumatic system design",
            "Waterproofing and pressure testing",
            "Python and MATLAB for data analysis",
            "Data visualization",
            "Technical presenting",
            "Scientific writing"
        ],
        
        goals: [
            "Untether MARTY from external pneumatic hardware and power sources.",
            "Waterproof the locomotion motors and protect internal components.",
            "Generate publishable experimental results and a conference paper for RoboSoft 2024.",
            "Prepare robust demos for the MARS (Machine learning, Automation, Robotics, and Space) conference."
        ],
        
        outcomes: [
            "Successfully untethered MARTY with an onboard PCU, reducing energy required for morphing operations.",
            "Demonstrated a functional waterproof locomotion system in experimental tests.",
            "Co-authored a paper accepted to the 2024 IEEE International Conference on Soft Robotics (RoboSoft).",
            "Won a best-presentation-style award for my work on untethering MARTY.",
            "Built and deployed demo boxes that showcased flipper morphing with the PCU at the MARS conference.",
            "Awarded the Science, Technology, and Research Scholars (STARS) II Fellowship, funding the remainder of my undergraduate research."
        ],
        
        lessonsLearned: [
            "Research progress is rarely linear; it often feels like a sinusoid, but consistent small steps accumulate into large gains.",
            "Making mistakes early is valuable—rapid iteration and learning beats waiting for the ‘perfect’ design.",
            "Experimental design should always be purposeful; every test should answer a specific question.",
            "Data is only useful if you know how to interpret it and tie it back to the physical system.",
            "Clear communication is critical: design presentations and documents so that non-experts can still understand the work."
        ],
        
        futureWork: [
            "Develop a more control-theory-heavy project that fully closes the loop on MARTY’s locomotion using motor position feedback and ROS 2.",
            "Publish motor-state and sensor data to ROS 2 topics to enable real-time state estimation and motion reconstruction.",
            "Build a MuJoCo- or Gazebo-based simulation of MARTY, grounded in experimental data, to optimize gaits and further reduce cost of transport."
        ],
        
        images: [
            {
            src: "/Media/ART/Clamp.png",
            alt: "CAD of shoulder joints holding bellows for the amphibious robotic turtle",
            caption: "Design for shoulder joints that clamp the bellows and house locomotion hardware."
            },
            {
            src: "/Media/ART/PCUPCB.png",
            alt: "PCB layout of the Pneumatic Control Unit (PCU) V4",
            caption: "Final PCU V4 carrier board that integrates pumps, valves, drivers, sensors, and control electronics."
            },
            {
            src: "/Media/ART/Shoulders.png",
            alt: "Final shoulder assembly on the robot with motors installed",
            caption: "Final iteration of waterproof shoulder assemblies with motors mounted on MARTY."
            },
            {
            src: "/Media/ART/DemoBox.png",
            alt: "Demo boxes showing four-button control for inflation, deflation, stiffening, and softening",
            caption: "Demo boxes used to showcase flipper inflation/deflation and stiffness changes with the PCU."
            }
        ],
        
        videos: [
            {
            src: "/Media/ART/DemoBox.MOV",
            type: "video/quicktime",
            caption: "PCU-powered demo box inflating and deflating a flipper actuator."
            },
            {
            src: "/Media/ART/Turtle.MOV",
            type: "video/quicktime",
            caption: "MARTY operating with the onboard PCU and waterproofed shoulders."
            }
        ],
        
        documents: [
            {
            src: "/Media/ART/ONRAnnualReview.pdf",
            title: "ONR Annual Review",
            description: "Annual review slides summarizing MARTY’s morphing-limb performance and onboard PCU integration."
            },
            {
            src: "/Media/ART/RoboSoft2024Final copy.pdf",
            title: "RoboSoft 2024 Poster Presentation",
            description: "Poster detailing performance enhancement of the morphing limb and experimental results."
            },
            {
            src: "/Media/ART/0158_FI.pdf",
            title: "Performance Enhancement of a Morphing Limb for an Amphibious Robotic Turtle",
            description: "Full conference paper describing design, experiments, and performance metrics."
            }
        ],
        
        links: [
            {
            href: "https://ieeexplore.ieee.org/abstract/document/10521924?casa_token=0wJG-QZSWIUAAAAA:y7VvX1Y4xb8jamOJkrv3LLbiHpXYk9HHt-VHL9YpuqeEsznstynNubQLkAHIV-BIA7d_nQB7iZU",
            label: "RoboSoft 2024 Conference Paper"
            }
        ]
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
        "Validate with data early; don't over-trust nominal datasheet values without checking reality.",
        "Avoid analysis paralysis: prototype + measure beats guessing.",
        "Always sanity-check the test setup; make sure results reflect the true system behavior.",
        ],

        images: [
        {
        src: "/Media/FFBG/Bucket.png",
        alt: "Solenoid coils submerged in a bucket of distilled water",
        caption: "Single bucket with 4 solenoid coils (distilled water cooling).",
        },
        {
        src: "/Media/FFBG/SingleEmulator.png",
        alt: "Power emulator board",
        caption: "A single power emulator with overcurrent light, button, and LED feedback.",
        },
        {
        src: "/Media/FFBG/OldSim.png",
        alt: "Old valve simulation pelican case",
        caption: "Old valve simulation pelican case integrating with NI cDAQ + avionics rack.",
        },
        {
        src: "/Media/FFBG/Integration.png",
        alt: "Buckets integrated with avionics rack",
        caption: "Integration of cooling buckets with existing simulation rack setup.",
        },
        {
        src: "/Media/FFBG/Emulator.png",
        alt: "Three power emulators",
        caption: "Three power emulators I assembled and validated.",
        },
        {
        src: "/Media/FFBG/RackF.png",
        alt: "High-fidelity valve rack testbench",
        caption:
        "Upgraded high-fidelity valve rack testbench: real valves, cDAQ connectors, LED indicators, and cooling loop.",
        },
        ],

        futureWork: [],
    },
    {
        section: "class-projects",
        slug: "self-balancing-motorcycle",
        title: "Self-Balancing Motorcycle – MENG 390L Final Project",
        year: 2024,
        tags: ["Control Systems", "Embedded Systems", "Robotics"],
      
        overview:
          "Final project for Mechatronics Lab (MENG 390L), where my teammate and I built, programmed, and raced a self-balancing, self-steering motorcycle using the Arduino Engineering Kit Rev2. The course focused on modeling, sensing, actuation, and feedback control for electro-mechanical systems, culminating in a timed competition.",
      
        roleBullets: [
          "Designed and implemented an IR sensor + RC filter circuit to detect lane markings based on color thresholds.",
          "Characterized the DC motor and Hall sensor to better understand speed/torque behavior for control tuning.",
          "Characterized the IMU and implemented a PID controller that uses IMU feedback to spin the reaction wheel and balance the motorcycle in place.",
          "Extended the controller and tuning to balance while driving forward, not just in static conditions.",
          "Integrated the IR sensing system so the motorcycle could stay within lane boundaries while balancing and driving."
        ],
      
        skills: [
          "MATLAB/Simulink",
          "Arduino programming",
          "Circuit analysis",
          "Circuit design",
          "Controller design (PID)",
          "Experimental tuning and validation"
        ],
      
        goals: [
          "Race a self-balancing, self-steering motorcycle against other teams and achieve the fastest possible lap time."
        ],
      
        outcomes: [
          "Placed second overall in the class competition with a motorcycle that could balance and stay in its lane.",
          "Delivered a successful final project and received an A- for the course."
        ],
      
        lessonsLearned: [
          "Simulations and mathematical models are approximations—physical testing and iteration are critical for control systems.",
          "Leaving out even one important variable (like IR sensor input) when modeling a dynamic system can significantly degrade performance.",
          "Robust control requires thinking about varying initial conditions and real-world disturbances, not just idealized setups."
        ],
      
        futureWork: [
          "Buy my own Arduino motorcycle kit and build a more robust PID controller that tightly integrates IR sensor feedback with balance control.",
          "Run additional experiments to make the controller more robust to varied starting angles and other initial conditions."
        ],
      
        images: [
          {
            src: "/Media/MENG390/FrontTop.png",
            alt: "Front view of the self-balancing motorcycle showing IR sensors near the front wheel",
            caption:
              "Front view of the motorcycle; IR sensors mounted near the front wheel for lane detection."
          },
          {
            src: "/Media/MENG390/Motorcycle.png",
            alt: "Side view of the self-balancing motorcycle from the Arduino Engineering Kit",
            caption: "Side view of the self-balancing, self-steering motorcycle."
          },
          {
            src: "/Media/MENG390/BackTop.png",
            alt: "Top-back view of the motorcycle showing IR sensor and RC filter circuitry",
            caption:
              "Back-top view highlighting the IR sensor and RC filter circuitry mounted on the chassis."
          }
        ],
      
        videos: [
          {
            src: "/Media/MENG390/MotorRace.MOV",
            type: "video/quicktime",
            caption:
              "Race footage representative of our best run (the original fastest run video was unfortunately lost)."
          }
        ],
      
        documents: [
          {
            src: "/Media/MENG390/MENG390_FR.pdf",
            title: "MENG 390L Final Project Report",
            description:
              "Course report detailing modeling, controller design, implementation, and performance of the self-balancing motorcycle."
          }
        ],
      
        links: []
    },
    {
        section: "extracurricular-projects",
        slug: "pl-asi",
        title: "Project Liquid - Augmented Spark Igniter",
        year: 2023,
        tags: ["Leadership", "Team Management", "Aerospace", "PCB"],
      
        overview:
          "An Augmented Spark Igniter (ASI, or torch igniter) is a common ignition source in liquid rocket engines. This project served as a clean-slate platform for our team to practice full-stack engineering: requirements, design reviews, iterative prototyping, testing, and operations with real propellants under Yale Environmental Health & Safety (EHS) oversight.",
      
        roleBullets: [
          "Led the Avionics & Control (A&C) subteam and presented a full Preliminary Design Review (PDR) for the ASI driver to stakeholders including Yale EHS, Vast Aerospace mentors, and chief engineers.",
          "Coordinated with all subteams to define A&C requirements: valve counts, sensor channels, state diagrams, and test-sequence logic for safe ignition and shutdown.",
          "Designed a new ASI driver PCB building on the previous water-flow test board, retaining an I²C multiplexer while upgrading to new I²C pressure transducers.",
          "Architected the power system using two 12 V batteries in series with 12 V and 24 V taps, distributing power via screw-terminal buses for 12 V, 24 V, and ground.",
          "Upgraded from an Arduino Mega to a Teensy 4.1 for more I/O, richer pin capabilities, Ethernet support, and faster processing suitable for real-time test control.",
          "Implemented an Emergency Stop path in hardware to safely power down the system in case of anomalies, addressing EHS safety concerns.",
          "With guidance from a Vast Aerospace mentor, implemented a spark ignition system using a ZVS driver and flyback transformer, actuated via relay like the valves.",
          "Co-developed a GUI with the software team to control test sequences, override states in emergencies, and stream live pressure data for operators.",
          "Prepared, post-processed, analyzed, and visualized test data to support the fluids team’s performance characterization and design decisions."
        ],
      
        skills: [
          "Altium PCB design",
          "PCB layout and power distribution",
          "Circuit analysis and debugging",
          "C++ (Teensy/Arduino) programming",
          "Python scripting and data analysis",
          "DAQ integration and test automation",
          "Project management and cross-team coordination",
          "Design and delivery of technical reviews (PDR/CDR/BRR)",
          "I²C sensor integration",
          "Hands-on lab debugging under safety constraints"
        ],
      
        goals: [
          "Achieve reliable ASI ignition for 1.0, 1.5, and 3.0 second burns.",
          "Collect data to characterize oxidizer/fuel (O/F) ratios and their impact on ignition behavior.",
          "Demonstrate safe propellant handling procedures and test operations to Yale EHS.",
          "Establish a robust, reusable ASI test stand and electronics stack for future Project Liquid work."
        ],
      
        outcomes: [
          "Successfully achieved visible ignition and a 3-second burn — the first combustion in Yale Project Liquid history.",
          "Validated the remote test site setup and logistics, opening the door for future hotfire campaigns.",
          "Collected data to inform improvements in mixture ratio control, ignition reliability, and system design.",
          "Demonstrated safe operations and technical competency to EHS, enabling deeper collaboration for future propellant tests."
        ],
      
        images: [
          {
            src: "/Media/asi/ASIPCB.png",
            alt: "3D model of the ASI driver PCB",
            caption: "3D model of the ASI driver PCB used to control valves, sensors, and spark ignition."
          },
          {
            src: "/Media/asi/ECBox.png",
            alt: "Engine controller PCB inside NEMA enclosure",
            caption: "Engine controller PCB installed in a NEMA enclosure for field use."
          },
          {
            src: "/Media/asi/PowerBox.png",
            alt: "Power distribution buses inside NEMA box",
            caption: "12 V, 24 V, and ground buses distributing power to valves, relays, and ignition hardware."
          },
          {
            src: "/Media/asi/Plug.png",
            alt: "Spark plug testbench with ZVS driver and flyback transformer",
            caption: "Bench test of the ZVS driver, flyback transformer, relay, and spark plug assembly."
          },
          {
            src: "/Media/asi/ASI.png",
            alt: "Isometric view of ASI test stand",
            caption: "Isometric view of the ASI test stand, showing plumbing, hardware, and instrumentation layout."
          },
          {
            src: "/Media/asi/YPL_hotfire.jpg",
            alt: "Project Liquid team photo after successful hotfire",
            caption: "Team photo after the first successful ASI hotfire in Project Liquid history."
          }
        ],
      
        videos: [
          {
            src: "/Media/asi/SparkTest.mov",
            type: "video/quicktime",
            caption: "Video of bench testing the ZVS + flyback spark plug ignition system."
          }
        ],
      
        documents: [
          {
            src: "/Media/asi/ASI_PCB.pdf",
            title: "ASI Driver V1 Schematic",
            description: "Full schematic for the ASI driver PCB, including valve, sensor, and ignition circuits."
          },
          {
            src: "/Media/asi/EC-DAQ PDR.pdf",
            title: "ASI A&C Preliminary Design Review",
            description: "Preliminary design review slides outlining initial avionics and DAQ architecture."
          },
          {
            src: "/Media/asi/A&C CDR Presentation.pdf",
            title: "ASI A&C Critical Design Review",
            description: "Critical Design Review detailing final architecture, safety, and implementation plans."
          },
          {
            src: "/Media/asi/A&C EC_DAQ BRR Presentation.pdf",
            title: "ASI A&C Build Readiness Review",
            description: "Build Readiness Review confirming the system was ready for fabrication and integration."
          }
        ],
      
        links: [
          {
            href: "https://www.youtube.com/watch?v=tC5eK03xlEM&t=1s",
            label: "Spark by Project Liquid: Yale's First Rocket Ignitor"
          }
        ],
      
        lessonsLearned: [
          "Observed that spark events injected significant EMI into the system, intermittently killing sensor readings and even the Teensy — pushing me to explore shielding (e.g., makeshift Faraday cage on the Ethernet port) and better grounding.",
          "Discovered that successful ignition with propellant on-flow is highly sensitive to O/F ratio and hardware details at the plug, motivating deeper investigation.",
          "Found that the Teensy 4.1 could not reliably drive more than two relays directly from its own supply, revealing the need for a more robust valve actuation architecture.",
          "Learned the importance of designing electronics for noisy, harsh environments rather than ideal lab conditions."
        ],
      
        futureWork: [
          "Design and implement a dedicated valve driver stage so the Teensy 4.1 can run on standalone power without overloading its pins.",
          "Study EMI mitigation strategies and compare digital vs. analog sensor robustness in high-noise ignition environments.",
          "Develop a next-generation PCB with improved grounding, isolation, and connector robustness beyond screw terminals.",
          "Refine O/F control and ignition sequencing to improve light-off reliability for longer burns."
        ]
    },
];