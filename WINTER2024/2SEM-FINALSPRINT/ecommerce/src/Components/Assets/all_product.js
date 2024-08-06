import tv1_img from "./tv1.jpg";
import tv2_img from "./tv2.jpg";
import tv3_img from "./tv3.jpg";
import tv4_img from "./tv4.jpeg";
import tv5_img from "./tv5.jpg";
import tv6_img from "./tv6.webp";
import tv7_img from "./tv7.avif";
import lap1_img from "./lap1.avif";
import lap2_img from "./lap2.avif";
import lap3_img from "./lap3.avif";
import lap4_img from "./lap4.avif";
import lap5_img from "./lap5.webp";
import lap6_img from "./lap6.jpg";
import lap7_img from "./lap7.png";
import lap8_img from "./lap8.jpg";
import lap9_img from "./lap9.jpeg";
import lapban_img from "./lapban.webp";
import ban_img from "./ban.webp";
import av1_img from "./av1.webp";
import av2_img from "./av2.webp";
import av3_img from "./av3.webp";
import av4_img from "./av4.webp";
import av5_img from "./av5.avif";
import av6_img from "./av6.jpg";


// tv&monitors
// audio&videos
// laptops&tablets
let all_product = [
  {
    id: 1,
    name: "Acer 31.5 inches FHD 75Hz 1ms GTG Curved VA LED Monitor (ED320QR BI) - Black",
    category: "tv&monitors",
    image: tv1_img,
    new_price: 60.0,
    old_price: 255.00,
  },
  {
    id: 2,
    name: "Samsung 27 FHD 75Hz 5ms GTG IPS LED FreeSync Monitor (LF27T350FHNXZA) - Dark Blue Grey",
    category: "tv&monitors",
    image: tv2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "LG 43 inches 4K UHD HDR LED webOS Smart TV (43UQ7590PUB) - 2022 - Dark Iron Grey",
    category:"tv&monitors",
    image: tv3_img,
    new_price: 100.0,
    old_price: 499.99,
  },
  {
    id: 4,
    name: "Samsung Odyssey G8 34inches WQHD 175Hz 0.1ms GTG Curved OLED Gaming Monitor (LS34BG850SNXZA) -Exclusive Retail Partner",
    category:"tv&monitors",
    image: tv4_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 5,
    name: "Samsung 55 inches FHD 75Hz 5ms GTG IPS LED FreeSync Monitor (LF27T350FHNXZA) - Dark Blue Grey",
    category: "tv&monitors",
    image: tv5_img,
    new_price: 85.0,
    old_price: 1199.99,
  },
  {
    id: 6,
    name: "LG 29 FHD 75Hz 5ms GTG IPS LED FreeSync Gaming Monitor (29WP60G-B) - Black - Only at Best Buy",
    category: "tv&monitors",
    image: tv6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "LG 29 FHD 75Hz 5ms GTG IPS LED FreeSync Gaming Monitor (29WP60G-B) - Black - Only at Best Buy",
    category: "tv&monitors",
    image: tv7_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Apple MacBook Air (2022) 13.6 inches,Touch ID (2022) - Midnight (Apple M2 Chip / 256GB SSD / 8GB RAM) - Eng",
    category: "laptops&tablets",
    image: lap1_img,
    new_price: 50.0,
    old_price: 1099.99,
  },
  {
    id: 9,
    name: "Apple MacBook Pro (2022) 13.6 inches,Touch ID (2023) ",
    category:  "laptops&tablets",
    image: lap2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Samsung Odyssey G8 34 inches WQHD 175Hz 0.1ms GTG Curved OLED Gaming Monitor (LS34BG850SNXZA) -Exclusive Retail Partner",
    category: "laptops&tablets",
    image: lap3_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Apple MacBook Air (2022) 13.6 inches,Touch ID (2024) ",
    category: "laptops&tablets",
    image: lap4_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Apple iPad 10.9 256GB with Wi-Fi 6 (10th Generation) - Silver ",
    category: "laptops&tablets",
    image: lap5_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "DUEX Plus 13.3inches 1080p HD 60Hz 10ms IPS LCD Portable Monitor (MP-101-1006P01) - Black",
    category:  "laptops&tablets",
    image: lap6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "TUTT FHD 14inches Portable Laptop Monitor Screen Triple Extender 1080P IPS Built-in Stand and Speakers, HDMI/Type-C Plug and Play Display for 13-17inches Laptops Mac Window Android Linux",
    category: "laptops&tablets",
    image: lap7_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "ASUS ZenScreen 15.6 inches FHD 60Hz 1ms GTG OLED Portable Monitor (MQ16AH) - Black",
    category: "laptops&tabletss",
    image: lap8_img,
    new_price: 85.0,
    old_price: 469.99,
  },
  {
    id: 16,
    name: "Apple iPad 10.9 inches 256GB with Wi-Fi 6 (10th Generation) - Silver",
    category: "laptops&tablets",
    image: lap9_img,
    new_price: 85.0,
    old_price: 579.99,
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category:  "laptops&tablets",
    image: lapban_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Sony Bravia OLED",
    category:"tv&monitors",
    image: ban_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Apple iPhone 13 128GB",
    category: "audio&videos",
    image: av1_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Open Box - Beats By Dr. Dre Fit Pro In-Ear Noise Cancelling True Wireless Earbuds - Black",
    category: "audio&videos",
    image: av2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: " Apple Watch Ultra 2 (GPS + Cellular) 49mm Titanium Case with Blue Ocean Band",
    category: "audio&videos",
    image: av3_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: " Apple Watch SE (GPS) 40mm Starlight Aluminum Case with Starlight Sport Band - Small / Medium",
    category:"audio&videos",
    image: av4_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "PlayStation VR2",
    category:"audio&videos",
    image: av5_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Beats by Dr. Dre Studio3 Over-Ear Noise Cancelling Bluetooth Headphones - Black - OPEN BOX",
    category: "audio&videos",
    image: av6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  ];

export default all_product;
