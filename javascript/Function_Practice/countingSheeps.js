let arrayOfSheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

console.log(arrayOfSheep.length);

function countSheeps(arrayOfSheep) {
    const isSheep = arrayOfSheep.filter(sheep => sheep);
    console.log(isSheep);
    return console.log(isSheep.length);  
  }
  countSheeps(arrayOfSheep);

  let alsoSheep = arrayOfSheep.filter((sheep)=> {
    return sheep === true;
  });
  console.log(`Also shows ${alsoSheep.length}`);
