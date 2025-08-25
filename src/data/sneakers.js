import jordan from "../assets/heroic.avif";
import adidas from "../assets/heroic.avif";
import heroic from "../assets/nike-air.avif";
import nike from "../assets/nike-air.avif";
import converse from "../assets/nike-air.avif";
import reebok from "../assets/nike-air.avif";
import newBalance from "../assets/nike-air.avif";
import asics from "../assets/product1.avif";
import vans from "../assets/nike-air.avif";
import fila from "../assets/nike-air.avif";
import yeezy from "../assets/nike-air.avif";
import underArmour from "../assets/nike-air.avif";
import skechers from "../assets/nike-air.avif";
import saucony from "../assets/nike-air.avif";
import hoka from "../assets/nike-air.avif";
import brooks from "../assets/nike-air.avif";
import mizuno from "../assets/nike-air.avif";
import onRunning from "../assets/nike-air.avif";
import timberland from "../assets/nike-air.avif";
import dcShoes from "../assets/nike-air.avif";

const sneakers = [
  {
    id: 1,
    name: "Air Jordan Max",
    price: "$200",
    category: "Premium",
    stock: 12,
    description:
      "Step up your sneaker game with unmatched cushioning and bold design.",
    features: [
      "Premium leather upper for durability",
      "Responsive Air cushioning",
      "Iconic streetwear-inspired design",
    ],
    images: [jordan, vans, jordan],
  },
  {
    id: 2,
    name: "Adidas RunFlex",
    price: "$120",
    category: "Mid-range",
    stock: 18,
    description: "Built for speed and comfort, perfect for all-day wear.",
    features: [
      "Flexible knit upper for breathability",
      "Boost midsole for ultimate energy return",
      "Lightweight and responsive for running",
    ],
    images: [asics],
  },
  {
    id: 3,
    name: "Puma Swift",
    price: "$80",
    category: "Budget",
    stock: 20,
    description: "Lightweight design and sleek style for an active lifestyle.",
    features: [
      "Soft mesh upper for ventilation",
      "Grippy rubber outsole for stability",
      "Budget-friendly performance sneaker",
    ],
    images: [heroic, heroic, heroic],
  },
  {
    id: 4,
    name: "Nike Air Zoom",
    price: "$150",
    category: "Premium",
    stock: 9,
    description: "Dynamic responsiveness and superior grip with every step.",
    features: [
      "Zoom Air units for extra bounce",
      "Multi-surface traction pattern",
      "Engineered for high-performance sports",
    ],
    images: [nike, nike, nike],
  },
  {
    id: 5,
    name: "Converse Classic",
    price: "$90",
    category: "Budget",
    stock: 25,
    description: "Timeless design meets everyday versatility and comfort.",
    features: [
      "Canvas upper with classic silhouette",
      "Durable rubber sole for longevity",
      "Iconic Chuck Taylor styling",
    ],
    images: [converse, converse, converse],
  },
  {
    id: 6,
    name: "Reebok StreetRun",
    price: "$110",
    category: "Mid-range",
    stock: 10,
    description: "Engineered for street style and maximum foot support.",
    features: [
      "Chunky retro-inspired design",
      "Foam cushioning for extra comfort",
      "Durable outsole for urban exploration",
    ],
    images: [reebok, reebok, reebok],
  },
  {
    id: 7,
    name: "New Balance FreshFoam",
    price: "$140",
    category: "Premium",
    stock: 15,
    description: "Experience next-level comfort with FreshFoam technology.",
    features: [
      "FreshFoam midsole cushioning",
      "Engineered mesh upper for breathability",
      "Stable ride perfect for long distances",
    ],
    images: [newBalance, newBalance, newBalance],
  },
  {
    id: 8,
    name: "ASICS Gel-Kayano",
    price: "$130",
    category: "Mid-range",
    stock: 11,
    description: "Stay light on your feet with advanced GEL cushioning.",
    features: [
      "GEL technology for shock absorption",
      "Ortholite sockliner for comfort",
      "Durable outsole with perfect grip",
    ],
    images: [asics, asics, asics],
  },
  {
    id: 9,
    name: "Vans Old Skool",
    price: "$85",
    category: "Budget",
    stock: 17,
    description: "Classic skate style redefined for modern everyday wear.",
    features: [
      "Signature side stripe design",
      "Durable suede and canvas combo",
      "Waffle outsole for extra traction",
    ],
    images: [vans, vans, vans],
  },
  {
    id: 10,
    name: "Fila Disruptor",
    price: "$95",
    category: "Budget",
    stock: 14,
    description: "Chunky soles meet cool retro vibes with unbeatable comfort.",
    features: [
      "Chunky rubber outsole for style and grip",
      "Soft insole for all-day wear",
      "Retro throwback silhouette",
    ],
    images: [fila, fila, fila],
  },
  {
    id: 11,
    name: "Yeezy Boost 350",
    price: "$300",
    category: "Premium",
    stock: 5,
    description: "Luxury meets comfort with Kanye’s signature sneaker design.",
    features: [
      "Primeknit upper for adaptive fit",
      "Boost cushioning for premium comfort",
      "Highly sought-after limited edition design",
    ],
    images: [yeezy, yeezy, yeezy],
  },
  {
    id: 12,
    name: "Under Armour Surge",
    price: "$115",
    category: "Mid-range",
    stock: 13,
    description: "Unleash your energy with lightweight power-packed sneakers.",
    features: [
      "Breathable mesh upper with strategic support",
      "High-rebound EVA midsole",
      "Perfect for gym and outdoor workouts",
    ],
    images: [underArmour, underArmour, underArmour],
  },
  {
    id: 13,
    name: "Skechers GoWalk",
    price: "$75",
    category: "Budget",
    stock: 22,
    description: "Effortless style meets cloud-like comfort in every step.",
    features: [
      "Air-Cooled Goga Mat cushioning",
      "Ultra-lightweight slip-on design",
      "Supportive arch comfort technology",
    ],
    images: [skechers, skechers, skechers],
  },
  {
    id: 14,
    name: "Saucony Endorphin",
    price: "$145",
    category: "Premium",
    stock: 7,
    description: "Designed for speed without compromising comfort and control.",
    features: [
      "PWRRUNPB cushioning for energy return",
      "SPEEDROLL tech for smooth transitions",
      "Breathable mesh with lightweight fit",
    ],
    images: [saucony, saucony, saucony],
  },
  {
    id: 15,
    name: "Hoka Clifton 8",
    price: "$160",
    category: "Premium",
    stock: 9,
    description: "Feel unstoppable with cushioned performance built to last.",
    features: [
      "Meta-Rocker design for smoother stride",
      "Lightweight EVA foam cushioning",
      "Extended heel crash pad for balance",
    ],
    images: [hoka, hoka, hoka],
  },
  {
    id: 16,
    name: "Brooks Ghost 14",
    price: "$155",
    category: "Premium",
    stock: 8,
    description: "Experience smooth transitions and breathable comfort.",
    features: [
      "DNA Loft cushioning for softness",
      "Segmentation crash pads for smoother landings",
      "Engineered mesh for airflow",
    ],
    images: [brooks, brooks, brooks],
  },
  {
    id: 17,
    name: "Mizuno Wave Rider",
    price: "$125",
    category: "Mid-range",
    stock: 12,
    description: "Performance-driven design for peak training sessions.",
    features: [
      "Wave Plate tech for propulsion",
      "U4ic midsole for responsive cushioning",
      "Ideal for both long runs and sprints",
    ],
    images: [mizuno, mizuno, mizuno],
  },
  {
    id: 18,
    name: "On Running Cloudflow",
    price: "$170",
    category: "Premium",
    stock: 10,
    description:
      "Run lighter, faster, and stronger with Swiss-engineered precision.",
    features: [
      "Helion superfoam for responsiveness",
      "CloudTec outsole for smooth landings",
      "Ultra-light build for marathon runners",
    ],
    images: [onRunning, onRunning, onRunning],
  },
  {
    id: 19,
    name: "Timberland Classic Boots",
    price: "$180",
    category: "Premium",
    stock: 6,
    description: "Rugged durability meets timeless outdoor elegance.",
    features: [
      "Premium waterproof leather construction",
      "Recycled PET lining for eco-consciousness",
      "Heavy-duty grip for any terrain",
    ],
    images: [timberland, timberland, timberland],
  },
  {
    id: 20,
    name: "DC Shoes Court Graffik",
    price: "$100",
    category: "Mid-range",
    stock: 16,
    description: "Street-ready design packed with bold comfort and flair.",
    features: [
      "Padded collar and tongue for comfort",
      "Abrasion-resistant sticky rubber outsole",
      "Skate-ready durability",
    ],
    images: [dcShoes, dcShoes, dcShoes],
  },
];

export default sneakers;
