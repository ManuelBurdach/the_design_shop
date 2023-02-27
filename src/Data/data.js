//Image import
import fjallraven from "../Assets/images/1.png";
import tomons from "../Assets/images/d2.png";
import uconAcrobatics from "../Assets/images/u6.png";
import retrospec from "../Assets/images/u10.png";
import fellow from "../Assets/images/u9.png";
import candylabToys from "../Assets/images/h17.png";
import taschen from "../Assets/images/c3.png";
import sophieLovell from "../Assets/images/d7.png";
import nathanWilliams from "../Assets/images/c6.png";
import ugmonk from "../Assets/images/h13.png";
import corkcicle from "../Assets/images/h8.png";
import hermanMiller from "../Assets/images/h2.png";
import fieldNotes from "../Assets/images/d5.png";
import counterPrint from "../Assets/images/c5.png";
import grupa from "../Assets/images/h6.png";
import komono from "../Assets/images/u7.png";
import heyStudio from "../Assets/images/d4.png";
import blueBottleCompany from "../Assets/images/u11.png";
import bangOlufsen from "../Assets/images/h9.png";
import anthonyBurrill from "../Assets/images/p2.png";
import eamesStyle from "../Assets/images/h4.png";
import thamesHudson from "../Assets/images/c22.png";
import josefMüllerBrockmann from "../Assets/images/c1.png";
import herschel from "../Assets/images/u12.png";
import goodFuckingDesignAdvice from "../Assets/images/p3.png";
import apple from "../Assets/images/life-15.png";
import kinto from "../Assets/images/life-17.png";
import apple1 from "../Assets/images/life-16.png";
import menu from "../Assets/images/u8.png";
import normannCopenhagen from "../Assets/images/home-8.png";
import kardiel from "../Assets/images/home-10.png";
import soma from "../Assets/images/home-9.png";

//Array of Objects (Data)
const data = [
  {
    name: "Kanken Art Laptop 15' Special Edition Backpack",
    company: "Fjallraven",
    price: "$119.00",
    src: fjallraven,
    className: "big",
    href: "https://amzn.to/32MmHgL",
  },
  {
    name: "Swing Arm Wood Desk Lamp",
    company: "Tomons",
    price: "$36.00",
    src: tomons,
    className: "small",
    href: "https://amzn.to/2WX7vtD",
  },
  {
    name: "Hajo Backpack",
    company: "Ucon Acrobatics",
    price: "$89.00",
    src: uconAcrobatics,
    className: "mid small",
    href: "https://amzn.to/2I3WvXM",
  },
  {
    name: "Zed Bamboo Longboard",
    company: "Retrospec",
    price: "$60.00",
    src: retrospec,
    className: "small",
    href: "https://amzn.to/2YX3043",
  },
  {
    name: "Electric Pour-Over Kettle",
    company: "Fellow",
    price: "$149.00",
    src: fellow,
    className: "small",
    href: "https://amzn.to/2KfP3ee",
  },
  {
    name: "Woodie Vintage Car",
    company: "Candylab Toys",
    price: "$35.00",
    src: candylabToys,
    className: "mid small",
    href: "https://amzn.to/2FYB3zT",
  },
  {
    name: "Logo Modernism",
    company: "Taschen",
    price: "$60.00",
    src: taschen,
    className: "small",
    href: "https://www.bookdepository.com/Logo-Modernism-Jens-Muller-R-Roger-Remington/9783836545303/?a_aid=1991",
  },
  {
    name: "Dieter Rams: As Little Design as Possible",
    company: "Sophie Lovell",
    price: "$150.00",
    src: sophieLovell,
    className: "big",
    href: "https://amzn.to/2YQLnCV",
  },
  {
    name: "The Eye",
    company: "Nathan Williams",
    price: "$28.00",
    src: nathanWilliams,
    className: "small",
    href: "https://amzn.to/2I3lbQ7",
  },
  {
    name: "Gather Desk Organizer",
    company: "Ugmonk",
    price: "$149.00",
    src: ugmonk,
    className: "mid small",
    href: "https://amzn.to/2IifSvA",
  },
  {
    name: "Dipped Canteen",
    company: "Corkcicle",
    price: "$28.00",
    src: corkcicle,
    className: "small",
    href: "https://amzn.to/2G84CiT",
  },
  {
    name: "Sayl Office Chair White",
    company: "Herman Miller",
    price: "$599.00",
    src: hermanMiller,
    className: "small",
    href: "https://amzn.to/2YWPz3N",
  },
  {
    name: "Three Cherry Wood Notebook",
    company: "Field Notes",
    price: "$13.00",
    src: fieldNotes,
    className: "mid small",
    href: "https://amzn.to/2KhwTsz",
  },
  {
    name: "From Japan",
    company: "Counter Print",
    price: "$16.00",
    src: counterPrint,
    className: "small",
    href: "https://www.bookdepository.com/From-Japan/9780957081659?a_aid=1991",
  },
  {
    name: "Arigato Desk Lamp",
    company: "Grupa",
    price: "$380.00",
    src: grupa,
    className: "big",
    href: "http://www.grupaproducts.com/arigato/",
  },
  {
    name: "Winston Regal Watch",
    company: "Komono",
    price: "$58.00",
    src: komono,
    className: "small",
    href: "https://amzn.to/2CZiPxO",
  },
  {
    name: "Letter H Poster",
    company: "Hey Studio",
    price: "$45.00",
    src: heyStudio,
    className: "mid small",
    href: "https://heyshop.es/collections/home/products/h-hey",
  },
  {
    name: "Coffee Can",
    company: "Blue Bottle Company",
    price: "$11.00",
    src: blueBottleCompany,
    className: "small",
    href: "https://amzn.to/2UGLHEQ",
  },
  {
    name: "Beoplay H4",
    company: "Bang & Olufsen",
    price: "$160.00",
    src: bangOlufsen,
    className: "small",
    href: "https://amzn.to/2UFjEWp",
  },
  {
    name: "Make It Now",
    company: "Anthony Burrill",
    price: "$22.00",
    src: anthonyBurrill,
    className: "mid small",
    href: "https://amzn.to/2OTHEQg",
  },
  {
    name: "Black Side Chair",
    company: "Eames Style",
    price: "$54.00",
    src: eamesStyle,
    className: "small",
    href: "https://amzn.to/2UFHfGt",
  },
  {
    name: "Min: The New Simplicity in Graphic Design",
    company: "Thames & Hudson",
    price: "$28.00",
    src: thamesHudson,
    className: "big",
    href: "https://amzn.to/2Ij1IKA",
  },
  {
    name: "Grid systems in graphic design",
    company: "Josef Müller-Brockmann",
    price: "$42.00",
    src: josefMüllerBrockmann,
    className: "small",
    href: "https://amzn.to/2UxtLww",
  },
  {
    name: "Card Wallet",
    company: "Herschel",
    price: "$15.00",
    src: herschel,
    className: "mid small",
    href: "https://amzn.to/2I5vxiq",
  },
  {
    name: "Classic Advice Print Black",
    company: "Good Fucking Design Advice",
    price: "$30.00",
    src: goodFuckingDesignAdvice,
    className: "small",
    href: "https://goodfuckingdesignadvice.com/products/classic-advice-print",
  },
  {
    name: "Magic Mouse 2",
    company: "Apple",
    price: "$92.00",
    src: apple,
    className: "small",
    href: "https://amzn.to/2D3yZWX",
  },
  {
    name: "Travel Tumbler",
    company: "Kinto",
    price: "$34.00",
    src: kinto,
    className: "mid small",
    href: "https://amzn.to/2WTbsPL",
  },
  {
    name: "Magic Keyboard",
    company: "Apple",
    price: "$139.00",
    src: apple1,
    className: "small",
    href: "https://amzn.to/2GbCf4A",
  },
  {
    name: "Bottle Grinder",
    company: "Menu",
    price: "$75.00",
    src: menu,
    className: "big",
    href: "https://amzn.to/2WMJbdy",
  },
  {
    name: "Geo Thermos",
    company: "Normann Copenhagen",
    price: "$62.00",
    src: normannCopenhagen,
    className: "small",
    href: "https://amzn.to/2JLtxvk",
  },
  {
    name: "Womb Chair & Ottoman",
    company: "Kardiel",
    price: "$799.00",
    src: kardiel,
    className: "mid small",
    href: "https://amzn.to/2YdSBPy",
  },
  {
    name: "Water Filter Glass Carafe",
    company: "Soma",
    price: "$30.00",
    src: soma,
    className: "small",
    href: "https://amzn.to/2LCEfGP",
  },
];

export default data;
