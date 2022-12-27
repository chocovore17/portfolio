// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Maëlle Guerre",
  description:
    "I learn, adapt and apply new technology to create innovative low latency solutions. FPGA developer, I also enjoy ultra low latency programming and high performance computing.",
  siteUrl: "https://maelleguerre.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I develop low-latency solutions for FPGAs",
  "I adapt to all programming languages",
  "Mastered in Electronics from Imperial College.",
  "I work on formal verification work",
];

export const EMAIL = "maelle.guerre@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/maelleguerre17/",
  github: "https://github.com/chocovore17",
  // medium: "https://alphaayush.medium.com/",
  instagram: "https://www.instagram.com/maellechoco17/",
  facebook: "https://www.facebook.com/maelleguerre",
  // dribbble: "https://dribbble.com/alphaayush",
  // behance: "https://www.behance.net/alphaayush/",
  // twitter: "https://twitter.com/ayush013",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Formal Verification for Limit order books",
    image: "/timeline/modelsim.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Hardware and software verification in system verilog and jasper gold with different designs of a cached limit order book for Morgan Stanley.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "timeline/finalreport.pdf",
    tech: ["systemverilog", "QuestaSim", "linux", "webpack"],
  },
  {
    name: "LUA wireshark dissector for Tokyo Exchange",
    image: "/projects/blur/trading.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Translating a bitstream to readable information in LUA for the wireshark application. Protocols are Arrowhead and FIX",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://docs.wixstatic.com/ugd/4f12d9_f567d246e8854ac78cd9ef4cb8f35a41.pdf",
    tech: ["lua", "wireshark", "arrowhead"],
  },
  {
    name: "Compiler in assembly and c++",
    image: "/projects/wsl2.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Simple command line MIPS compiler from C++ to assembly written in a combination of these two languages..",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "",
    tech: ["C++", "assembly", "git", "VS Code"],
  },
  {
    name: "Kandid",
    image: "/projects/blur/marcellepardee.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "COVID Tracing user and admin apps for French High School.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://marcellepardeadmincantine.web.app",
    tech: ["angular", "html", "css"],
  },
  {
    name: "Echy Luminosity study",
    image: "/projects/blur/echy.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Project to combine natural and artificial light, made for the society Echy.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://docs.wixstatic.com/ugd/4f12d9_f567d246e8854ac78cd9ef4cb8f35a41.pdf",
    tech: ["excel", "fluid dynamics", "solidworks", "mechanics"],
  },
];

export const SKILLS = {
  programming: [
    "systemverilog",
    "python",
    "C++",
    "sql",
    "angular",
    "lua",
    "scala",
    "linux",
    "windows",
    "html",
    "css",
  ],
  tools: ["wireshark", "QuestaSim", "anaconda", "photoshop"],
  languages: ["French (native)", "English (Billingual)", "Mandarin (intermediate)"],
  other: ["git", "webpack", "VS Code"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Technology Analyst (Current), Morgan Stanley",
    size: ItemSize.SMALL,
    subtitle: "FPGA Developer, market making and ultra low-latency (ULL) work, formal verification and testing on the newest FPGA boards.",
    image: "/timeline/morgan-stanley-logo.jpg",
    slideImage: "/timeline/amdchip.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "August 2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Technology Analyst Program, Morgan Stanley",
    size: ItemSize.SMALL,
    subtitle:
      "Morgan Stanley Graduate program",
    image: "/timeline/morgan-stanley-logo.jpg",
    slideImage: "/timeline/wallstreet.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Masters inElectronics and information engineering (MEng)",
    size: ItemSize.SMALL,
    subtitle:
      "1st class of honours. Specialised in digital electronics, control systems, machine learning and computer architecture.",
    image: "/timeline/imperialcollege.png",
    slideImage: "/timeline/graduationimperial.jpeg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Technology Intern (Innovation), Morgan Stanley",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for innovation labs, automation using AI, FPGA development for fast cancels.",
    image: "/timeline/morgan-stanley-logo.jpg",
    slideImage: "/timeline/wallstreet.jpeg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "STEM Mentor",
    size: ItemSize.SMALL,
    subtitle: "Teaching and promoting sciences, representing Imperial College London to students in central London and Whitecity.",
    image: "/timeline/imperialcollege.png",
    slideImage: "/timeline/outreach.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Academic Representative at imperial college",
    size: ItemSize.SMALL,
    subtitle:
      "Represented a cohort of electrical and electronics engieneering stuents, promoting and advocating for their well-being and success.",
    image: "/timeline/imperialcollege.png",
    slideImage: "/timeline/imperialrep.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Summer Intern, Morgan Stanley",
    size: ItemSize.SMALL,
    subtitle:
      "Worked on Angular typescript to display futures and options for risk management team.",
    image: "/timeline/morgan-stanley-logo.jpg",
    slideImage: "/timeline/futureoptions.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Summer Intern, Siemens",
    size: ItemSize.SMALL,
    subtitle:
      "3D modelisation development in LISP and python in Cambridge.",
    image: "/timeline/siemenslogo.png",
    slideImage: "/timeline/siemens3D.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Intern, CERN",
    size: ItemSize.SMALL,
    subtitle:
      "Work on a converter test in PERL for the Center of European Nuclear Research. I worked on test scripts for the TE-EPC team.",
    image: "/timeline/Logo_CERN.jpg",
    slideImage: "/timeline/CMS.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
