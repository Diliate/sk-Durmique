import image1 from "../assets/images/Specialservice1.jpg";
import image2 from "../assets/images/Specialservice2.jpg";
import image3 from "../assets/images/Specialservice3.jpg";
import image4 from "../assets/images/Specialservice4.jpg";
import image5 from "../assets/images/Specialservice5.jpg";
import image6 from "../assets/images/Specialservice6.jpg";

// Skin Care Images
import acne from "../assets/images/servicedk1.jpeg";
import melasma from "../assets/images/servicepage2.jpg";
import pigmentation from "../assets/images/servicepage5.jpg";
import freckles from "../assets/images/servicepage4.jpg";
import pores from "../assets/images/servicepage1.jpg";
import skintag from "../assets/images/servicepage6.jpg";
import stretchmarks from "../assets/images/servicepage7.jpg";

// Hair Care Images
import hairloss from "../assets/images/servicepage8.jpg";
import greyhair from "../assets/images/servicepage9.jpg";
import dandruff from "../assets/images/servicepage10.jpg";

// Common Skin Problems
import vitiligo from "../assets/images/vitilligo.png";
import psoriasis from "../assets/images/psoriasis.png";
import fungal from "../assets/images/fungal-infection.png";
import bacterial from "../assets/images/bacterial-infection.png";
import eczema from "../assets/images/eczema.png";
import warts from "../assets/images/servicepage6.jpg";

// SKIN REJUVINATION
import dermaroller from "../assets/images/servicepage17.jpg";

// OLD AGE RELATED SKIN PROBLEMS
import antiwrinkle from "../assets/images/servicepage18.jpg";
import mnrf from "../assets/images/servicepage12.jpg";

export const normalservicedetails = [
  {
    id: 1,
    src: image1,
    title: "Skin Care",
    details: {
      images: [
        acne,
        melasma,
        pigmentation,
        freckles,
        pores,
        skintag,
        stretchmarks,
      ],
      titles: [
        "Acnes & Acnescar",
        "Melasma",
        "Pigmentation on face",
        "Freckles",
        "Open or Large pores",
        "Skin tags",
        "Stretch marks",
      ],
    },
  },
  {
    id: 2,
    src: image2,
    title: "Hair Care",
    details: {
      images: [hairloss, greyhair, dandruff],
      titles: [
        "Hairfall or Hairloss",
        "Premature greying of scalp hair",
        "Dandruff",
      ],
    },
  },
  {
    id: 3,
    src: image3,
    title: "Common Skin Problems",
    details: {
      images: [vitiligo, psoriasis, fungal, bacterial, eczema, warts],
      titles: [
        "Vitiligo",
        "Psoriasis",
        "Fungal Infection",
        "Bacterial Infection",
        "Eczema",
        "Moles and Warts",
      ],
    },
  },
  {
    id: 4,
    src: image4,
    title: "Skin Rejuvenation",
    details: {
      images: [
        dermaroller,
        dermaroller,
        dermaroller,
        dermaroller,
        dermaroller,
        dermaroller,
        dermaroller,
        dermaroller,
        dermaroller,
        dermaroller,
      ],
      titles: [
        "Chemical or Derma Peel",
        "Aquafacial",
        "Photofacial",
        "Carbon Facial",
        "RF Toning",
        "Laser Toning",
        "Dermaroller",
        "MnRF",
        "Mesotherapy",
        "PRP & GFC",
      ],
    },
  },
  {
    id: 5,
    src: image5,
    title: "Pediatric Skin Problems",
    details: {
      images: [dermaroller, dermaroller, dermaroller, dermaroller, dermaroller],
      titles: [
        "Atopic Dermatitis",
        "Cradle Cap",
        "Recurrent Skin Infections",
        "Pityriasis Alba",
        "Premature greying of scalp hair",
      ],
    },
  },
  {
    id: 6,
    src: image6,
    title: "Antiaging",
    details: {
      images: [dermaroller, dermaroller, dermaroller, dermaroller],
      titles: ["Anti Wrinkle Injection", "Dermafillers", "PRP & GFC", "MnRF"],
    },
  },
  {
    id: 7,
    src: image6,
    title: "Old Age Related Skin Problems",
    details: {
      images: [antiwrinkle, mnrf, dermaroller, dermaroller],
      titles: [
        "Dryness",
        "Unexplained itching all over body",
        "Senile Purpura",
        "Senile Comedones",
      ],
    },
  },
];
