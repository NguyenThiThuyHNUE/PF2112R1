// function Area(radius) {
//     return radius * radius * Math.PI;
// }
// let radius = prompt("Nhập bán kính hình tròn");
// document.write("Diện tích hình tròn có bán kính " + radius + " là: " + Area(radius));

class Circle {
    radius; // thuộc tính của hình tròn

    constructor(radius) {        // hàm khởi tạo
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI
    }

    getPerimeter () {
        return this.radius * 2 * Math.PI;
    }
    
}

let Circle_1 = new Circle(20); // Khởi tạo một đối tượng thứ nhất của lớp Circle

let area = Circle_1.getArea();     // Lấy giá trị diện tích của Circle_1
let perimeter = Circle_1.getPerimeter();
document.write("Diện tích hình tròn thứ nhất là: " + area + "<br>");
document.write("Chu vi hình hình tròn thứ nhất là: " + perimeter + "<br>");


let Circle_2 = new Circle(5);
let area2 = Circle_2.getArea();
document.write("Diện tích của hình tròn thứ hai là: " + area2);
