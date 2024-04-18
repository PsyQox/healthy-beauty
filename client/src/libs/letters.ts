import { Italiana, K2D } from "next/font/google";

const primaryLetters = Italiana({ 
    subsets: ['latin'], 
    weight: "400", 
});
const secondaryLetter = K2D({
    subsets:['latin'], 
    weight:["400","500","600","700","800"]
})

export const letters = {
    primary: primaryLetters,
    secondary: secondaryLetter
};
