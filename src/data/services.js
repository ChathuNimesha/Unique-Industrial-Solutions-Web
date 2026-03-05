// Import service images
import protectiveGear from "../assets/Protective-Gear.png";
import industrialEnvironmental from "../assets/Industrial Environmental.jpg";
import wastewaterTreatment from "../assets/WastewaterTreatment.jpg";
import industrialEngineering from "../assets/Industrial Engineering Projects.jpg";
import roofLifelines from "../assets/Roof Lifelines.jpg";
import gasAnalyzers from "../assets/Gas Analyzers.jpg";
import industrialChemicals from "../assets/Industrial Chemicals.jpg";
import walkthroughSurveys from "../assets/Walkthrough Surveys.jpg";
import safetyTrainings from "../assets/Industrial Safety Trainings.jpg";
import fireProtection from "../assets/Fire Protection & Detection.jpg";
import supplyMachines from "../assets/Supply Machines & Machinery Parts.jpg";

// ================= SERVICE DATA =================
const servicesData = [
    {
        id: "ppe",
        title: "Personal Protective Equipment",
        image: protectiveGear,
        description:
            "We provide high-quality certified personal protective equipment designed to ensure maximum worker safety across industrial environments.",
        features: [
            "Certified safety helmets & gloves",
            "Industrial-grade safety shoes",
            "Respiratory & face protection",
            "Customized PPE solutions",
        ],
    },
    {
        id: "environmental",
        title: "Industrial Environmental Solutions",
        image: industrialEnvironmental,
        description:
            "Comprehensive environmental protection systems to ensure regulatory compliance and sustainable industrial operations.",
        features: [
            "Pollution control systems",
            "Waste management solutions",
            "Environmental audits",
            "Regulatory compliance support",
        ],
    },
    {
        id: "wastewater",
        title: "Water & Wastewater Treatment Plant",
        image: wastewaterTreatment,
        description:
            "Design, installation, and maintenance of water and wastewater treatment systems for industrial and commercial operations.",
        features: [
            "Custom treatment plant design",
            "Effluent treatment systems",
            "Reverse osmosis & filtration",
            "Ongoing maintenance & monitoring",
        ],
    },
    {
        id: "engineering",
        title: "Industrial Engineering Projects",
        image: industrialEngineering,
        description:
            "Turnkey industrial engineering solutions covering system design, installation, testing, and commissioning.",
        features: [
            "End-to-end project management",
            "System design & engineering",
            "Installation & commissioning",
            "Testing & quality assurance",
        ],
    },
    {
        id: "roof-lifelines",
        title: "Roof Lifelines",
        image: roofLifelines,
        description:
            "Certified roof lifeline systems for fall protection, ensuring worker safety during high-risk operations at height.",
        features: [
            "Certified fall arrest systems",
            "Flexible & rigid lifeline options",
            "Site-specific safety design",
            "Installation & annual inspections",
        ],
    },
    {
        id: "gas-analyzers",
        title: "Gas Analyzers",
        image: gasAnalyzers,
        description:
            "Reliable gas detection and analysis equipment for monitoring industrial gases and ensuring a safe working environment.",
        features: [
            "Fixed & portable gas detectors",
            "Multi-gas monitoring systems",
            "Calibration & maintenance support",
            "Real-time data logging",
        ],
    },
    {
        id: "chemicals",
        title: "Industrial Chemicals",
        image: industrialChemicals,
        description:
            "Specialized chemicals for water treatment, cleaning, and industrial processes supplied with full quality assurance.",
        features: [
            "Water treatment chemicals",
            "Industrial cleaning agents",
            "Process chemicals & reagents",
            "Safe handling & MSDS support",
        ],
    },
    {
        id: "surveys",
        title: "Walkthrough Surveys",
        image: walkthroughSurveys,
        description:
            "Comprehensive onsite surveys to identify hazards, evaluate risk, and recommend corrective safety actions.",
        features: [
            "Onsite hazard identification",
            "Risk assessment reports",
            "Corrective action recommendations",
            "Follow-up compliance checks",
        ],
    },
    {
        id: "safety-trainings",
        title: "Industrial Safety Trainings",
        image: safetyTrainings,
        description:
            "Professional workplace safety training programs including fire safety, PPE usage, and emergency response.",
        features: [
            "Fire safety & evacuation drills",
            "Correct PPE usage training",
            "Emergency response procedures",
            "Customized training modules",
        ],
    },
    {
        id: "fire-protection",
        title: "Fire Protection & Detection",
        image: fireProtection,
        description:
            "Fire detection systems, extinguishers, alarms, and preventive solutions to safeguard industrial facilities.",
        features: [
            "Fire alarm & detection systems",
            "Suppression & sprinkler systems",
            "Portable fire extinguishers",
            "Regular servicing & compliance",
        ],
    },
    {
        id: "machinery",
        title: "Supply Machines & Machinery Parts",
        image: supplyMachines,
        description:
            "Industrial machines, tools, and genuine spare parts sourced from trusted global manufacturers.",
        features: [
            "OEM & aftermarket spare parts",
            "Industrial machine supply",
            "Global sourcing & procurement",
            "Warranty & after-sales support",
        ],
    },
];

export default servicesData;
