import acne from "../assets/images/servicedk1.jpeg";
import melasma from "../assets/images/servicepage2.jpg";
import pigmentation from "../assets/images/servicepage5.jpg";
import freckles from "../assets/images/servicepage4.jpg";
import pores from "../assets/images/servicepage1.jpg";
import skintag from "../assets/images/servicepage6.jpg";
import stretchmarks from "../assets/images/servicepage7.jpg";
import hairloss from "../assets/images/servicepage8.jpg";
import greyhair from "../assets/images/servicepage9.jpg";
import dandruff from "../assets/images/servicepage10.jpg";
import vitiligo from "../assets/images/vitilligo.png";
import psoriasis from "../assets/images/psoriasis.png";
import fungal from "../assets/images/fungal-infection.png";
import bacterial from "../assets/images/bacterial-infection.png";
import eczema from "../assets/images/eczema.png";
import warts from "../assets/images/servicepage6.jpg";
import dermapeel from "../assets/images/servicepage11.jpg";
import aquafacial from "../assets/images/servicepage12.jpg";
import cradlecap from "../assets/images/Servicepic2.png";
import dermaroller from "../assets/images/servicepage17.jpg";
import mesotherapy from "../assets/images/servicepage18.jpg";
import atopic from "../assets/images/atopic-dermatitis.png";
import recurrent from "../assets/images/recurrent.png";
import alba from "../assets/images/alba.png";

export const normalserviceindividual = [
  {
    id: 1,
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
      description: [
        "Lorem ipsum dolor sit amet, consectetur venenatis, dictum nisi congue, interdum nibh Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed malesuada imperdiet nisl eget interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vulputate purus ipsum. Phasellus interdum tellus vitae tellus viverra, ac accumsan risus vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc et nisi at enim hendrerit congue ut pretium orci. Vivamus consectetur malesuada efficitur. Sed vel eros eget arcu auctor gravida sed at orci. Morbi malesuada interdum nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed malesuada imperdiet nisl eget interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vulputate purus ipsum. Phasellus interdum tellus vitae tellus viverra, ac accumsan risus vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc et nisi at enim hendrerit congue ut pretium orci. Vivamus consectetur malesuada efficitur. Sed vel eros eget arcu auctor gravida sed at orci. Morbi malesuada varius mauris, non viverra augue pharetra ut. Nam eros lacus, elementum sit amet interdum sit amet, laoreet nec justo. Duis ac nibh in mauris lacinia viverra ultricies pharetra lectus. Cras dignissim accumsan arcu in facilisis. Nulla at feugiat nibh. Morbi vitae ligula libero. Nullam facilisis velit id lectus fermentum molestie. Praesent eleifend, ante eget blandit volutpat, dui augue varius massa, nec aliquam est risus at lorem. Integer non consequat augue. Phasellus id enim non magna luctus faucibus vitae at orci. Sed vestibulum efficitur Nam eros lacus, elementum sit amet interdum sit amet, laoreet nec justo. Duis ac nibh in mauris lacinia viverra ultricies pharetra lectus. Cras dignissim accumsan arcu in facilisis. Nulla at feugiat nibh. Morbi vitae ligula libero. Nullam facilisis velit id lectus fermentum molestie. Praesent eleifend, ante eget blandit volutpat, dui augue varius massa, nec aliquam est risus at lorem. Integer non consequat augue. Phasellus id enim non magna luctus faucibus vitae at orci. Sed vestibulum efficitur.",
        "Melasma description",
        "Pigmentation on face description",
        "Freckles description",
        "Open Pores/Large Pores description",
        "Stretch Marks description",
      ],
    },
  },
  {
    id: 2,
    title: "Hair Care",
    details: {
      images: [hairloss, greyhair, dandruff],
      titles: [
        "Hairfall or Hairloss",
        "Premature greying of scalp hair",
        "Dandruff",
      ],
      description: [
        "Hairfall description",
        "Premature grey hair description",
        "Dandruff description",
      ],
    },
  },
  {
    id: 3,
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
      description: [
        "Vitiligo description",
        "Psoriasis description",
        "Fungal Infection description",
        "Bacterial description",
        "Eczema description",
        "Moles & Warts description",
      ],
    },
  },
  {
    id: 4,
    title: "Skin Rejuvination",
    details: {
      images: [dermapeel, aquafacial, dermaroller, mesotherapy],
      titles: [
        "Chemical or Derma Peel",
        "Aquafacial/Hydrafacial",
        "Photofacial",
        "Carbon Facial",
        "RF Toning",
        "Laser Toning",
        "Dermaroller",
        "MnRF",
        "Mesotherapy",
        "PRP & GFC",
      ],
      description: [
        "Dermapeel description",
        "Aquafacial description",
        "Photofacial description",
        "Carbon Facial description",
        "RF Toning description",
        "Laser Toning description",
        "Dermaroller description",
        "MnRF description",
        "Mesotherapy description",
        "PRP & GFC Pores description",
      ],
    },
  },
  {
    id: 5,
    title: "Pediatric Skin Problems",
    details: {
      images: [atopic, cradlecap, recurrent, alba, greyhair],
      titles: [
        "Atopic Dermatitis",
        "Cradle Cap",
        "Recurrent Skin Infections",
        "Pityriasis Alba",
        "Premature greying of scalp hair",
      ],
      description: [
        "Dermatitis description",
        "Cradle Cap description",
        "Recurrent Skin Infection description",
        "Alba description",
        "premature grey scalp hair description",
      ],
    },
  },
  {
    id: 6,
    title: "Mesotherapy",
    details: {
      images: [],
      titles: ["Anti Wrinkle Infection", "Dermafillers", "PRP & GFC", "MnRF"],
      description: [
        "Anti Wrinkle Infection description",
        "Dermafillers description",
        "PRP & GFC description",
        "MnRF description",
      ],
    },
  },
  {
    id: 7,
    title: "Old Age Skin Problems",
    details: {
      images: [],
      titles: [
        "Dryness",
        "Unexplained itching all over body",
        "Senile Purpura",
        "Senile Comedones",
      ],
      description: [
        "Dryness description",
        "Itching description",
        "Senile Purpura description",
        "Senile Comedons description",
      ],
    },
  },
];
