// let person = {
//     name: "Thúy",
//     age: 18,
//     school: "HNUE"
// }
// for (let i in person) {
//     document.write(person[i] + "<br>");
// }

 //animal
//  let animals = [
//     {
//         id : 1,
//         name: "cat",
//         size: "small"
//     },
//     {
//         id : 2,
//         name: "dog",
//         size: "big"
//     },
// ]
// animals.forEach(function(animal){
//     console.log(animal)
// })


class Car {
    color;
    speed;

    move() {
        document.write ("Xe có màu " + this.color + " chạy với vận tốc " + this.speed + "<br>")
    }
}

// let car1 = new Car()   // car1 là một thể hiện của lớp Car
// car1.color = "blue";
// car1.speed = 80;
// car1.move()



// let car2 = new Car()
// car2.color = "green";
// car2.speed = 20;
// car2.move()



class RedCar extends Car {

}

let redCar = new RedCar;
redCar.color = "green";
redCar.speed = 200;
redCar.move();
