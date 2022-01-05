class Department {
  //   private readonly id: string
  //   private name: string;
  protected employees_id: number[] = [];

  constructor(private readonly id: string, private name: string) {
    // this.name = name;
  }
  describe(this: Department) {
    console.log(`Department: ${this.id} - ${this.name}`);
  }
  addEmployee(employee: number) {
    this.employees_id.push(employee);
  }
  printEmployeeInformantion() {
    console.log(this.employees_id.length);
    console.log(this.employees_id);
  }

  // STATIC METHOD
  static createEmployee(name: string) {
    return { name: name };
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'Hardcoded name');
  }
  printAdmins() {
    console.log(`The admins are: ${this.admins}`);
  }
}

class AccountDepartment extends Department {
  private inventaryzacja: string = '';
  private static instance: AccountDepartment;

  get novaInventaryzacja() {
    if (this.inventaryzacja) {
      return this.inventaryzacja;
    }
    throw new Error('Nothing found...');
  }

  set novaInventaryzacja(value: string) {
    this.inventaryzacja = value;
  }

  // private powoduje ze można tylko jeden objekt stworzyć bazując na tej klasie
  private constructor(id: string, private reports: string[] = []) {
    super(id, 'Hardcoded account name');
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountDepartment('acc-01');
    return this.instance;
  }

  addReport(report: string) {
    this.reports.push(report);
  }
  addEmployee(employee: number): void {
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
