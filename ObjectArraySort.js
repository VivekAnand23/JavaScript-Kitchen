var objArraySample = [
    { 'name': 'Name2', 'age': 40 }, 
    { 'name': 'Name1', 'age': 35 }, 
    { 'name': 'name3', 'age': 45 }, 
    { 'name': 'Name5', 'age': 43 }, 
    { 'name': 'name3', 'age': 32 }, 
    { 'name': 'name4', 'age': 53 }
];

// Ascending Order
const ASC = 1;
// Descending Order
const DESC = -1;

/**
 * Compare the values for a field in 2 objects to determine the sort order arrangement.
 */
var compareValues = function(obj1, obj2, fieldName, sortOrder, secFieldName = null, secSortOrder = ASC) {
    if (obj1[fieldName] === obj2[fieldName]) {
        return (secFieldName === null) ? 0 : compareValues(obj1, obj2, secFieldName, secSortOrder);
    }
    return sortOrder * ((String(obj1[fieldName]).toUpperCase() > String(obj2[fieldName]).toUpperCase()) ? 1 : -1);
}

/**
 * Sorts an Object Array on specified field and sort order.
 * 
 * It also accepts secondary fieldname to sort in secondary sort order. It will be used if the 
 * value of first sort field is same for 2 or more objects.
 */
var sort = function(objArray, fieldName, sortOrder = ASC, secFieldName = null, secSortOrder = ASC) {
    if (!objArray[0].hasOwnProperty(fieldName)) {
        throw new Error('Invalid field! [' + fieldName + '] ')
    }
    return objArray.sort(function(obj1, obj2) {
        return compareValues(obj1, obj2, fieldName, sortOrder, secFieldName, secSortOrder);
    });
}

console.log(sort(objArraySample, 'name', ASC, 'age', DESC));
