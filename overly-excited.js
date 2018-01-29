

let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let betterSentence = ["Lindsay", "is", "astonished", "how", "little", "JavaScript", "this", "exercise", "takes"];


// holds the word you are adding and sentence
var counter = "";

function addExcitement(theWordArray, punctuation) {
    
    theWordArray.forEach(function(item, index)
        {
            var idx = index + 1; //makes the array easily divisable by 3

            if (idx % 3 === 0) { //picks 3rd word
                let x = idx / 3; // x gives the number of times the punctuation should be repeated
                counter += ` ${item + punctuation.repeat(x)}`; // uses this structure to output to dom += does not like extra +'s
            } else {
                counter += ` ${item}`;
            }
        console.log(counter); //outputs to the console

        document.getElementById("sentence").innerHTML += `${counter} <br>`; //outputs to the dom
        
    });
}

addExcitement(sentence, "!") //envokes function to run with this word array and puncation

