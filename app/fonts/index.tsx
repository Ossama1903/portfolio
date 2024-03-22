import { Open_Sans, Chilanka, Give_You_Glory } from "next/font/google";

const openSansFont = Open_Sans({
  subsets: ["latin"],
});

const chilankaFont = Chilanka({
  subsets: ["latin"],
  weight: "400"
});

const giveYouGloryFont = Give_You_Glory({
  subsets: ["latin"],
  weight: "400",
});

export default {
  openSans: openSansFont.className,
  chilanka: chilankaFont.className,
  giveYouGlory: giveYouGloryFont.className,
};
