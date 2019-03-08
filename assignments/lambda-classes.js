// CODE here for your Lambda Classes
class Person {
    constructor(dna) {
        this.name = dna.name;
        this.age = dna.age;
        this.location = dna.location;
        this.gender = dna.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorDna) {
        super(instructorDna)
        this.specialty = instructorDna.specialty;
        this.favLanguage = instructorDna.favLanguage;
        this.catchPhrase = instructorDna.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject} `;
    }

    grade(student name, subject) {
        `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(studentdna) {
        super(studentdna);
        this.previousBackground = studentdna.previousBackground;
        this.className = studentdna.className;
        this.favSubjects = studentdna.favSubjects;
    }

    listsSubjects() {
        return `${this.subject}`;
    }

    prAssignment() {
        return `${this.name} has submitted a PR for ${this.subject}`;
    }

    sprintChallenge() {
        return `${student.name} has begun sprint challenge on ${this.subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(pmDna) {
        super(pmDna)
        this.gradClassName = pmDna.gradClassName;
        this.favInstructor = pmDna.favInstructor;
    }
    debugsCode() {
        return `${this.name} debugs ${student.name}'s code on ${this.subject}`
    }

}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const jane = new Student({
    name: 'Jane',
    location: 'out west',
    age: 24,
    gender: 'netural',
    previousBackground: 'none',
    className: 'web18',
    favSubjects: 'Math',

});

const ed = new ProjectManager({
    name: 'ed',
    location: 'rock city',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'web18',
    favInstructor: 'Sean',
});

console.log(ed.speak());
console.log(fred.demo('Math'));
console.log(grade('Jain', "Math"));
console.log(listsSubjects());
console.log(prAssignment());
console.log(sprintChallenge());
console.log(ed.debugsCode());
console.log(fred.demo());
console.log(jane);
console.log(ed);