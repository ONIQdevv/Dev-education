function Model() {
    this.id=0;
    this.arrayOfPerson = [];
    }

Model.prototype.addPersonToArray = function (obj){
    this.arrayOfPerson[this.arrayOfPerson.length]=obj;
};
Model.prototype.getArrayOfPerson = function (){
    return this.arrayOfPerson;
};
Model.prototype.setArrayOfPerson = function (array){
    this.arrayOfPerson = array;
};
Model.prototype.getNextId = function (){
    this.id++;
    return this.id;
};

