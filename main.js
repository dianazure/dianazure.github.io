let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Ingeniera en computación y desarrolladora de sitos web.')
  .pauseFor(800)
  .typeString('')
  .pauseFor(200)
  .deleteChars(10)
  .start();
