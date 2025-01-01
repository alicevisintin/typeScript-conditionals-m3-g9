// Interface Person

interface Person {
  name: string;
  dateOfBirth: string;
  children: number;
  country: string;
  knowsHowToProgram: boolean;
}

// In the same file, making sure each person is represented by an object in an array:

const people: Person[] = [
  {
    name: "Tom White",
    dateOfBirth: "1/09/1990",
    children: 2,
    country: "Italy",
    knowsHowToProgram: false
  },
  {
    name: "Oluyemi Abara",
    dateOfBirth: "20/07/2000",
    children: 1,
    country: "Nigeria",
    knowsHowToProgram: true
  },
  {
    name: "Dmitri petrov",
    dateOfBirth: "14/05/1985",
    children: 4,
    country: "Russia",
    knowsHowToProgram: true
  },
  {
    name: "Amir Patel",
    dateOfBirth: "29/01/1997",
    children: 3,
    country: "India",
    knowsHowToProgram: false
  },
  {
    name: "Miguel Furioso",
    dateOfBirth: "10/12/1988",
    children: 4,
    country: "Argentina",
    knowsHowToProgram: false
  },
];
console.log(people);



// A. Is the first person older than the last person?

if (people[0].dateOfBirth < people[4].dateOfBirth) {
  console.log("The first person is older than last person")
}

else {
  console.log("The first person is not older than the last person.");
}



// B. Does the 2nd person have the same amount of kids as the 3rd?

if (people[1].children == people[2].children) {
  console.log("The 2nd person has the same number of kids as the 3rd person.");
}
else {
  console.log("The 2nd person does not have the same number of kids as the 3rd person.");
}



// C. Create a statement that checks if the 1st person and the 4th person in the array both know how to program. If yes, output “Yay!”, if not output “LMGTFY”.

//if they know how to program
if (people[0].knowsHowToProgram && people[3].knowsHowToProgram) {
  console.log("Yay!");
}
//if they don't know how to program
else {
  console.log("LMGTFY");
}



// D. Create a statement that checks the 2nd person in the array for their nationality. If the person’s country is Iceland, output “Hæ”, if he/she is from Spain output “Hola”, if he/she is from Korea output “여보세요”). If the country is none of the above, output “Hello”. Tip: a switch statement might be a good fit for this task.

switch (people[1].country) {

  //if the country is Iceland
  case "Iceland":
    console.log("Hæ");
    break;

  //if the country is Spain
  case "Spain":
    console.log("Hola");
    break;

  //if the country is Korea
  case "Korea":
    console.log("여보세요");
    break;

  //if the person is from a different country
  default:
    console.log("Hello");
}



// E. Use a ternary operator to output if the 2nd person’s name is longer than 5 characters.

console.log(people[1].name.length > 5 ? "the name is longer than 5 characters" : "the name is shorter than 5 characters");
