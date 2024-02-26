"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let GuestList = [
    "Abdul Razzaq",
    "Lubna",
    "Unzila",
    "Arsala",
    "Feroze Khan",
    "Zain Imam",
    "Andrew tate",
    "Candra",
];
// Step:1 Print the name of a person who cant make to the dinner
let guestwhocant = "Candra";
console.log(`Today ${guestwhocant} can't make it to the dinner.`);
// Step:2 Replace the name of the guest who can't make it to the dinner
let replaceguest = "Zain Imam";
let indexofguestwhocant = GuestList.indexOf(guestwhocant);
// console.log(indexofguestwhocant)/;
if (indexofguestwhocant !== -1) {
    GuestList[indexofguestwhocant] = replaceguest;
}
console.log(`\nPrinting message indicating number of guests`);
console.log(`We have finally invited ${GuestList.length} guest in Ex15`);
