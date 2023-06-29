function longestWord(sentence){

    let happy = sentence.split(" ");  
    
     let longestWord = happy[0];
    
      console.log(happy);
    
     for (let a in happy) {
    
    if (happy[a].length >= longestWord.length){
    
    longestWord = happy[a];    
    
    }
    
         
    
     }
    
     return longestWord;
    
    }
    
    console.log(longestWord("The dog jumped over the shipyard"));
    
    function shortestWord(sentence){
    
      let happy = sentence.split(" ");
    
      let shortestWord = happy[0];
    
      console.log(happy);
    
      for (let a in happy){
    
      if (happy[a].length <= shortestWord.length){
    
      shortestWord = happy[a];  
    
      }
    
       
    
      }
    
      return shortestWord;
    
    }
    
    console.log(shortestWord("The dog barked loudly at the cat up the tree"));
    
     
    
    function wordLengths(sentence){
    
      let sum = 0;
    
      let happy = sentence.split(" ");
    
      console.log(happy);
    
      for (let a in happy){
    
        sum += happy[a].length;
    
      }
    
        return sum;
    
      }