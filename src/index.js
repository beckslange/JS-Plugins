/*let heading = document.querySelector("h1");

heading.innerHTML = "H";
//we are learning plugins so that we can see the animation for this*/

//google typewriter js plugins, use the github one
//jquery is not used anymore
//google typewriter js plugins image gallery

new Typewriter("h1", {
  strings: "Hello World",
  /*this can be a string "", or an array []. If it is a string, it will not erase
  after writing. If it is an array, it will write it out and then erase*/
  autoStart: true,
  cursor: "",
  //this makes it so that there is not a line blinking when it is typing/finished typing
  delay: 60,
  //this changes the typing speed, 10 is faster than 100
  //style h1 in CSS
});
