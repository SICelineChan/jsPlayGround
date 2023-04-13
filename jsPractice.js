let arrayOfSheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

function countSheeps(arrayOfSheep) {
    
    let num = 0;
    for(let i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }
  console.log(countSheeps(arrayOfSheep));
  //counting the number of "true" in the array
    