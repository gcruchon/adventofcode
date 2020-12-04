const data = require("./data");

const mandatoryFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid' ];
const hasField = (fieldId, passeport) => {
    return passeport.indexOf( fieldId + ':') > -1;
}

const hasMandatoryData = (mandatoryFields, passeport) => {
    return mandatoryFields.reduce( (accumulator, fieldId) => accumulator && hasField(fieldId, passeport), true );
}

const results = data.filter(passeport => hasMandatoryData(mandatoryFields, passeport));

console.log("results", results.length);
