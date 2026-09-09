export interface Teacher {
    readonly firstName: string;  
    readonly lastName: string;   
    fullTimeEmployee: boolean;  
    location: string;            
    yearsOfExperience?: number;  
    [propName: string]: any;    
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    yearsOfExperience: 8,
    contract: false, 
};

console.log(teacher3);


export interface Directors extends Teacher {
    numberOfReports: number;    
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); 

export interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

export class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass("Jane", "Smith");
console.log(student.displayName());       
console.log(student.workOnHomework());    