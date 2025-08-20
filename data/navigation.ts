export const navigationData = {
  mainNav: [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "/about", active: false },
    { name: "CSR", href: "/csr", active: false },
    { name: "Contact Us", href: "/contact", active: false },
    { name: "Rewards", href: "/rewards", active: false },
  ],

  subNav: [
    { name: "Products", hasDropdown: true },
    { name: "Solutions", href: "/solutions" },
    { name: "Automation", href: "/automation" },
    { name: "Education", href: "/education" },
    { name: "EV Charging", href: "/ev-charging" },
    { name: "Resources", href: "/resources" },
  ],

  productCategories: {
    Equipment: {
      subcategories: {
        "Welding Equipment": [
          "MIG Welders",
          "TIG Welders",
          "Stick Welders",
          "Battery Powered Welders",
          "Multi-Process Welders",
          "Multi-Operator Welders",
          "Engine Driven Welders",
          "Advanced Process Welders",
          "Submerged Arc Equipment",
          "Wire Feeders",
          "Weld Fume Control",
        ],
        "Cutting Equipment": ["Plasma Cutters", "Oxy-Fuel Equipment", "Cutting Torches", "Cutting Accessories"],
        "Guns and Torches": ["MIG Guns", "TIG Torches", "Plasma Torches", "Cutting Torches"],
        "Retail Equipment": ["Retail Displays", "Point of Sale", "Marketing Materials"],
        "Training Equipment": ["Welding Simulators", "Training Materials", "Educational Tools"],
        "Handheld Laser Equipment": ["Laser Welders", "Laser Cleaners", "Laser Accessories"],
      },
    },
    "Filler Metals": {
      subcategories: {
        "Stick Electrodes": [
          "Mild Steel Electrodes",
          "Low Alloy Electrodes",
          "Stainless Steel Electrodes",
          "Cast Iron Electrodes",
          "Aluminum Electrodes",
        ],
        "MIG Wires and TIG Rods": [
          "Mild Steel MIG Wire",
          "Stainless Steel MIG Wire",
          "Aluminum MIG Wire",
          "TIG Rods - Steel",
          "TIG Rods - Stainless",
          "TIG Rods - Aluminum",
        ],
        "Gas-Shielded Flux-Cored": ["Mild Steel Flux-Cored", "Low Alloy Flux-Cored", "Stainless Flux-Cored"],
        "Self-Shielded Flux-Cored": ["Outdoor Welding Wire", "All-Position Wire", "High Deposition Wire"],
        "Aluminum MIG and TIG": ["Pure Aluminum Wire", "Aluminum Alloy Wire", "Aluminum TIG Rods"],
        Hardfacing: ["Wear Resistant Electrodes", "Build-up Electrodes", "Maintenance Electrodes"],
        "Nickel Alloys": ["Inconel Products", "Monel Products", "Hastelloy Products"],
        "Stainless Alloys": ["304 Stainless Products", "316 Stainless Products", "Duplex Stainless Products"],
        "Submerged Arc": ["Submerged Arc Wire", "Submerged Arc Flux", "Wire-Flux Combinations"],
        "Metal-Cored Wires": ["Mild Steel Metal-Cored", "Low Alloy Metal-Cored", "Stainless Metal-Cored"],
        "Chrome-Moly Alloys": ["P5 Chrome-Moly", "P9 Chrome-Moly", "P22 Chrome-Moly"],
        "Buy America": ["Buy America Electrodes", "Buy America Wire", "Buy America Flux"],
      },
    },
    Automation: {
      subcategories: {
        "Robotic Systems": ["Welding Robots", "Robot Controllers", "Robot Accessories"],
        "Automated Solutions": ["Automated Welding Systems", "Custom Automation", "Integration Services"],
        "Control Systems": ["Welding Controllers", "Process Monitoring", "Data Collection"],
      },
    },
    "Safety/PPE": {
      subcategories: {
        "Protective Equipment": ["Welding Helmets", "Safety Glasses", "Protective Clothing", "Respiratory Protection"],
        "Safety Gear": ["Gloves", "Aprons", "Sleeves", "Safety Shoes"],
        "Compliance Solutions": ["Safety Training", "Compliance Documentation", "Safety Audits"],
      },
    },
    "Weld Fume Control": {
      subcategories: {
        "Extraction Systems": ["Portable Extractors", "Stationary Systems", "Central Systems"],
        Filtration: ["Filter Cartridges", "HEPA Filters", "Specialty Filters"],
        "Air Quality Solutions": ["Air Monitoring", "Ventilation Systems", "Clean Air Solutions"],
      },
    },
    "Accessories, Tools, Software": {
      subcategories: {
        "Welding Tools": ["Chipping Hammers", "Wire Brushes", "Measuring Tools", "Cutting Tools"],
        "Software Solutions": ["Welding Software", "Training Software", "Management Software"],
        "Maintenance Tools": ["Cleaning Supplies", "Maintenance Kits", "Replacement Parts"],
      },
    },
  },
}
