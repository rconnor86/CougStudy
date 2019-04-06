class User{
    constructor(name, ListOfClasses,email, listOfGroups ) {
        this.name = name;
        this.email = email;
        this.ListOfClasses = ListOfClasses; 
        this.ListOfGroups = ListOfGroups;

    }
    getName(){
        return this.name;
    }
}

// Initialize a constructor from a class
const constructorFromClass = new y();

console.log(constructorFromClass);