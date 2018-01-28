
// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let betterSentence = ["Lindsay", "is", "astonished", "how", "little", "JavaScript", "this", "exercise", "takes"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/



function addExcitement(theWordArray, punctuation) {
   console.log(theWordArray, punctuation);
    
var counter = "";

theWordArray.forEach(function(item, index)
    {
        var idx = index + 1;
        
        // add logic to addExcitement that places an exclamation point(!) after every third word.

        if (idx % 3 === 0) {
            let x = idx / 3;
            counter += " " + item + punctuation.repeat(x);
        } else {
            counter += " " + item;
        }
        // console.log(counter);
        
    })
}

console.log(addExcitement(sentence, "!"));



// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.


// Invoke the function and pass in the array