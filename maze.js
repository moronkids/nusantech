const Maze = (args) => {
  if (args <= 0) {
    return `Your input must integer!`; // handling input
  }
  let asterik = "";
  let penunjuk = "left"; //mark position
  let kiri = 1; //mark position
  let kanan = 3; //mark position
  for (let index = 1; index <= args; index++) {
    for (let i = 1; i <= args; i++) {
      //kolom
      if (index === 1 || index % 2 === 1) {
        //ganjil
        if (penunjuk === "left" && index === kiri && i === 2) {
          kiri += 4;
          asterik += " ";
          penunjuk = "right";
        } else if (penunjuk === "right" && index === kanan && i === args-1) {
          kanan += 4;
          asterik += " ";
          penunjuk = "left";
        } else {
          asterik += "@";
        }
      } else {
        if (i === 1 || i === args) {
          asterik += "@";
        } else {
          asterik += " ";
        }
      }
    }
    console.log(asterik);
    asterik = "";
  }
};
Maze(15);