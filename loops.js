array = []

function forLoop(array) {
 for (let i = 0; i < 25; i++) {
   if (i === 1) {
     array[i] = "I am ${i}"
   }
   else {
     console.log('I am ' + i + ' strange loops.')
   }
 }
 return array;
}