"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //   private readonly id: string
        //   private name: string;
        this.employees_id = [];
        // this.name = name;
    }
    describe() {
        console.log(`Department: ${this.id} - ${this.name}`);
    }
    addEmployee(employee) {
        this.employees_id.push(employee);
    }
    printEmployeeInformantion() {
        console.log(this.employees_id.length);
        console.log(this.employees_id);
    }
    // STATIC METHOD
    static createEmployee(name) {
        return { name: name };
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'Hardcoded name');
        this.admins = admins;
    }
    printAdmins() {
        console.log(`The admins are: ${this.admins}`);
    }
}
class AccountDepartment extends Department {
    // private powoduje ze można tylko jeden objekt stworzyć bazując na tej klasie
    constructor(id, reports = []) {
        super(id, 'Hardcoded account name');
        this.reports = reports;
        this.inventaryzacja = '';
    }
    get novaInventaryzacja() {
        if (this.inventaryzacja) {
            return this.inventaryzacja;
        }
        throw new Error('Nothing found...');
    }
    set novaInventaryzacja(value) {
        this.inventaryzacja = value;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountDepartment('acc-01');
        return this.instance;
    }
    addReport(report) {
        this.reports.push(report);
    }
    addEmployee(employee) {
        if (employee === 0) {
            return;
        }
        this.employees_id.push(employee);
    }
}
const accounting = AccountDepartment.getInstance();
const accounting2 = AccountDepartment.getInstance();
accounting.addEmployee(0);
accounting.addEmployee(1);
accounting.addEmployee(2);
accounting.addEmployee(3);
accounting.printEmployeeInformantion();
accounting.describe();
accounting.novaInventaryzacja = 'Roczna inwentaryzacja';
console.log(`Getter log: ${accounting.novaInventaryzacja}`);
console.log(accounting);
const it = new ITDepartment('it-01', ['Bonifacy', 'Filemon']);
it.describe();
it.printAdmins();
console.log(it);
// accounting.employees_id[3] = 77;
// const copy = { describe: accounting.describe, name: 'Kadry' };
// copy.describe();
//  USING STATIC METHOD
const employee_one = Department.createEmployee('John Doe');
console.log(employee_one);
//# sourceMappingURL=classess.js.map