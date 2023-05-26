
const treasure = (location)=> { 
    var treasureLocation = Math.floor(Math.random() * 8) 
    var bombLocation = Math.floor(Math.random() * 8) 
     
     if(treasureLocation === location){
        document.getElementById(location).innerHTML = "💰"
        alert ("You Win!")  // experimental auto reload of game after a win next line
      window.location = 'https://eliment.github.io/rod.github.io/';

     
     } 
     else if (bombLocation === location){
        document.getElementById(location).innerHTML = "🔥" 
        setTimeout(() => {
         alert("Replay?")
      }, 1000)

        
       alert("You lose!")  //testing reload function after losing on next line
        window.location = 'https://eliment.github.io/rod.github.io/';
}
     else {
        document.getElementById(location).innerHTML = "🙈" 
     }

   }
 //setTimeout(() => {
  // console.log("Delayed for 1 second.");
 //}, 1000)
