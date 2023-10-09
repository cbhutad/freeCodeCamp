/* Test cases

pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
Passed:pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
Passed:pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

*/

function pairElement(str) {
    let arr = [];
    for(let i = 0;i < str.length;i++) {
      arr.push([]);
    }
    for(let i = 0;i < str.length;i++) {
  
        switch(str[i]) {
          case "A" :
            arr[i].push(str[i]);
            arr[i].push("T");
            break;
          case "T" :
            arr[i].push(str[i]);
            arr[i].push("A");
            break;
          case "C" :
            arr[i].push(str[i]);
            arr[i].push("G");
            break;
          case "G" :
            arr[i].push(str[i]);
            arr[i].push("C");
            break; 
        }
      
    }
    return arr;
  }
  
  console.log(pairElement("GCG"));