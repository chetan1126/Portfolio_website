export const personalInfo = {
  name: "Chetan Kotrange",
  firstName: "Chetan",
  lastName: "Kotrange",
  role: "Electronics & Robotics Engineer",
  email: "chetankotrange11@gmail.com",
  phone: "+91 8888627008",
  location: "Chandrapur, Maharashtra, India",
  linkedin: "https://www.linkedin.com/in/chetan-kotrange-88665022b",
  github: "https://github.com/chetan1126",
  resume: "/Chetan_Kotrange_CV.pdf",
  profilePicture: "/Profile_photo.png",
  heroDescription:
    "I'm a graduate in Electrical, Electronics & Power Engineering with a strong focus on electronics circuits, sensors, actuators, and PCB design. Two years of hands-on experience leading electronic systems on a competitive robotics team have shaped my practical skills across KiCad, Proteus, MATLAB, and Arduino IDE, and I'm eager to bring that to a challenging R&D role.",
};

export const workExperience = [
  {
    company: "BKT Tyres Pvt. Ltd.",
    location: "India",
    position: "Graduate Engineer Trainee (GET) - Automation",
    period: "Jul 2025 - Feb 2026",
    achievements: [
      "Worked on PLC-based industrial automation, troubleshooting, and maintenance across plant systems.",
      "Assisted in the commissioning and ongoing maintenance of automation systems on the production floor.",
    ],
    stack: ["PLC Programming", "Industrial Automation", "Troubleshooting", "Maintenance"],
  },
  {
    company: "Biopan Scientific Pvt. Ltd.",
    location: "India",
    position: "Electronic & Design Engineer Intern",
    period: "2 months",
    achievements: [
      "Interned in the Embedded Systems domain, contributing to electronic and design engineering tasks.",
      "Applied circuit design and prototyping skills to real hardware development work.",
    ],
    stack: ["Embedded Systems", "Circuit Design", "PCB Design", "Prototyping"],
  },
  {
    company: "Pantech Solutions",
    location: "India",
    position: "PCB Design & Embedded Systems Intern",
    period: "Internship",
    achievements: [
      "Completed internships spanning PCB design, embedded system design, and IoT development.",
      "Built hands-on experience translating embedded hardware concepts into working prototypes.",
    ],
    stack: ["PCB Design", "Embedded Systems", "IoT"],
  },
];

export const education = [
  {
    institution: "Centre for Development of Advanced Computing (C-DAC)",
    location: "Pune, India",
    degree: "PGCP in Embedded System Design, Embedded Systems Design",
    period: "Feb 2026 - Aug 2026",
    achievements: [
      "Grade: A",
      "Embedded Systems & IoT Projects",
      "Secure OTA Firmware Management System for CAN-based ECU Networks",
      "ARM Cortex-M Programming and STM32 Development",
      "CAN Communication, UART, SPI, I2C, and Embedded Linux",
      "Embedded C Programming, RTOS learning, and problem solving",
      "Debugging, GNU Debugger, and communication protocols",
      "Placement preparation and hands-on industry-oriented laboratory sessions.",
    ],
  },
  {
    institution: "Government College of Engineering, Chhatrapati Sambhajinagar",
    location: "Maharashtra, India",
    degree: "B.Tech, Electrical, Electronic & Power Engineering",
    period: "2021 - 2025",
    achievements: [
      "Core Team Member and Director of Electronic Systems Execution & Documentation for Team Cybrotics.",
      "Organized the PCB Fabrication and Design Workshop at GECCS as Lead Event Planner and PCB Design Consultant.",
      "Served as Technical Workshop Organizer and Electronics & Software Integration Specialist at GECCS.",
      "Coordinated and participated in the Wings 2023 Roborace event.",
    ],
  },
  {
    institution: "Arts, Commerce, and Science College",
    location: "Chandrapur, India",
    degree: "HSC - 89%",
    period: "2019 - 2021",
    achievements: [
      "Achieved 89% in HSC",
      "Analytical thinking, problem solving, and mathematics foundation",
      "Time management, self-discipline, and effective communication",
      "Balanced academics with extracurricular activities",
    ],
  },
  {
    institution: "Lokmanya Tilak Vidyalaya",
    location: "Chandrapur, India",
    degree: "SSC - 71.80%",
    period: "2014 - 2019",
    achievements: [
      "Achieved 71.80% in SSC",
      "Strong learning ability and foundation across core subjects",
      "Communication, teamwork, and adaptability",
      "Developed discipline and basic computer literacy",
    ],
  },
];

export const skills = [
  {
    label: "Design software",
    items: ["KiCad", "EasyEDA", "Proteus", "DipTrace", "MATLAB", "Simulink", "Arduino IDE", "Canva"],
  },
  {
    label: "Core engineering",
    items: [
      "PCB Design & Manufacturing",
      "Printed Circuit Board (PCB) Design",
      "Analog Circuits",
      "Digital Circuit Design",
      "Embedded Systems",
      "Electronics",
      "Microcontrollers",
      "ESP32 Microcontrollers",
      "STM32",
      "Robot Programming",
      "Arduino Programming",
      "Bluetooth Low Energy (BLE)",
      "I2C",
      "UART",
      "PID Controller Systems",
      "IoT",
    ],
  },
  {
    label: "Programming",
    items: ["C", "Arduino", "Python"],
  },
  {
    label: "Professional training",
    items: [
      "Embedded C",
      "ARM Cortex-M3/M4",
      "Embedded Linux",
      "Linux Device Drivers",
      "RTOS",
      "Data Structures & Algorithms",
      "MATLAB",
      "Simulink",
    ],
  },
  {
    label: "Tools",
    items: ["MS Office", "Canva"],
  },
  {
    label: "Leadership",
    items: [
      "Team Management",
      "Teamwork",
      "Cross-functional Team Leadership",
      "Leadership",
      "Decision Making",
      "Communication",
      "Multi-tasking",
    ],
  },
];

export const selectedWork = [
  {
    title: "CDAC Secure OTA Firmware System",
    context: "Embedded Systems · Secure OTA",
    summary:
      "Designed and validated a secure over-the-air firmware update system for STM32F407-based ECU networks using CAN communication.",
    stack: ["STM32F407", "CAN", "Bootloader", "Embedded C", "CRC32", "Flash Management", "OTA"],
    photo: "/CDAC_OTA_Project.jpeg",
    documentLink: "/CDAC_OTA_Documentation.pdf",
    videoLink: "https://www.youtube.com/watch?v=VIDEO_ID",
    repoLink: "https://github.com/chetan1126/cdac-ota-firmware",
    description: [
      "Designed a secure OTA firmware management system for STM32F407-based ECU networks using CAN communication.",
      "Built a bootloader-driven architecture to manage application slot selection and safe application switching.",
      "Implemented sender (CAN_Tx) and receiver (CAN_Rx) firmware modules for end-to-end firmware transfer.",
      "Added CAN protocol framing with SYNC, START, DATA, and END packets for reliable update delivery.",
      "Used CRC32 and image-size validation to verify firmware integrity before activation.",
      "Enabled dual-slot flash update strategy to protect the active firmware during upgrades.",
      "Included retry, ACK/NACK, and metadata handling for robust update and rollback support.",
      "Developed and tested embedded C firmware for STM32F407 with practical bootloader jump logic and flash management.",
    ],
  },
  {
    title: "Team Cybrotics",
    context: "Competitive robotics · DD-Robocon",
    summary:
      "Core electronics leadership on a national robotics team, driving hardware execution and documentation across two competition cycles.",
    stack: ["PCB Design", "Arduino", "Team Management", "Documentation", "KiCad"],
    photo: "/Team_cybrotics_Bots_pic.webp",
    repoLink: "https://github.com/chetan1126/DD_ROBOCON_Projects",
    description: [
      "Directed Electronic Systems Execution and Documentation as a Core Team Member, currently building toward DD-ROBOCON 2025 in Mongolia.",
      "Led Team Management & Documentation for DD-ROBOCON 2023-24, achieving AIR 5 for Stage-1 Documentation and a Top 8 finish at Quarterfinal.",
      "Won the MathWorks Modeling Award (Runner-up) and the Robotics Society Award for leadership & innovation.",
      "Procured and managed electronic components and worked as Electronics Engineer to enhance the team's semi-automatic robot.",
    ],
    // videoId: "Av_Nhn243Ks",
    videoLink: "https://youtu.be/Av_Nhn243Ks",
  },
  {
    title: "TechnoXian",
    context: "Competitive robotics",
    summary:
      "Managed electronics operations for a multi-event robotics competition, building robots optimized for three different challenge formats.",
    stack: ["RoboSoccer", "Maze Solver", "Line Follower", "Circuit Design"],
    photo: "/2023_bots.jpg",
    repoLink: "https://github.com/chetan1126/technoxian-project",
    description: [
      "Served as Electronics Operations Manager for TechnoXian 2022-23, a national-level competitive robotics event.",
      "Developed robots optimized for RoboSoccer, Maze Solver, and Fast Line Follower categories.",
      "Achieved a Top 10 ranking at TechnoXian against competing engineering teams.",
    ],
  },
  {
    title: "Real-Time Inventory System",
    context: "IoT & Machine Learning",
    summary:
      "An IoT-based embedded system for real-time inventory monitoring, paired with machine learning for smarter stock decisions.",
    stack: ["IoT", "Machine Learning", "Embedded Systems", "Sensors"],
    photo: "/Real_Time_Inventory_System.jpeg",
    repoLink: "https://github.com/chetan1126/Real_Time_IoT_ML_Inventory_Monitoring",
    description: [
      "Designed and implemented an IoT-based embedded system for real-time inventory monitoring on the shop floor.",
      "Applied machine learning for demand forecasting, automated stock tracking, and inventory optimization.",
    ],
    // videoId: "K_7nE14X7p4",
    videoLink: "https://youtu.be/K_7nE14X7p4",

  },
];

export const awards = [
  {
    name: "MathWorks Modeling Award",
    issuer: "DD-ROBOCON 2024",
    date: "2024",
    type: "National",
    position: "Runner-up",
  },
  {
    name: "Robotics Society Award",
    issuer: "Leadership & Innovation in Robotics",
    date: "2024",
    type: "National",
    position: "Recipient",
  },
  {
    name: "DD-ROBOCON Quarterfinal",
    issuer: "DD-ROBOCON 2023-24",
    date: "2023-24",
    type: "National",
    position: "Top 8",
  },
  {
    name: "TechnoXian",
    issuer: "Competitive Robotics 2022-23",
    date: "2022-23",
    type: "National",
    position: "Top 10",
  },
];
