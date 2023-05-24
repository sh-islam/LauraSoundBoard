//  wait for the DOM to be fully loaded before executing
// allows buttons to be avaialbe in DOM 
// Event handler: runs after event takes place
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");

    function handleKeyPress(event){
      if (event.shiftKey && event.key === 'F1'){
        button1 = document.getElementById("button1");
        soundFile = `/sounds/${button1.name}.wav`
        if (button1.getAttribute('playing') === 'false'){playSound(soundFile, button1)}
      }
    }
    // Event listener: listens to event and then triggers handleKeyPress for handling event
    document.addEventListener("keydown", handleKeyPress);

    function playSound(soundFile, button) {
      if (soundFile) {
        const audio = new Audio(soundFile);
        audio.play();
        button.setAttribute('playing', true);
        // audio.addEventListener("ended", function(){
        //   button.setAttribute('playing', false);
        // })
        setTimeout(function() {
          audio.pause();
          audio.currentTime = 0;
          button.setAttribute('playing', false);
        }, 2500);
      }
    }
    
    buttons.forEach(function(button) {
      button.addEventListener("click", function(){
        let soundFile = `/sounds/${button.name}.wav`;
        if (button.getAttribute('name') === 'PartyHorn'){
          soundFile = `/sounds/${button.name}.mpeg`;
        }
        if (button.getAttribute('playing') === 'false'){playSound(soundFile, button)}
       
      })
        // button.addEventListener("click", function() {
        //   switch (button.id) {
        //     case "button1":
        //       console.log("Button 1 clicked");
        //       break;

        //     case "button2":
        //       console.log("Button 2 clicked");
        //       break;

        //     case "button3":
        //       console.log("Button 3 clicked");
        //       break;

        //     case "button4":
        //     console.log("Button 4 clicked");
        //     break;

        //     case "button5":
        //     console.log("Button 5 clicked");
        //     break;

        //     case "button6":
        //     console.log("Button 6 clicked");
        //     break;

        //     default:
        //       break;
        //   }
        // });
        
      });
    // function greet(event) {
    //   console.log("greet:", event);
    // }
  
    // buttons.forEach(function(button) {
    //   button.addEventListener("click", greet);
    // });
  });
  