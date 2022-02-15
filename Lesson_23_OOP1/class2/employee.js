class Employee {
    constructor(id, firstName, lastName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getName() {
        return this.firstName + this.lastName;
    }

    getSalary() {
        return this.salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    raiseSalary(percent) {
        this.salary = this.salary + this.salary * percent/100;
        return this.salary;
    }
}

let employee_1 = new Employee(1,"Phạm Bình","An",10000000);
let name = employee_1.getName(); // lấy giá trị tên của đối tượng
let saraly = employee_1.getSalary();  // Lấy giá trị lương của đối tượng 
let annua_salary = employee_1.getAnnualSalary();  // Lấy giá trị lương hàng năm của đối tượng


let raise_salary = employee_1.raiseSalary(20);
employee_1.getAnnualSalary();
document.write("Tên nhân viên: " + name + "<br>"
                + "Lương nhân viên: " + saraly + "<br>"
                + "Lương một năm: " + annua_salary + "<br>"
                + "Lương hàng tháng sau khi tăng: " + raise_salary + "<br>"
                + "Lương hàng năm sau khi tăng: " + employee_1.getAnnualSalary())




