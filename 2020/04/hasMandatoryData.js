const getField = require("./getField");

const hasMandatoryData = (mandatoryFields, passeport) => {
  let passeportIsValid = true;
  Object.keys(mandatoryFields).forEach((fieldId) => {
    const validateField = mandatoryFields[fieldId];
    const fieldValue = getField(fieldId, passeport);
    // if( !validateField(fieldValue) ) console.debug(`Field '${fieldId}' not OK : ${fieldValue}`);
    passeportIsValid = passeportIsValid && validateField(fieldValue);
    // console.log(validateField);
  });
  return passeportIsValid;
};

module.exports = hasMandatoryData;
