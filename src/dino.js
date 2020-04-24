export class DinoSearch {
  constructor() {
    this.arr = [];
    this.dinosArr = [
      {
        name: "Tyrannosaurus rex",
        period: "Mesozoic",
        diet: "carnivore",
        walksOnForLegs: false,
        yearDiscovered: 1902,
        popularity: 999
      },

      {
        name: "Brachiosaurus",
        period: "Jurassic",
        diet: "herbivore",
        walksOnForLegs: true,
        yearDiscovered: 1900,
        popularity: 959
      },

      {
        name: "Parasaurolophus",
        period: "Cretaceous",
        diet: "herbivore",
        walksOnForLegs: true,
        yearDiscovered: 1922,
        popularity: 500
      },

      {
        name: "Stegosaurus",
        period: "Jurassic",
        diet: "herbivore",
        walksOnForLegs: true,
        yearDiscovered: 1876,
        popularity: 903
      }
    ];
  }
  search(dietVal, periodVal) {
    let arr = [];
    for (let i = 0; i < this.dinosArr.length; i++) {
      if (this.dinosArr[i].diet === dietVal) {
        arr.push(this.dinosArr[i]);
      }
    }
    let arr2 = [];
    for (let j = 0; j < this.dinosArr.length; j++) {
      if (this.dinosArr[j].period === periodVal) {
        arr2.push(this.dinosArr[j]);
      }
    }
    return this.arr = arr.filter(value => -1 !== arr2.indexOf(value));
  }

}

// a = [kiwi, chi]
// b = [bee, kiwi]
// c = [kiwi]
// a.filter(value => -1 !== b.indexOf(value))