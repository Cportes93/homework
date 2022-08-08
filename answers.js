for(let i = 1; i < 21; i++) {
    console.log(i);
}
// git commit -m 'easy going answered'

for(let i = 0; i < 101; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}
// git commit -m 'Get even answered'

// easy going 

for(let i = 1; i < 101; i++) {
    console.log(i)
}

for(i = 1; i < 100; i++) {
    if( i % 3 ) {
        console.log("Fizz");
    } else if ( i % 5) {
        console.log("Buzz");
    } else {
        console.log ("FizzBuzz")
    }
}
// Fizz Buzz

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] += 1 ;
console.log (plantee);

wolfy.pop();
wolfy.push("Gotham City");
console.log(wolfy);

dart.push("Hawkins");
    console.group(dart);

wolfy.splice(0,1,"Gameboy");
    console.log(wolfy);

// Wild Wild West

const ninja = ["Donatello","Leonardo","Raphael","Michaelangelo"];

for (const member of ninja)  {
    console.log (member.toUpperCase());
     }
// Yell At the Ninja Turtles 

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// console.log (favMovies.indexOf("Titanic"));
favMovies.sort();
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
     // console.log(favMovies);
favMovies.shift();
     console.log(favMovies)
console.log (favMovies.unshift("I am Sam")); // a reversed alphabetical array except for "I am Sam" and number 19
let index = favMovies.indexOf("Django Unchained");
     favMovies.splice(index,1,"Avatar");
     console.log(favMovies);

let lastHalf = [];
let length = favMovies.length;
lastHalf = favMovies.slice (Math.floor(length / 2),length +1); 
     console.log(lastHalf);
// Methods Revisted 

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"),1);
     // console.log(whereIsWaldo);
     whereIsWaldo[1][2] = "No One";
     console.log (whereIsWaldo[2][1][1]);
// Where is Waldo

const  kittyTalk = ["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..." ];
let meow = 0 ;
for (let i =0 ; i <= 20 ; i++)
{
  if (i % 2 == 0){
    meow =  Math.floor(Math.random() * 3) ;
    console.log (kittyTalk[meow]);
    }
    else 
        console.log ( "Love me, pet me! HSSSSSS!");

}
// Excited Kitten

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
let calculateMedian = function (arr){
    arr.sort();
    let median = 0;
    let length = arr.length;
    if (length % 2 != 0 )
    median = arr[Math.floor(length / 2)]
    else 
    median = (arr[length/2]+arr[(length/2)-1]) / 2
  return median;  
  }

console.log (calculateMedian(nums)) // used a lot of google to figure this one out and help from a family member