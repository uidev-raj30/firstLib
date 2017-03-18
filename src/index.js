var uniqueRandomArray = require('unique-random-array');
var employeeList = require("./data/empList.json");

module.exports = {
    all: employeeList,
    random: uniqueRandomArray(employeeList)
}