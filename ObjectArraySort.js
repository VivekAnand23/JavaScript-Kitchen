var objArraySample = [{
    'name': 'Name1',
    'age': 40
}, {
    'name': 'Name2',
    'age': 35
}, {
    'name': 'Name3',
    'age': 45
}, {
    'name': 'Name4',
    'age': 43
}, {
    'name': 'Name5',
    'age': 32
}, {
    'name': 'Name6',
    'age': 53
}];

const ASC = 1;
const DESC = -1;
var compareValues = function(obj1, obj2, fieldName, sortOrder, secFieldName, secSortOrder) {
    if (obj1[fieldName] === obj2[fieldName]) {
        return (secFieldName === null) ? 0 : compareValues(obj1, obj2, secFieldName, secSortOrder);
    }
    return sortOrder * ((obj1[fieldName] > obj2[fieldName]) ? 1 : -1);
}


var sort = function(objArray, fieldName, sortOrder = ASC, secFieldName = null, secSortOrder = ASC) {
    if (!objArray[0].hasOwnProperty(fieldName)) {
        throw new Error('Invalid field! [' + fieldName + '] ')
    }
    return objArray.sort(function(obj1, obj2) {
        return compareValues(obj1, obj2, fieldName, sortOrder, secFieldName, secSortOrder);
    });
}

console.log(sort(objArraySample, 'name', ASC, 'age', DESC));