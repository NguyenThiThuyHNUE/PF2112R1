class Date {
    day;
    month;
    year;

    constructor (my_day, my_month, my_year) {
        this.day = my_day;
        this.month = my_month;
        this.year = my_year;
    }

    getDay() {
        return this.day;
    }

    getMonth() {
        return this.month;
    }

    getYear() {
        return this.year;
    }

    setDay(your_day) {
        this.day = your_day;
    }

    setMonth(your_month) {
        this.month = your_month;
    }

    setYear(your_year) {
        this.year = your_year;
    }
}

let date1 = new Date(10, 12, 2021); // Khởi tạo một đối tượng date1 của lớp Date

let date2 = new Date(15, 1, 2021); // Khởi tạo một đối tượng date1 của lớp Date


// date1.setDay(20);
// date1.setMonth(1);
// date1.setYear(2022);

let myDay = date1.getDay(); //10
let myMonth = date1.getMonth(); //12
let myYear = date1.getYear(); //2021

document.write(myDay + "/" + myMonth + "/"+ myYear + "<br>");



let myDay2 = date2.getDay(); //15
let myMonth2 = date2.getMonth(); //1
let myYear2 = date2.getYear(); //2021

document.write(myDay2 + "/" + myMonth2 + "/"+ myYear2);



// document.write("Ngày sau khi thay đổi là: " + myDay + "/" + myMonth + "/"+ myYear);