for(let i = 0; i < 100; i++) {
   console.log(i); 
}

for(let i = 100; i > 0; i--) {
    console.log(i);
}

for(let i = 1; i <=98; i++) {
    const isEven = i % 2 === 0;
    if(isEven) {
        console.log(i);
    }
}

for(let i = 3; i <= 90; i++) {
   const multipleOf3 = i % 3 === 0;
   if(multipleOf3) {
    console.log(i);
   }
}

for(let i = 99; i => 0; i--) {
    const isOdd = i % 2 === 0;
    if(isOdd) {
        console.log(i);
    }
}

git commit -m 'finished loop practice'