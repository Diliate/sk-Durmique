import image1 from "../assets/images/Specialservice1.jpg";
import image2 from "../assets/images/Specialservice2.jpg";
import image3 from "../assets/images/Specialservice3.jpg";
import image4 from "../assets/images/Specialservice4.jpg";
import image5 from "../assets/images/Specialservice5.jpg";
import image6 from "../assets/images/Specialservice6.jpg";

// SKIN REJUVINATION
import dermaroller from "../assets/images/servicepage17.jpg";

// OLD AGE RELATED SKIN PROBLEMS
import antiwrinkle from "../assets/images/servicepage18.jpg";
import mnrf from "../assets/images/servicepage12.jpg";

// approved images

// 1. skin care
import acnes from "../assets/new_images/acne_.png";
import melasma from "../assets/new_images/melasma.jpg";
import pigmentation from "../assets/new_images/pigmentation_on_face.png";
import freckles from "../assets/new_images/freckled.jpg";
import open_pores from "../assets/new_images/open_pores.png";
import skin_tags from "../assets/new_images/skin-tags.png";
import stretch_marks from "../assets/new_images/stretch-marks.jpg";

// 2. Hair Care
import hairfall from "../assets/new_images/hair_fall.jpg";
import premature from "../assets/new_images/premature_graying.jpg";
import dandruff from "../assets/new_images/dandruff.avif";

// 3. common skin problems
import vitiligo from "../assets/new_images/vitiligo.jpg";
import psoriasis from "../assets/new_images/psoriasis (2).png";
import fungal from "../assets/new_images/-Fungus-infection.jpeg";
import bacterial from "../assets/new_images/bacterial_infection.jpg";
import eczema from "../assets/new_images/Eczema.jpg";
import moles from "../assets/new_images/mole.png";

// 4. skin rejuvenation
// import dermapeel from "../assets/new_images/";
// import aquafacial from "../assets/new_images/";
import photofacial from "../assets/new_images/Photofacial.jpg";
import carbonfacial from "../assets/new_images/Carbon_facial.jpg";
// import rftoning from "../assets/new_images/";
// import lasertoning from "../assets/new_images/laser";
// import mesotherapy from "../assets/new_images/";
// import dermaroller from "../assets/new_images/";
// import mnrf from "../assets/new_images/mn";
// import mesotherapy from "../assets/new_images/m";
// import prp from "../assets/new_images/gfc.jpg";

// 5. Pediatric Skin Problems
import atopic from "../assets/new_images/atopic_dermetitis.png";
import cradlecap from "../assets/new_images/Cradle_Cap.jpg";
import recurrent from "../assets/new_images/recurrent_skin_infection.jpg";
import alba from "../assets/new_images/pityriasis-alba.jpg";

// 6. Mesotherapy
// import antiWrinkle from "../assets/new_images/wr";
// import dermafillers from "../assets/new_images/der";
// import mnrf from "../assets/new_images/mn";
// import prp from "../assets/new_images/gfc.jpg";

// 7. Old age skin related problems
// import dryness from "../assets/new_images/dr";
// import chronicItch from "../assets/new_images/m";  //unexplained itching all over body
// import senilePurpura from "../assets/new_images/pur";
// import senileComedones from "../assets/new_images/comde";

export const normalservicedetails = [
  {
    id: 1,
    src: image1,
    title: "Skin Care",
    details: {
      images: [
        acnes,
        melasma,
        pigmentation,
        freckles,
        open_pores,
        skin_tags,
        stretch_marks,
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
      images: [hairfall, premature, dandruff],
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
      images: [vitiligo, psoriasis, fungal, bacterial, eczema, moles],
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
        photofacial,
        carbonfacial,
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
      images: [atopic, cradlecap, recurrent, alba, premature],
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
