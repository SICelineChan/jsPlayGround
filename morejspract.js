

    /*function digitize(n) {
        return Array.from(String(n), Number);
      }
      const arr1 = digitize(35231);
      console.log(arr1.reverse()); */
      // print a set of number in reverse and in an array!
    
/*function abbreName (someName){
    let firstChar = " ";
    let space = " ";
    let lastChar = " ";
    
    firstChar = someName.charAt(0).toUpperCase();
    //console.log(firstChar);
    space = someName.indexOf(" ") + 1;
    //console.log(space);
    lastChar = someName.charAt(space).toUpperCase();
    //console.log(lastChar);
    console.log(firstChar + "." + lastChar);
}     
abbreName("paulo marco");*/
//correct answer
/*function abbrevName(name){

    return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();

}
console.log(abbrevName("Tina Gina"));*/

function areYouPlayingBanjo(name) {
let word = "R";
let firstchar = name.charAt(0);
     if (firstchar.toUpperCase() == word) {
        console.log(`${name} plays the banjo`);
     } else {
        console.log(`${name} does not play the banjo`);
     }
    }
  

    function areYouPlayingBanjo(name) {
        let word = "R";
        let firstchar = name.charAt(0);
             if (firstchar.toUpperCase() == word) {
                console.log(`${name} plays the banjo`);
             } else {
                console.log(`${name} does not play the banjo`);
             }
            }
          
        
          areYouPlayingBanjo("Adam");
          areYouPlayingBanjo("Paul");
          areYouPlayingBanjo("Ringo");
        areYouPlayingBanjo("bravo");
        areYouPlayingBanjo("rolf");
        
        function areYouPlayingBanjo(name) {
            if (name[0].toLowerCase() === 'r') {
              return name + ' plays banjo';
            } else {
              return name + ' does not play banjo';
            }
          }

          function doubleInteger(i) {
            // i will be an integer. Double it and return it.
            return i * 2;
          }
          console.log(doubleInteger(4));

          function doubleInteger(i) {
            i = i*2;
            return i;
          }
          console.log(doubleInteger(8));


/*let someName = "billy Pobby";
let firstChar = " ";
let space = " ";
let lastChar = " ";

firstChar = someName.charAt(0).toUpperCase();
//console.log(firstChar);
space = someName.indexOf(" ") + 1;
//console.log(space);
lastChar = someName.charAt(space).toUpperCase();
//console.log(lastChar);
console.log(firstChar + "." + lastChar);*/
