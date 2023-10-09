/* Test cases

translatePigLatin("california") should return the string aliforniacay.
Passed:translatePigLatin("paragraphs") should return the string aragraphspay.
Passed:translatePigLatin("glove") should return the string oveglay.
Passed:translatePigLatin("algorithm") should return the string algorithmway.
Passed:translatePigLatin("eight") should return the string eightway.
Passed:Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
Passed:Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.

*/

function translatePigLatin(str) {
    if(str[0] == "a" || str[0] == "e" || str[0] == "i" || str[0] == "o" || str[0] == "u") {
      str = str + "way";
    } else {
      for(let i = 0;i < str.length;i++) {
        let substr = "";
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
          substr = str.substring(0,i);
          return str.substring(i) + substr + "ay";
        }
      }
      return str + "ay";
    }
    return str;
  }
  
  console.log(translatePigLatin("rhythm"));