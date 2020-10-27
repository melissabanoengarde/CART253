 class Animation extends State {
   // le juggle game.
   constructor() {
     super();

     // calling all classes
     palm = new Palms(150, 180, palmsImg);

     // for-loop for numCanadiancanadianFlags; allows many to appear
     for (let i = 0; i < numCanadianFlags; i++) {
       let x = random(0, width);
       let y = random(-600, -200);

       let canadian = new Canadian(x, y, canadianFlag);
       canadianFlags.push(canadian);
      }

    // for-loop for numFilipinoFlags
      for (let i = 0; i < numFilipinoFlags; i++) {
        let x = random(0, width);
        let y = random(-600, -200);

        let filipino = new Filipino(x, y, filipinoFlag);
        filipinoFlags.push(filipino);
       }

      // for-loop for numQuebecFlags
       for (let i = 0; i < numQuebecFlags; i++) {
         let x = random(0, width);
         let y = random(-600, -200);

         let quebecois = new Quebecois(x, y, quebecoisFlag);
         quebecoisFlags.push(quebecois);
        }
      }

  // Calling all png's
  preload() {
    super.preload();
    this.palm.preload();
    this.canadianFlags.preload();
    this.filipinoFlags.preload();
    this.quebecoisFlags.preload();
  }


   draw() {
     super.draw();
     background(255);

     // calling Palms.js's methods
     palm.move();
     palm.display();

   // for-loop that counts from 0 up to canadianFlags.legth
     /* CANDIAN */
     for (let i = 0; i < canadianFlags.length; i++) {
       let canadianFlag = canadianFlags[i];
       if (canadianFlag.active) {
         canadianFlag.gravity(gravityForce);
         canadianFlag.move();
         canadianFlag.bounce(palm);
         canadianFlag.display();
       }
     }

     /* FILIPINO */
     for (let i = 0; i < filipinoFlags.length; i++) {
       let filipinoFlag = filipinoFlags[i];
       if (filipinoFlag.active) {
         filipinoFlag.gravity(gravityForce);
         filipinoFlag.move();
         filipinoFlag.bounce(palm);
         filipinoFlag.display();
       }
     }

     /* QUEBECOIS */
     for (let i = 0; i < quebecoisFlags.length; i++) {
       let quebecoisFlag = quebecoisFlags[i];
       if (quebecoisFlag.active) {
         quebecoisFlag.gravity(gravityForce);
         quebecoisFlag.move();
         quebecoisFlag.bounce(palm);
         quebecoisFlag.display();
       }
     }
   }
// don't need mousePressed here
 }
