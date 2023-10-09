/* Test Cases

Passed:myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
Passed:myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.
Passed:myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
Passed:myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error.
Passed:myReplace("His name is Tom", "Tom", "john") should return the string His name is John.
Passed:myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.

*/

function myReplace(str, before, after) {
    let index = "";
    after = caseSet(before, after);
    str = str.split(" ");
    index = str.indexOf(before);
    str[index] = after;
    return str.join(" ");
  }
  
  function caseSet(before, after) {
    if(before[0].toUpperCase() === before[0]) {
      after = after[0].toUpperCase() + after.substring(1);
    } else {
      after = after[0].toLowerCase() + after.substring(1);
    }
    return after;
  }
  
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));