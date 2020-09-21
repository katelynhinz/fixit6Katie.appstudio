let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"];
let withMarmaduke = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"];
let pets = withMarmaduke.push('Marmaduke');

/* The program must let the user pick one of these 
to do - there are many ways you can
write code to do this - think of one :)
> remove "Vinny" from the array.
> remove "Marty" from the array.
> add "Nancy" to the front of the array.
> add their name to the end of the array.
> tell the user the array index where "Riley" is located in the array.
> tell the user the array index where "Cindy" is located. This should return-1 since "Cindy" is not in the array.
> show the 'withMarmaduke' array data.
After each user-chosen activity (eg. remove 'Vinny'), output to the console the action taken ('remove Vinny') and the current state of the petNames array using this format:

The action taken was: Remove Vinny
The remaining array data are:
Darcy, Jack, Jerry, Marty, Vito, Riley, Saddie, Marge, Sam
*/

let action =  prompt("Please type a letter corresponding to the following action you want to perform:\n a. remove Vinny \n b. remove Marty \n c. add Nancy to front \n d. add your name to the end.\n e. See where Riley is located in the array.\n f. See where Cindy is located.\n g. show the withMarmaduke array data.")
if (action === 'a') {
  let removedItem = petNames.splice(5, 1)
  console.log(`The action taken was: Remove Vinny.  The remaining array data are: ${petNames}`)
} else if (action === 'b') {
  let removedItem1 = petNames.splice(3, 1)
  console.log(`The action taken was: Remove Marty.  The remaining array data are: ${petNames}`)
} else if (action === 'c') {
  let addItem = petNames.unshift('Nancy')
  console.log(`The action taken was: Add Nancy to the front of the array.  The remaining array data are: ${petNames}`)
} else if (action === 'd') {
  let yourName = prompt("Please enter your name.")
  let addName = petNames.push(yourName)
  console.log(`The action taken was: Add your name to the end of the array.  The remaining array data are: ${petNames}`)
} else if (action === 'e') {
  let pos = petNames.indexOf('Riley')
  console.log(`The action taken was: See where Riley is located in the array.  Riley is located at position ${pos}. The remaining array data are: ${petNames}`)
} else if (action === 'f') {
  let pos1 = petNames.indexOf('Cindy')
  console.log(`The action taken was: See where Cindy is located in the array. Cindy is located at position ${pos1}. The remaining array data are: ${petNames}`)
} else if (action === 'g') {
  console.log(`The action taken was: Show the 'withMarmaduke' array data.  Here is the array: ${withMarmaduke}`) 
} else {
  alert("Please enter a valid letter corresponding to an action")
}


