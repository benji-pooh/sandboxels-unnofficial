"# NettyMod" 

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

elements.bouncy_bomb = {
    color: "#ff0000",
    category: "weapons",
    state: "solid",
    hidden: true,
    tick: function (pixel) {
        // Ask tisqbisque or modding channel with questions
        if (pixel.start === pixelTicks) { // init starting values
            pixel.bounce_y = pixel.y + 10; // by default can't bounce back up to starting
            pixel.bounce = 0; // if even, going down. odd, going up
        }

        if(pixel.bounce_y > 87) { // temporary, in the future bounce_y can change depending on pixel.y and current bounce count
            pixel.bounce_y = 86;
        }
        
        // Bouncing
        if (pixel.bounce % 2 === 0 && !tryMove(pixel, pixel.x, pixel.y + 1)) { // if unable to keep going down
            pixel.bounce++;
            tryMove(pixel,pixel.x,pixel.y-1); // bounce up
        }

        if (pixel.bounce % 2 === 1 && (!tryMove(pixel, pixel.x, pixel.y - 1) || pixel.y <= pixel.bounce_y) ) { // if unable to keep going up
            pixel.bounce++;
            pixel.bounce_y += 10; // change bounce height..
            tryMove(pixel,pixel.x,pixel.y+1); // bounce down
        }

        // Explode after set # bounces, may explode on peak height if # odd
        if (pixel.bounce > 10) {
            explodeAt(pixel.x, pixel.y, 20, "plasma");
        }
    },
};

elements.heavenly_ray = {
    color: ["#FFFF00", "#FFFFFF", "#7FFFD4"],
    reactions: {
        "uranium": { elem1: "ultra_uranium", elem2: "bless" },
        "dirt": { elem1: "plasma", elem2: "bless" },
        "sand": { elem1: "plasma", elem2: "bless" },
        "mud": { elem1: "plasma", elem2: "bless" },
        "water": { elem1: "plasma", elem2: "bless" },
    },
    tick: function (pixel) {
        var x = pixel.x;
        for (var y = pixel.y; y < height; y++) {
            if (outOfBounds(x, y)) {
                break;
            }
            if (isEmpty(x, y)) {
                if (Math.random() > 0.05) { continue }
                createPixel("flash", x, y);
                pixelMap[x][y].color = ["#FFFF00", "#FFFFFF", "#7FFFD4"];
                pixelMap[x][y].temp = 3500;
            }
            else {
                if (elements[pixelMap[x][y].element].isGas) { continue }
                if (elements[pixelMap[x][y].element].id === elements.heavenly_ray.id) { break }
                deletePixel(pixel.x, pixel.y - 1);
                pixelTempCheck(pixelMap[x][y]);
                break;
            }
            deletePixel(pixel.x, pixel.y);
        }


    },
    temp: 100000,
    category: "weapons",
    state: "gas",
    density: 1,
    excludeRandom: true,
    noMix: true

};

elements.crawl = {
    color: ["#800080", "#FFA500"],
    behavior: [
        "XX|CH:crawl|XX",
        "CH:crawl|EX:60>plasma,plasma,plasma,plasma,radiation,rad_steam%0.01|CH:crawl",
        "M2|M1 AND CH:crawl|M2",
    ],
    state: "solid",
    temp: 9000,
    reactions: {
        "super_powder": { elem1: "ultra_uranium", elem2: "null" },
    }
};

var placed = false

elements.time_bomb = {
    color: "#f00000",
    behavior: behaviors.STURDYPOWDER,
    state: "solid",
    category: "weapons",
    tick: function (pixel) {
        if (placed == false) {
            placed = true
            start = pixelTicks
        }
        console.log("placed:" + placed)
        console.log("start:" + start)
        console.log("tickslived:" + pixelTicks)
        if (pixelTicks == start + 100) {
            changePixel(pixel, "explosion")
            sleep(1000).then(() => { placed = false })
        }
    }
}
// V2.0 MOD
elements.death_star = {
    color:  ["#49413F", "#3B2F2F"],
    category: "weapons", 
    behavior: [
    "XX|XX|XX",
    "XX|XX|BO AND M1",
    "XX|XX|XX",
    ],
 tick:function(pixel){
     createPixel ("blaster", pixel.x, pixel.y+10) 
    },
   tempHigh: 3000,
   stateHigh: "plasma",
   state: "solid",
  };
  elements.flying_bomber = {
    color: "#8583c9",
    category: "weapons",
    behavior: behaviors.FLY,
    state: "solid",
     tick: function(pixel) {
    if (Math.random() < 1) {createPixel("bomb", pixel.x, pixel.y+1);}
     },
  };
  elements.super_missile = {
    color: ["", "#E1DFDF"], // The color slot is supposed to be empty lol
    category: "weapons",
    behavior: [
      "XX|M1|XX",
      "XX|XX|XX",
      "XX|CR:flash|XX",
    ],
    tick: function(pixel) {
      for (var i = 0; i < squareCoords.length; i++) {
                var coord = squareCoords[i];
                var x = pixel.x+coord[0];
                var y = pixel.y+coord[1];
     if (isEmpty(x, y, true) && !isEmpty(x, y)) {
            explodeAt(pixel.x, pixel.y, 25, "plasma");
     }
    }
   },
  };
  elements.energy_wave = {
  color: "#F1FF00",
  category: "weapons",
  behavior: [
    "DL|XX|DL",
    "M1 AND BO AND DL|EX:25>lightning%0.25|DL",
    "DL|XX|DL",
  ],
tick: function(pixel) {
   createPixel("flash", pixel.x-1, pixel.y)
   createPixel("energy_wave", pixel.x-1, pixel.y)
},
 };
 elements.the_spread = {
  color: ["#5B0470", "#7E0434"],
  category: "weapons",
  behavior: [
    "CH:uranium>the_spread|CH:uranium>the_spread|CH:uranium>the_spread",
    "CH:uranium>the_spread|XX|CH:uranium>the_spread",
    "CH:uranium>the_spread|CH:uranium>the_spread|CH:uranium>the_spread",
     ],
     tick: function(pixel) {
      if (Math.random() < 0.10) {
        createPixel("cld_spread", pixel.x-Math.floor(Math.random())*35, pixel.y-50)
        createPixel("lightning", pixel.x-Math.floor(Math.random())*35, pixel.y-50)
      }
     // Generates a storm
     },
   reactions: {
    "dirt": { elem1: "the_spread", elem2: "the_spread"},
    "lightning": { elem1: "explosion", elem2: "lightning"},
   }
};
// Cloud Generator for spread
elements.cld_spread = {
   color: "#FFFFFF",
   temp: 9999,
   tick: function(pixel) {
    explodeAt(pixel.x, pixel.y, 25, "rad_cloud")
    deletePixel(pixel.x, pixel.y);
},
   tempHigh: 8000,
   hidden: true,
   stateHigh: "plasma"
};
elements.instafreeze = {
  color: ["#50D6EC", "#091761", "#9FFEFF"],
  category: "weapons",
  behavior: behaviors.SUPERFLUID,
  temp: -1e+27,
  tick: function(pixel) {
     if (Math.floor(Math.random())*35 < 5) {
      createPixel("permafrost", pixel.x-1, pixel.y)
      createPixel("permafrost", pixel.x+1, pixel.y)
      createPixel("permafrost", pixel.x, pixel.y-1)
      createPixel("permafrost", pixel.x, pixel.y+1)
     }
},
    breakInto: "ice_nine",
    
};
elements.the_sickness = {
  color: ["#FFFFFF", "#F0EFEF", "#5F1C74"],
  category: "weapons",
  behavior: behaviors.LIQUID,
  tick: function(pixel) {     // *if not pixel below is empty, create a stalk and delete itself*
    if (!isEmpty(pixel.x, pixel.y+1)) {
      createPixel("sickness_stalk", pixel.x, pixel.y-1)
      deletePixel(pixel.x, pixel.y)
    }
  },
};
elements.sickness_stalk = {
  color: "#FFFFFF",
  hidden: true,
  behavior: behaviors.WALL,
  tick: function(pixel) {
    if ( pixel.toGrow === undefined ) {
      pixel.toGrow = Math.floor(Math.random())*30
    }
    if ( pixel.toGrow && isEmpty(pixel.x, pixel.y-1) ) {
      createPixel("sickness_stalk", pixel.x, pixel.y-1)
      pixelMap[pixel.x][pixel.y-1].toGrow = pixel.toGrow-1
    }
  else {
        // do when its done growing (toGrow is 0)
        createPixel("sickness_spore", pixel.x, pixel.y-1)
   }
  },
};
elements.sickness_spores = {
  color: "#F0EFEF",
  hidden: true,
  behavior: behaviors.WALL, 
  reactions: {
        "fire": { elem1: "fire", elem2: "the_sickness" },
  },
};
