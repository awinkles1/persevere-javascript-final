//******this function is initiated when the button is clicked and starts the process of generating the password
function initiateGenie() {

    //*********variables that store data for functions used below
    let alphaLow = "abcdefghijklmnopqrstuvwxyz"
    let alphaUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let nums = "0123456789"
    let chars = "!@#$%^&*()"
    //**********  these take their values from the checkboxes and length input */
    let a = document.querySelector("#lowLetters").checked
    let b = document.querySelector("#upLetters").checked
    let c = document.querySelector("#numbers").checked
    let d = document.querySelector("#symbols").checked
    let e = document.querySelector("#howLong").value
  
    //this is the random password generator that will be called in the next function and will us the choices1 array as a parameter
    function random(arr) {
     if (e < 8 || e > 128){
       return "What was confusing about 'between 8 and 128'? Try again."
     }
      let matchUp = ''
      let generation = []
      let j = 0
      while (j < e) {
        let chooser = Math.floor(Math.random() * arr.length)
        matchUp = arr[chooser]
        generation.push(matchUp)
        j++
      } return generation.toString().replace(/,/g,' ')
    }
  
    //function takes values from passWordOject and produces an array to be used by password generator
    const randomPassword = () => {
      
      let choices1 = []
  // this is an object that contains the prompt info and the string info that will be used in the function
      let pwObj = {
        lower: [a, alphaLow],
        upper: [b, alphaUpp],
        numbers: [c, nums],
        characters: [d, chars]
      }
      for (let i = 0; i < Object.keys(pwObj).length; i++) {
  
        if (Object.values(pwObj)[i][0]) {
          choices1.push(Object.values(pwObj)[i][1])
        }
      } if (choices1.length === 0) {
        return 'Checkboxes confuse you?  Try again and this time click one of the boxes.'
  
      } return random(choices1.join().replace(/,/g,''))
  
    }
  
    //  this function is what puts the resultory password into the web page
    function pleaseWork() {
      let x = document.getElementById('password')
      return x.innerHTML = randomPassword()
    }
    pleaseWork()
  console.log(pleaseWork().length)
  }
  
  