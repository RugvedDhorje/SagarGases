import logo from "./main__logo.png";
import main_background from "./background_main.png";
import bg_img_1 from "./bg_img_1.png";
import bg_img_2 from "./bg_img_2.jpg";
import bg_img_3 from "./bg_img_3.png";
import bg_img_4 from "./bg_img_4.jpg";
import bg_img_5 from "./bg_img_5.png";
import Food from "./Food.png";
import Glass from "./glass.png";
import Health from "./healthcare.png";
import Steel from "./steel.png";
import Metal from "./metal_processing.png";
import img_1 from "./img_1.svg";
import img_2 from "./img_2.svg";
import img_3 from "./img_3.svg";
import img_4 from "./img_4.svg";
import serviceBg_1 from "./service_bg1.png";
import serviceBg_2 from "./service_bg2.png";
import serviceBg_3 from "./service_bg3.png";
import serviceBg_4 from "./service_bg4.png";
import main_logo from "./Logo.svg";
import Product_page_cylinder from "./productPage_cylinder.png";
import productPage_service from "./productPage_service.png";
import productPage_card from "./productPage_card.png";
import product_img from "./product_img.png";
import productPage_bg from "./productpage_bg.png";
import productPage_bg_2 from "./productpage_bg_2.png";
import infrastructure_1 from "./infrastructure_1.png";
import infrastructure_2 from "./infrastructure_2.png";
import infrastructure_3 from "./infrastructure_3.png";
import factory_img from "./factory.png";




export const assets = {
  logo,
  main_background,
  bg_img_1,
  bg_img_2,
  bg_img_3,
  bg_img_4,
  bg_img_5,
  img_1,
  img_2,
  img_3,
  img_4,
  main_logo,
  Product_page_cylinder,
  productPage_service,
  productPage_card,
  product_img,
  productPage_bg,
  productPage_bg_2,
  serviceBg_1,
  serviceBg_2,
  serviceBg_3,
  serviceBg_4,
  infrastructure_1,
  infrastructure_2,
  infrastructure_3,
  factory_img
};

export const Industry_List = [
  {
    img: Food,
    name: "Food",
  },
  {
    img: Glass,
    name: "Glass",
  },
  {
    img: Health,
    name: "HealthCare",
  },
  {
    img: Steel,
    name: "Steel",
  },
  {
    img: Metal,
    name: "MetalProcessing",
  },
];

export const Product_List = [
  {
    id: 1,
    img: product_img,
    symbol: "LOX",
    name: "Liquid Oxygen",
    description:
      "Liquid Oxygen (LOX) is a pale blue, cryogenic liquid used in various medical and industrial applications. It is essential for processes requiring enhanced oxidation and is stored in cryogenic containers due to its boiling point of -183°C.",
    application: [
      "Healthcare: Vital for life support and respiratory therapy in hospitals.",
      "Steelmaking: Enhances combustion in blast furnaces and electric arc furnaces.",
      "Chemical Processing: Used in oxidation for efficient chemical production."
    ],
    supply:
      "At Sagar Gases, we supply high-purity Liquid Oxygen in bulk cryogenic tankers for large-scale operations and compressed oxygen in high-pressure cylinders for smaller, portable needs.Our reliable distribution network ensures safe and timely deliveries for both medical and industrial applications nationwide.",
  },
  {
    id: 2,
    img: product_img,
    symbol: "N₂",
    name: "Nitrogen",
    description:
      "Nitrogen (N₂) is a colorless, odorless, inert gas that makes up 78% of the Earth’s atmosphere. It is highly valued for its non-reactive properties and is used across a variety of industries to create inert environments and for cryogenic cooling.",
    application: [
      "Inerting & Purging: Used to displace oxygen in chemical reactors and oil pipelines, preventing reactions that could lead to combustion.",
      "Cryogenic Cooling: Applied in food freezing, metal shrink-fitting, and biological specimen preservation.",
      "Laser Cutting: Acts as an inert gas in laser cutting for precision manufacturing, especially in metals."
    ],
    supply:
      "We provide high-purity liquid and compressed nitrogen in various formats, including bulk liquid nitrogen delivered via cryogenic tankers and high-pressure nitrogen cylinders. Our reliable distribution network ensures timely delivery to industrial plants, labs, and medical facilities across India.",
  },
  {
    id: 3,
    img: product_img,
    symbol: "Ar",
    name: "Argon",
    description:
      "Argon (Ar) constitutes just under 1% of the Earth's atmosphere. It’s a colorless, odorless, non-flammable noble gas, making it ideal for inert environments. Argon is widely used in industrial applications that require protection from atmospheric gases, ensuring high-quality output in processes like welding and metallurgy.",
    application: [
      "Welding: Used in TIG and MIG welding to shield the weld area.",
      "Steelmaking: Critical in Ladle Refining Furnaces (LRF) and AOD furnaces for preventing oxidation during stainless steel production.",
      "Electronics: Ensures stable environments for semiconductor and microchip manufacturing.",
      "Lighting: Fills incandescent and fluorescent bulbs, extending their lifespan.",
      "Food Packaging: Displaces oxygen to preserve food and beverages."
    ],
    supply:
      "We supply high-purity Argon in various formats. Liquid Argon is delivered in bulk via cryogenic tankers for large industrial operations, while compressed Argon is available in high-pressure cylinders for smaller, more specialized uses.Our reliable distribution ensures timely deliveries to industries across the country.",
  },
  {
    id: 4,
    img: product_img,
    symbol: "N₂O",
    name: "Nitrous Oxide",
    description:
      "Nitrous Oxide (N₂O), commonly known as laughing gas, is a colorless gas with a slightly sweet odor. It is widely used in medical anesthesia and food processing. Its anesthetic and analgesic properties make it essential in surgery and dentistry.",
    application: [
      "Medical Anesthesia: Used in hospitals and dental practices as a mild anesthetic and pain reliever during surgeries and procedures.",
      "Food Industry: Used as a propellant in whipped cream dispensers and for aerosolized food products.",
      "Chemical Industry: Applied in oxidation processes in chemical manufacturing."
    ],
    supply:
      "We offer medical-grade Nitrous Oxide in compressed gas cylinders for healthcare and food-grade cylinders for the food industry. Our supply is compliant with stringent safety standards, ensuring reliable service across hospitals, dental clinics, and food processing units.",
  },
  {
    id: 5,
    img: product_img,
    symbol: "O₂",
    name: "Medical Oxygen",
    description:
      "Medical Oxygen is a high-purity form of oxygen used in healthcare to support breathing and life-sustaining treatments. It is essential in medical settings for oxygen therapy, helping patients with respiratory conditions. Delivered as a gas or liquid, Medical Oxygen meets strict Indian Pharmacopoeia (IP) standards, ensuring it is safe for human use.",
    application: [
      "Respiratory Therapy: Used in ICUs, emergency care, and ambulances to treat patients with conditions like COPD, asthma, and COVID-19.",
      "Surgical Support: Provides oxygen during and after surgical procedures, especially in operating rooms.",
      "Home Oxygen Therapy: Delivered to patients at home requiring long-term oxygen therapy for chronic conditions."
    ],
    supply:
      "At Sagar Gases, we provide medical-grade oxygen in various formats to ensure a constant and safe supply for healthcare facilities. Our bulk liquid oxygen is delivered through cryogenic tankers to hospitals, while compressed oxygen cylinders are available in portable sizes for emergency use and home therapy.Our extensive distribution network guarantees safe, on-time delivery to hospitals, clinics, and other healthcare providers across India.",
  },
  {
    id: 6,
    img: product_img,
    symbol: "H₂",
    name: "Hydrogen",
    description:
      "Hydrogen (H₂) is the lightest and most abundant element in the universe. It is a key component in various industrial processes, including energy production and chemical processing. Hydrogen is increasingly gaining importance in clean energy due to its use in fuel cells.",
    application: [
      "Fuel Cells: Hydrogen powers fuel cells, generating clean energy for vehicles and power plants.",
      "Chemical Processing: Used in the production of ammonia and methanol and in refining petroleum.",
      "Heat Treatment: Acts as a reducing agent in metal heat treatment to remove oxidation and ensure quality."
    ],
    supply:
      "We supply high-purity Hydrogen in compressed gas cylinders and bulk liquid form. Our hydrogen delivery system is designed to meet the needs of industries, energy plants, and research laboratories across India, ensuring safe and timely service.",
  },
  {
    id: 7,
    img: product_img,
    symbol: "O°",
    name: "Zero Air",
    description:
      "Zero Air is a purified air product with zero hydrocarbons, making it essential for applications that require clean, contaminant-free environments. It is primarily used for calibration and testing in laboratories and industrial settings where air quality and precision are critical.",
    application: [
      "Environmental Testing: Used for calibrating air quality monitors and gas detectors.",
      "Gas Analyzers: Ensures accuracy in calibrating gas analyzers by providing hydrocarbon-free air.",
      "Laboratories: Supports analytical instruments like chromatographs by maintaining a pure, controlled air environment."
    ],
    supply:
      "We supply high-purity Zero Air in various formats, including compressed gas cylinders. Our Zero Air meets stringent purity standards, making it ideal for environmental labs, calibration stations, and other industrial testing needs. Reliable distribution ensures timely delivery for both small and large operations across industries.",
  },
  {
    id: 8,
    img: product_img,
    symbol: "CO₂",
    name: "Carbon Dioxide",
    description:
      "Carbon Dioxide (CO₂) is a versatile gas used across multiple industries for its preservative and inert properties. It is colorless, odorless, and non-flammable, making it suitable for applications in food processing, fire suppression, and welding.",
    application: [
      "Food & Beverage: Used for carbonating beverages like soda and preserving food in modified atmosphere packaging (MAP).",
      "Fire Suppression: A key component in fire extinguishers, especially for electrical and chemical fires.",
      "Welding: Acts as a shielding gas in MIG welding, protecting the weld area from contamination."
    ],
    supply:
      "We offer high-purity CO₂ in compressed gas cylinders and bulk liquid CO₂ for large-scale industrial needs. Our flexible delivery network ensures reliable, timely service for food and beverage manufacturers, welding workshops, and fire safety providers across India.",
  },
  {
    id: 9,
    img: product_img,
    symbol: "C₂H₂",
    name: "Dissolved Acetylene",
    description:
      "Dissolved Acetylene (C₂H₂) is a high-energy fuel gas used for welding and cutting due to its ability to produce one of the hottest flames among commonly available gases. Dissolved in a solvent within cylinders, it is safe for transport and storage, making it a preferred choice for metalworking applications.",
    application: [
      "Welding & Cutting: The primary fuel gas for oxy-acetylene cutting and welding, particularly in metal fabrication.",
      "Automotive Repair: Used in welding and cutting for vehicle repairs and metal bodywork.",
      "Metalworking: Ideal for high-precision cutting in metal fabrication industries."
    ],
    supply:
      "We provide Dissolved Acetylene in safe, high-pressure cylinders, ensuring that industries have access to this critical fuel gas for cutting and welding tasks. Available in a range of cylinder sizes, we deliver solutions that meet both small workshops and large industrial operations.",
  },
  {
    id: 10,
    img: product_img,
    symbol: "NH₃",
    name: "Ammonia",
    description:
      "Ammonia (NH₃) is a pungent gas used widely in agriculture and refrigeration due to its effectiveness as a fertilizer and coolant. It is colorless but highly reactive, making it crucial in chemical production and industrial cooling systems.",
    application: [
      "Agriculture: Key ingredient in fertilizers, promoting crop growth and yield in commercial farming.",
      "Refrigeration: Used as a refrigerant in industrial cooling systems due to its high efficiency.",
      "Chemical Processing: Applied in the production of cleaning products, plastics, and other chemicals."
    ],
    supply:
      "We provide anhydrous ammonia in compressed cylinders and bulk tanks for industrial use. Our distribution network ensures safe and compliant delivery to agricultural farms, chemical plants, and industrial cooling facilities nationwide.",
  }
];

export const Service_List = [
  {
    service: "one",
    name: "Setting up Tanks for Hospital and Industries",
    img: product_img,
    description:
      "Sagar Gases provides expert solutions for setting up gas storage tanks in hospitals and industries. With decades of experience in handling cryogenic liquids and compressed gases, we design and install tanks that ensure safe and efficient storage of gases like Liquid Oxygen, Nitrogen, and Carbon Dioxide.",
    application: [
      "Hospitals: Installation of Liquid Medical Oxygen (LMO) tanks to ensure uninterrupted oxygen supply for patients.",
      "Industries: Cryogenic tanks for storage of nitrogen, argon, and other gases in steel, chemical, and pharmaceutical sectors.",
    ],
    supply: [
      "Turnkey Installation: Complete solutions from design to installation and maintenance.",
      "Safety Compliance: Our tanks meet the highest safety standards required by hospitals and industrial facilities.",
      "Customized Solutions: Tailored setups for various storage capacities and gas types.",
    ],
  },
  {
    service: "two",
    name: "Installation of Tanks and Refilling Stations",
    img: product_img,
    description:
      "We specialize in the installation of gas tanks and refilling stations for both medical and industrial applications. Our refilling stations are designed to safely and efficiently refill gas cylinders for hospitals, laboratories, and industries.",
    application: [
      "Medical Refilling Stations: Ensures safe refilling of oxygen cylinders for hospitals, meeting healthcare standards.",
      "Industrial Refilling: Refilling stations for nitrogen, CO₂, and other gases in manufacturing and processing plants.",
    ],
    supply: [
      "End-to-End Installation: From planning to setup and ongoing support, we handle every stage.",
      "State-of-the-Art Equipment: Use of modern technology to ensure efficient and safe refilling processes.",
      "Reliable Support: 24/7 maintenance and on-call support for emergency needs.",
    ],
  },
  {
    service: "three",
    name: "MGPS (Medical Gas Pipeline System)",
    img: product_img,
    description:
      "Our Medical Gas Pipeline Systems (MGPS) are designed for the seamless delivery of medical gases like oxygen, nitrous oxide, and compressed air to various sections of healthcare facilities, including ICUs, operation theaters, and wards.",
    application: [
      "Hospitals: Provide centralized medical gas distribution for oxygen therapy and other critical applications.",
      "Ambulances: Setup of gas systems for emergency vehicles to deliver oxygen and medical gases on the move.",
    ],
    supply: [
      "Safe and Reliable: Our systems comply with all healthcare regulations and safety standards.",
      "Custom Design: Tailored pipeline systems to meet the specific needs of large hospitals and small clinics.",
      "Comprehensive Service: From design to installation, we provide full MGPS solutions.",
    ],
  },
  {
    service: "four",
    name: "AMC & CMS for MGPS and PSA Plants",
    img: product_img,
    description:
      "We provide Annual Maintenance Contracts (AMC) and Comprehensive Maintenance Services (CMS) for Medical Gas Pipeline Systems (MGPS) and Pressure Swing Adsorption (PSA) plants. Our goal is to ensure the continuous and safe operation of your gas supply systems.",
    application: [
      "Preventive Maintenance: Regular inspections and upkeep to prevent downtime.",
      "24/7 Support: On-call support and emergency services to resolve issues immediately.",
      "Performance Monitoring: Continuous monitoring to optimize system performance and ensure compliance with industry standards.",
    ],
    supply: [
      "Expert Maintenance: Our team of specialists provides comprehensive support for PSA plants and MGPS systems.",
      "Cost-Effective Plans: Tailored maintenance packages that minimize operational costs and downtime.",
      "Compliance and Safety: Ensures all systems meet regulatory standards for healthcare and industrial operations.",
    ],
  },
];

export const Cylinder_List = [
  {
    cylinder_Id: 1,
    img: product_img,
    name: "Liquid Cylinder",
    description:
      "Liquid Cylinders are designed for the safe storage and transport of cryogenic liquids, such as liquid oxygen, nitrogen, and argon. They maintain gases in their liquid state at extremely low temperatures, ensuring efficient and large-scale delivery to industries and healthcare facilities.",
    application: [
      "Healthcare: Supplies liquid oxygen to hospitals and medical centers for respiratory therapy and oxygen therapy.",
      "Industrial: Used in steel manufacturing, welding, and chemical processing, where large volumes of gases like liquid nitrogen are required.",
      "Laboratories: Essential for cryogenic experiments and biological specimen preservation.",
    ],
    supply:
      "We provide high-capacity Liquid Cylinders in various sizes for industrial and medical applications. Our network ensures reliable delivery to meet both small and large-scale needs.",
  },
  {
    cylinder_Id: 2,
    img: product_img,
    name: "Jumbo Cylinder",
    description:
      "Jumbo Cylinders are large-capacity gas cylinders designed for industries that require bulk quantities of compressed gases. These cylinders are ideal for businesses needing continuous gas supply without frequent refills.",
    application: [
      "Manufacturing: Used in processes like laser cutting, metal fabrication, and welding, where large volumes of gases like oxygen, nitrogen, or argon are essential.",
      "Chemical Plants: Provide bulk gas supply for chemical reactions and processing.",
      "Food & Beverage: Used for applications like food preservation with CO₂ and nitrogen for packaging.",
    ],
    supply:
      "We offer Jumbo Cylinders in various capacities, tailored for high-demand industries. Our cylinders are built to industry standards for safe storage and handling of compressed gases.",
  },
  {
    cylinder_Id: 3,
    img: product_img,
    name: "Small Cylinder",
    description:
      "Small Cylinders are portable and lightweight, providing a flexible gas solution for smaller-scale applications. These cylinders are suitable for laboratories, medical facilities, and industrial operations where space and mobility are critical.",
    application: [
      "Medical Use: Supplies oxygen for home oxygen therapy and emergency medical services.",
      "Laboratories: Provides specialty gases for analytical testing and research purposes.",
      "Welding and Metalwork: Used in smaller workshops for cutting and welding operations requiring precision.",
    ],
    supply:
      "We supply Small Cylinders in various sizes, ensuring the right amount of gas for portable or specialized applications. They are easy to transport and handle, making them ideal for fieldwork or mobile services.",
  },
  {
    cylinder_Id: 4,
    img: product_img,
    name: "Tanks of all Sizes",
    description:
      "We offer tanks in a range of sizes to meet diverse customer needs, from large bulk storage tanks for industrial use to smaller tanks for laboratories and hospitals. These tanks are designed for storing both liquefied gases and compressed gases.",
    application: [
      "Industrial Storage: Used in manufacturing plants, chemical processing, and refining, where large volumes of gases like oxygen and nitrogen are required.",
      "Healthcare: Provides liquid oxygen for hospitals, ensuring a reliable supply for patients.",
      "Laboratories and Research: Smaller tanks are perfect for cryogenic applications and specialized testing in scientific labs.",
    ],
    supply:
      "We provide tanks in a wide range of sizes, from small portable tanks to large industrial tanks, catering to the specific needs of industries, healthcare, and research facilities. Our tanks are built to the highest safety standards and are available for immediate delivery.",
  },
];
