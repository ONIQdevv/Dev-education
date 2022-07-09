// {"id":7}
// {"firstName":"Vasya","lastName":"Vasin","age":12}

function Logic() {
    this.tooltip;
}

Logic.prototype.objToJson = function (obj) {
    return JSON.stringify(obj);
};
Logic.prototype.checkObjectForCreate = function (obj) {
    if (obj.firstName !== undefined && obj.lastName !== undefined && obj.age !== undefined) {
        return true;
    }
    return false;
};
Logic.prototype.checkObjectForDelete = function (obj) {
    if (obj.id >= 0) {
        return true;
    }
    return false;
};
Logic.prototype.stringToJSON = function (string) {
    return JSON.parse(string);
};
Logic.prototype.objectToString = function (obj) {
    return JSON.stringify(obj);
};
Logic.prototype.addIdToObject = function (num, obj) {
    let objectWithId = {
        id: num,
        firstName: obj.firstName,
        lastName: obj.lastName,
        age: obj.age
    }
    return objectWithId;
};
Logic.prototype.deleteFromArray = function (index, array) {
    array.splice(index, 1);
    console.log("array.splice   " + array);
    return array;
};
Logic.prototype.getIndexFromobject = function (object) {
    return object.id;
};
Logic.prototype.getIndexOfObjectByID = function (id, array) {
    for (let i = 0; i < array.length; i++) {
        let obj = array[i];
        if (obj.id === id) {
            return i;
        }
    }
    return;
};
Logic.prototype.getSubjectForUpdate = function (object) {
    if (object.id >= 0) {
        if (object.firstName !== undefined) {
            return 'firstName';
        }
        if (object.lastName !== undefined) {
            return 'lastName';
        }
        if (object.age !== undefined) {
            return 'age';
        }
        return false;
    }

    return false;
};
Logic.prototype.updateFirstNameInObj = function (object, newName) {
    let objNewPerson = {
        id: object.id,
        firstName: newName,
        lastName: object.lastName,
        age: object.age
    };
    return objNewPerson;
};
Logic.prototype.changeObjInArray = function (array, object, index) {
    array[index] = object;
    return array;
};
Logic.prototype.updateLastNameInObj = function (object, newLastName) {
    let objNewPerson = {
        id: object.id,
        firstName: object.firstName,
        lastName: newLastName,
        age: object.age
    };
    return objNewPerson;
};
Logic.prototype.updateAgeInObj = function (object, newAge) {
    let objNewPerson = {
        id: object.id,
        firstName: object.firstName,
        lastName: object.lastName,
        age: newAge
    };
    return objNewPerson;
};
Logic.prototype.addStartPersonToArray = function (array, object) {
    let newArray = [];
    newArray[0] = object;
    for (let i = 0; i < array.length; i++) {
        newArray[i + 1] = array[i];
    }
    return newArray;
};
Logic.prototype.addMiddlePersonToArray = function (array, object) {
    let newArray = [];
    let middle = Math.round((array.length) / 2);
    newArray[middle] = object;
    for (let i = 0; i < middle; i++) {
        newArray[i] = array[i];
    }
    for (let i = middle; i < array.length; i++) {
        newArray[i + 1] = array[i];
    }
    return newArray;
};








