class Date_A {
    day;
    month;
    year;
    constructor(d,m,y) {
        this.day = d; //12
        this.month = m; //3
        this.year = y;// 1990
    }
    toString(){
        return this.day + "."+ this.month + "." + this.year;
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
    setDay(set_d) {
        this.day = set_d;
    }
    setMonth(set_m) {
        this.month = set_m;
    }
    setYear(set_y) {
        this.year = set_y;
    }

    setDate(d,m,y) {
        this.day = d;
        this.month = m;
        this.year = y;
    }
}

let date1 = new Date_A(12,3,1990);
let date2 = new Date(01,01,2022);

// console.log(date1.getDay()); // trả về ngày của đối tượng date1; //12
// date1.setDay(5);
// date2.setDate(12,12,2021);
// date2.getDay();
// date2.getMonth();
// date2.getYear();
document.write(date1); //12/12/2021
