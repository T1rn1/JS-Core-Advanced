function compareObjects(obj1, obj2){
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length < keys2.length) {
        return false;
    }

    for (let key of keys2) {
        if (!keys1.includes(key) || obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

const object1 = {
    property1: "value1",
    property2: "value2",
    property3: "value3"
};

const object2 = {
    property1: "value1",
    property2: "value2"
};

console.log(compareObjects(object1, object2));