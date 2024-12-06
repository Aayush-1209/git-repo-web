

let obj = {
    name: "Aayush",
    lastname: "Pandey",
    fullName: function () {
        return this.name + " " + this.lastname;
    }
};

let myName = obj.fullName.bind(obj);

console.log(myName()); 
