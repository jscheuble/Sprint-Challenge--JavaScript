// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CuboidMaker2 {
    constructor(attribute) {
        this.length = attribute.length;
        this.width = attribute.width;
        this.height = attribute.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

  const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
  });
  
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// STRETCH GOAL HERE 

class CubeMaker extends CuboidMaker2 {
    constructor(attribute) {
        super(attribute)
    }
    cubeSurfaceArea() {
        return 6 * (this.length * this.width);
    }
    cubeVolume() {
        return this.length * this.width * this.height;
    }
}

const cube = new CubeMaker({
    length: 3,
    width: 3,
    height: 3
});

console.log(cube.cubeSurfaceArea()); //54
console.log(cube.cubeVolume()); //27