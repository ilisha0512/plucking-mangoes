class tree {
    constructor (bodyA, pointB) {
      var options ={
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 1,
          length: 200,
      }
    }

    display(){
        if (this.tree.bodyA){
            var pointA = this.tree.bodyA.position;
            var pointB = this.pointB;
            stroke("brown");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}