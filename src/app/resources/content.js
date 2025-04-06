import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "OPTIQ",
  lastName: "25",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Photonics International Conference",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Malayalam", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Karnnanaj",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/karnnan-aj-1103a0268/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:karnnanaj2004@gmail.com",
  },
  
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>OPTIQ 2025</>,
  subline: (
    <>
      OPTIQ 2025 is an international conference which is going to be held in the International School of Photonics,
      Cochin University of Science and Technology, Kochi. The event will consist of talks and dicussions by
      professors, reseachers and industry professionals from all around the world. Themes that will be covered are photonics
      and optics related. The detailed list of topics and the attendees are listed.
      {/* <InlineCode>embedded systems</InlineCode>, <InlineCode>power electronics</InlineCode>, 
      and <InlineCode>high-voltage circuits</InlineCode>. I design and build custom hardware, 
      from <br /> microcontroller-based systems to high-frequency Tesla coils. */}
    </>
  ),
 topics: [
  { 
    title: "Bio-Photonics", 
    imgSrc: "/images/projects/topics/bio_photonics.jpg", 
    description: "Explore cutting-edge applications of photonics in biology and medicine, including advanced imaging techniques, laser-based therapies, and biosensors for diagnostics at Optiq 2025.", 
    imgPosition: "top",
    width: 16, 
    height: 9, 
    alt: "Bio-Photonics Image" 
  },
  { 
    title: "Optical Communication", 
    imgSrc: "/images/projects/topics/communication.png", 
    description: "Discover the latest innovations in optical signal transmission, including high-speed fiber optics, photonic integrated circuits, and next-generation networks showcased at Optiq 2025.", 
    imgPosition: "top",
    width: 16, 
    height: 9, 
    alt: "Optical Communication Image" 
  },
  { 
    title: "Optical Fiber-based Devices", 
    imgSrc: "/images/projects/topics/fiber_devices.jpg", 
    description: "Learn about state-of-the-art devices leveraging optical fibers, such as amplifiers, lasers, and sensors, driving advancements in telecommunications and sensing technologies at Optiq 2025.", 
    imgPosition: "top",
    width: 16, 
    height: 9, 
    alt: "Optical Fiber Devices Image" 
  },
  { 
    title: "Laser Plasma", 
    imgSrc: "/images/projects/topics/laser_plasma.jpg", 
    description: "Delve into the physics of laser-plasma interactions, including laser-induced fusion, plasma diagnostics, and ultrafast laser applications presented at Optiq 2025.", 
    imgPosition: "top",
    width: 16, 
    height: 9, 
    alt: "Laser Plasma Image" 
  },
  { 
    title: "Metamaterials", 
    imgSrc: "/images/projects/topics/metamaterials.jpg", 
    description: "Uncover the potential of metamaterials in photonics, enabling unique optical properties for cloaking, superlens imaging, and advanced photonic devices at Optiq 2025.", 
    imgPosition: "top",
    width: 16, 
    height: 9, 
    alt: "Metamaterials Image" 
  },
  { 
    title: "Microscopy Imaging", 
    imgSrc: "/images/projects/topics/microscopy_imaging.jpg", 
    description: "Experience breakthroughs in microscopy using photonic techniques, such as super-resolution imaging and live-cell analysis, highlighted at Optiq 2025.", 
    imgPosition: "top",
    width: 16, 
    height: 9, 
    alt: "Microscopy Imaging Image" 
  },
  { 
    title: "Nanophotonics", 
    imgSrc: "/images/projects/topics/nanophotonics.jpg", 
    description: "Explore the nanoscale manipulation of light, including plasmonics and photonic crystals, with applications in nano-optics and quantum technologies at Optiq 2025.", 
    imgPosition: "top",
    width: 16, 
    height: 9, 
    alt: "Nanophotonics Image" 
  },
  { 
    title: "Non-Linear Optics", 
    imgSrc: "/images/projects/topics/non_linear.jpg", 
    description: "Investigate non-linear optical phenomena, such as frequency conversion and optical parametric oscillation, driving innovations in laser systems at Optiq 2025.", 
    imgPosition: "top",
    width: 16, 
    height: 9, 
    alt: "Non-Linear Optics Image" 
  },
  { 
    title: "Opto Devices", 
    imgSrc: "/images/projects/topics/opto_devices.jpg", 
    description: "Showcase the latest optoelectronic devices, including photodetectors, LEDs, and modulators, shaping the future of photonics technology at Optiq 2025.", 
    imgPosition: "top",
    width: 16, 
    height: 9, 
    alt: "Opto Devices Image" 
  },
  { 
    title: "Photonic Sensors", 
    imgSrc: "/images/projects/topics/photonic_sensors.jpg", 
    description: "Highlight advanced photonic sensors for environmental monitoring, healthcare, and industrial applications, featuring cutting-edge research at Optiq 2025.", 
    imgPosition: "top",
    width: 16, 
    height: 9, 
    alt: "Photonic Sensors Image" 
  },
  { 
    title: "Quantum Computing", 
    imgSrc: "/images/projects/topics/quantum_computing.jpg", 
    description: "Delve into the intersection of photonics and quantum computing, exploring quantum optics, entangled photon sources, and quantum communication at Optiq 2025.", 
    imgPosition: "top",
    width: 16, 
    height: 9, 
    alt: "Quantum Computing Image" 
  },
  { 
    title: "Ultrafast Laser", 
    imgSrc: "/images/projects/topics/ultrafast_laser.jpg", 
    description: "Unveil the power of ultrafast lasers for material processing, medical surgery, and scientific research, with key developments presented at Optiq 2025.", 
    imgPosition: "top",
    width: 16, 
    height: 9, 
    alt: "Ultrafast Laser Image" 
  },
  { 
    title: "AI/ML Techniques in Photonics", 
    imgSrc: "/images/projects/topics/machine_learning.jpg", // Assuming a new image name
    description: "Discover how artificial intelligence and machine learning enhance photonic design, optimization, and signal processing at Optiq 2025.", 
    imgPosition: "top",
    width: 16, 
    height: 9, 
    alt: "AI/ML in Photonics Image" 
  },
],
  features: [
    { 
      title: "Feature 1", 
      description: "Description for Feature 1", 
      imgSrc: "/images/gallery/img-04.jpg", 
      imgPosition: "top",
      width: 16, 
      height: 9, 
      alt: "Feature 1 Image" 
    },
    { 
      title: "Feature 2", 
      description: "Description for Feature 2", 
      imgSrc: "/images/gallery/img-05.jpg", 
      imgPosition: "top",
      width: 16, 
      height: 9, 
      alt: "Feature 2 Image" 
    },
    { 
      title: "Feature 3", 
      description: "Description for Feature 3", 
      imgSrc: "/images/gallery/img-06.jpg", 
      imgPosition: "top",
      width: 16, 
      height: 9, 
      alt: "Feature 3 Image" 
    },
  ],
};



const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      OPTIQ 2025 is an international conference which is going to be held in the International School of Photonics,
      Cochin University of Science and Technology, Kochi. The event will consist of talks and dicussions by
      professors, reseachers and industry professionals from all around the world. Themes that will be covered are photonics
      and optics related. The detailed list of topics and the attendees are listed.


      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Electronics Startup",
        timeframe: "2023 - Present",
        role: "Co-Founder & Design Engineer",
        achievements: [
          <>
            Designed and built custom electronic hardware solutions, including embedded systems and power electronics.
          </>,
          <>
            Developed and maintained PCB designs for high-voltage and precision analog systems.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Photonics Research & Development",
        timeframe: "2022 - Present",
        role: "Student Researcher",
        achievements: [
          <>
            Worked on nanomaterial synthesis for photonic sensor applications, including fiber Bragg gratings.
          </>,
          <>
            Simulated and analyzed optical communication systems for next-gen telecom applications.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "International School of Photonics, CUSAT",
        description: <>Pursuing an Integrated MSc in Photonics, specializing in laser physics and optical systems.</>,
      },
      {
        name: "GHSS, Karupadanna",
        description: <>Completed higher secondary education in Computer Science, Mathematics, and Physics.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Embedded Systems",
        description: <>Experienced in microcontroller programming (Arduino, STM32, ESP32) and real-time processing.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Power Electronics & High Voltage Circuits",
        description: <>Designed and tested high-voltage circuits, including Tesla coils and power converters.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Optics & Photonics",
        description: <>Worked on laser systems, optical fiber communications, and spectroscopy applications.</>,
        images: [],
      },
    ],
  },
  
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
