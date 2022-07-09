function Controller() {

    this.logic = new Logic();
    this.model = new Model();

    this.idLS = 'local_storage_Id';
    this.arrayLS = 'local_storage_Array';

    this.id0 = document.getElementById('id0');
    this.name0 = document.getElementById("name0");
    this.lastName0 = document.getElementById("lastName0");
    this.age0 = document.getElementById("age0");

    this.id1 = document.getElementById('id1');
    this.name1 = document.getElementById("name1");
    this.lastName1 = document.getElementById("lastName1");
    this.age1 = document.getElementById("age1");

    this.id2 = document.getElementById('id2');
    this.name2 = document.getElementById("name2");
    this.lastName2 = document.getElementById("lastName2");
    this.age2 = document.getElementById("age2");

    this.id3 = document.getElementById('id3');
    this.name3 = document.getElementById("name3");
    this.lastName3 = document.getElementById("lastName3");
    this.age3 = document.getElementById("age3");

    this.id4 = document.getElementById('id4');
    this.name4 = document.getElementById("name4");
    this.lastName4 = document.getElementById("lastName4");
    this.age4 = document.getElementById("age4");

    this.id5 = document.getElementById('id5');
    this.name5 = document.getElementById("name5");
    this.lastName5 = document.getElementById("lastName5");
    this.age5 = document.getElementById("age5");

    this.id6 = document.getElementById('id6');
    this.name6 = document.getElementById("name6");
    this.lastName6 = document.getElementById("lastName6");
    this.age6 = document.getElementById("age6");

    this.id7 = document.getElementById('id7');
    this.name7 = document.getElementById("name7");
    this.lastName7 = document.getElementById("lastName7");
    this.age7 = document.getElementById("age7");

}

Controller.prototype.init = function () {

    const text = document.getElementById('text');
    const create = document.getElementById('create');
    const read = document.getElementById('read');
    const update = document.getElementById('update');
    const deleteBtn = document.getElementById('delete');

    const start = document.getElementById('start');
    const middle = document.getElementById('middle');
    const save = document.getElementById('save');
    const restore = document.getElementById('restore');

    create.addEventListener('click', function () {
            let string = text.value;
            let objectJSON = JSON.parse(string);
            if (this.logic.checkObjectForCreate(objectJSON) === true) {
                let objectWithId = this.logic.addIdToObject(this.model.getNextId(), objectJSON);
                this.model.addPersonToArray(objectWithId);
                this.writer();
            }
        }.bind(this),
        false);
    read.addEventListener('click', function () {
            let string = text.value;
            let objectJSON = JSON.parse(string);
            if (this.logic.checkObjectForDelete(objectJSON) === true) {
                let array = this.model.getArrayOfPerson();
                let id = this.logic.getIndexFromobject(objectJSON);
                let index = this.logic.getIndexOfObjectByID(id, array);
                let findObject = array[index];
                this.writeToInput(findObject);
            }
        }.bind(this),
        false);
    update.addEventListener('click', function () {
            let string = text.value;
            let objectJSON = JSON.parse(string);
            if (this.logic.checkObjectForDelete(objectJSON) === true) {
                let subject = this.logic.getSubjectForUpdate(objectJSON);
                let id = objectJSON.id;
                let indexElemInArray = this.logic.getIndexOfObjectByID(id, this.model.arrayOfPerson);
                let objPerson = this.model.arrayOfPerson[indexElemInArray];
                switch (subject) {
                    case 'firstName' :
                        let newName = objectJSON.firstName;
                        let objNewPerson = this.logic.updateFirstNameInObj(objPerson, newName);
                        let newArray = this.logic.changeObjInArray(this.model.getArrayOfPerson(), objNewPerson, indexElemInArray);
                        this.model.setArrayOfPerson(newArray);
                        break;
                    case 'lastName' :
                        let newLastName = objectJSON.lastName;
                        let objPersonWithNewLastName = this.logic.updateLastNameInObj(objPerson, newLastName);
                        let arrayWithNewLastName = this.logic.changeObjInArray(this.model.getArrayOfPerson(), objPersonWithNewLastName, indexElemInArray);
                        this.model.setArrayOfPerson(arrayWithNewLastName);
                        break;
                    case 'age' :
                        let newAge = objectJSON.age;
                        let objPersonWithNewAge = this.logic.updateAgeInObj(objPerson, newAge);
                        let arrayWithNewAge = this.logic.changeObjInArray(this.model.getArrayOfPerson(), objPersonWithNewAge, indexElemInArray);
                        this.model.setArrayOfPerson(arrayWithNewAge);
                        break;
                }
                this.writer();
            }
        }.bind(this),
        false);
    deleteBtn.addEventListener('click', function () {
            let string = text.value;
            let objectJSON = JSON.parse(string);
            if (this.logic.checkObjectForDelete(objectJSON) === true) {
                let array = this.model.getArrayOfPerson();
                let id = this.logic.getIndexFromobject(objectJSON);
                let index = this.logic.getIndexOfObjectByID(id, array);
                let newArray = this.logic.deleteFromArray(index, array);
                this.model.arrayOfPerson = newArray;
                this.clearAllFields();
                this.writer();
            }
        }.bind(this),
        false);
    start.addEventListener('click', function () {
            let string = text.value;
            let objectJSON = JSON.parse(string);
            if (this.logic.checkObjectForCreate(objectJSON) === true) {
                let objectWithId = this.logic.addIdToObject(this.model.getNextId(), objectJSON);
                let oldArray = this.model.getArrayOfPerson();
                let newArray = this.logic.addStartPersonToArray(oldArray, objectWithId);
                this.model.setArrayOfPerson(newArray);
                this.writer();
            }
        }.bind(this),
        false);
    middle.addEventListener('click', function () {
            let string = text.value;
            let objectJSON = JSON.parse(string);
            if (this.logic.checkObjectForCreate(objectJSON) === true) {
                let objectWithId = this.logic.addIdToObject(this.model.getNextId(), objectJSON);
                let oldArray = this.model.getArrayOfPerson();
                let newArray = this.logic.addMiddlePersonToArray(oldArray, objectWithId);
                this.model.setArrayOfPerson(newArray);
                this.writer();
            }
        }.bind(this),
        false);
    save.addEventListener('click', function () {
            this.saveLS();
            this.saveToDB();
        }.bind(this),
        false);
    restore.addEventListener('click', function () {
            this.restoreLS();
            this.writer();
        }.bind(this),
        false);

};
Controller.prototype.saveToDB = function () {
    const request = new XMLHttpRequest();

    function reqReadyStateChange() {
        if (request.readyState == 4 && request.status == 200)
            document.getElementById("output").innerHTML = request.responseText;
    }
    const arrayOfPerson = this.model.getArrayOfPerson();
    for (let i = 0; i < arrayOfPerson.length; i++) {
        request.open("POST", "http://localhost:3000/writetodb");
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.onreadystatechange = reqReadyStateChange;
        console.log(' arrayOfPerson[i]= '+arrayOfPerson[i].firstName);
        request.send(arrayOfPerson[i]);
    }
};
Controller.prototype.saveLS = function () {
    localStorage.setItem(this.idLS, this.model.id);
    let arrayString = this.logic.objectToString(this.model.getArrayOfPerson());
    localStorage.setItem(this.arrayLS, arrayString);
};
Controller.prototype.restoreLS = function () {
    this.model.id = localStorage.getItem(this.idLS);
    let arrayString = localStorage.getItem(this.arrayLS);
    let arrayObj = this.logic.stringToJSON(arrayString)
    this.model.setArrayOfPerson(arrayObj);
};
Controller.prototype.writeToInput = function (object) {
    let stringObject = JSON.stringify(object);
    const text = document.getElementById('text');
    text.value = stringObject;
};
Controller.prototype.writer = function () {
    this.clearAllFields();
    let array = this.model.getArrayOfPerson();
    for (let i = 0; i < array.length; i++) {
        switch (i) {
            case 0 :
                this.subWriter0();
                break;
            case 1 :
                this.subWriter1();
                break;
            case 2 :
                this.subWriter2();
                break;
            case 3 :
                this.subWriter3();
                break;
            case 4 :
                this.subWriter4();
                break;
            case 5 :
                this.subWriter5();
                break;
            case 6 :
                this.subWriter6();
                break;
            case 7 :
                this.subWriter7();
                break;
        }
    }
};
Controller.prototype.subWriter0 = function () {
    let obj = this.model.arrayOfPerson[0];

    this.id0.innerText = obj.id;
    this.name0.innerText = obj.firstName;
    this.lastName0.innerText = obj.lastName;
    this.age0.innerText = obj.age;

};
Controller.prototype.subWriter1 = function () {
    let obj = this.model.arrayOfPerson[1];

    this.id1.innerText = obj.id;
    this.name1.innerText = obj.firstName;
    this.lastName1.innerText = obj.lastName;
    this.age1.innerText = obj.age;

};
Controller.prototype.subWriter2 = function () {
    let obj = this.model.arrayOfPerson[2];

    this.id2.innerText = obj.id;
    this.name2.innerText = obj.firstName;
    this.lastName2.innerText = obj.lastName;
    this.age2.innerText = obj.age;

};
Controller.prototype.subWriter3 = function () {
    let obj = this.model.arrayOfPerson[3];

    this.id3.innerText = obj.id;
    this.name3.innerText = obj.firstName;
    this.lastName3.innerText = obj.lastName;
    this.age3.innerText = obj.age;

};
Controller.prototype.subWriter4 = function () {
    let obj = this.model.arrayOfPerson[4];

    this.id4.innerText = obj.id;
    this.name4.innerText = obj.firstName;
    this.lastName4.innerText = obj.lastName;
    this.age4.innerText = obj.age;

};
Controller.prototype.subWriter5 = function () {
    let obj = this.model.arrayOfPerson[5];

    this.id5.innerText = obj.id;
    this.name5.innerText = obj.firstName;
    this.lastName5.innerText = obj.lastName;
    this.age5.innerText = obj.age;

};
Controller.prototype.subWriter6 = function () {
    let obj = this.model.arrayOfPerson[6];

    this.id6.innerText = obj.id;
    this.name6.innerText = obj.firstName;
    this.lastName6.innerText = obj.lastName;
    this.age6.innerText = obj.age;

};
Controller.prototype.subWriter7 = function () {
    let obj = this.model.arrayOfPerson[7];

    this.id7.innerText = obj.id;
    this.name7.innerText = obj.firstName;
    this.lastName7.innerText = obj.lastName;
    this.age7.innerText = obj.age;

};
Controller.prototype.clearAllFields = function () {

    this.id0.innerText = '';
    this.name0.innerText = '';
    this.lastName0.innerText = '';
    this.age0.innerText = '';

    this.id1.innerText = '';
    this.name1.innerText = '';
    this.lastName1.innerText = '';
    this.age1.innerText = '';

    this.id2.innerText = '';
    this.name2.innerText = '';
    this.lastName2.innerText = '';
    this.age2.innerText = '';

    this.id3.innerText = '';
    this.name3.innerText = '';
    this.lastName3.innerText = '';
    this.age3.innerText = '';

    this.id4.innerText = '';
    this.name4.innerText = '';
    this.lastName4.innerText = '';
    this.age4.innerText = '';

    this.id5.innerText = '';
    this.name5.innerText = '';
    this.lastName5.innerText = '';
    this.age5.innerText = '';

    this.id6.innerText = '';
    this.name6.innerText = '';
    this.lastName6.innerText = '';
    this.age6.innerText = '';

    this.id7.innerText = '';
    this.name7.innerText = '';
    this.lastName7.innerText = '';
    this.age7.innerText = '';
};

