const testLogic = new Logic();

describe("checkObjectForCreate", () => {
    it('empty', function () {
        const act = testLogic.checkObjectForCreate("");
        const exp = false;
        assert.equal(act, exp);
    });
    it('{firstName:\'Vasya\',lastName:\'Vasin\',gender:\'male\'}', function () {
        const act = testLogic.checkObjectForCreate({'firstName':'Vasya','lastName':'Vasin','age':12});
        const exp = true;
        assert.equal(act, exp);
    });
    it('String "{firstName:\'Vasya\',lastName:\'Vasin\',age:\'male\'}" ', function () {
        const act = testLogic.checkObjectForCreate("{'firstName':'Vasya','lastName':'Vasin','age':'12'}");
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("stringToJSON", () => {
    it('empty', function () {
        const act = testLogic.stringToJSON('{"firstName":"Vasya"}');
        const exp = {"firstName":"Vasya"};
        assert.equal(act, exp);
    });
});
describe("deleteFromArray", () => {
    let array = [0,1,2,3];
    it('[0,1,2,3] (2, array)', function () {
        const act = testLogic.deleteFromArray(2, array);
        const exp = [0,1,3];
        assert.equal(act, exp);
    });
});
describe("checkObjectForDelete", () => {
    let array = [0,1,2,3];
    it('empty', function () {
        const act = testLogic.checkObjectForDelete("");
        const exp = false;
        assert.equal(act, exp);
    });
    it('number 3', function () {
        const act = testLogic.checkObjectForDelete(3);
        const exp = false;
        assert.equal(act, exp);
    });
    it('let obj={"id":8};', function () {
        let obj={"id":8};
        const act = testLogic.checkObjectForDelete(obj);
        const exp = true;
        assert.equal(act, exp);
    });
    it('let obj={"id":7};', function () {
        let obj={"id":7};
        const act = testLogic.checkObjectForDelete(obj);
        const exp = true;
        assert.equal(act, exp);
    });
    it('let obj={"id":0}', function () {
        let obj={"id":0};
        const act = testLogic.checkObjectForDelete(obj);
        const exp = true;
        assert.equal(act, exp);
    });
});
describe("getIndexFromobject", () => {
    let obj={"id":0};
    it('let obj={"id":0}', function () {
        const act = testLogic.getIndexFromobject(obj);
        const exp = 0;
        assert.equal(act, exp);
    });
    let obj2={"id":7};
    it('obj={"id":7}', function () {
        const act = testLogic.getIndexFromobject(obj2);
        const exp = 7;
        assert.equal(act, exp);
    });
});
describe("addMiddlePersonToArray", () => {
    let array = [1,2,4,5];
    let object = 3;
    it('array = [1,2,4,5]; object = 3;', function () {
        const act = testLogic.addMiddlePersonToArray(array, object);
        const exp = [1,2,3,4,5];
        assert.equal(act, exp);
    });

});

