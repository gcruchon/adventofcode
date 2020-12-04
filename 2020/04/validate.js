
const isFourDigit = value => /^\d{4}$/.test(value);

const validateBirthYear = (value) => {
    let year = 0;
    if( isFourDigit(value) ) {
        year = parseInt(value, 10);
    }
    return year >= 1920 && year <= 2002;
}

const validateIssueYear = (value) => {
    let year = 0;
    if( isFourDigit(value) ) {
        year = parseInt(value, 10);
    }
    return year >= 2010 && year <= 2020;
}

const validateExpirationYear = (value) => {
    let year = 0;
    if( isFourDigit(value) ) {
        year = parseInt(value, 10);
    }
    return year >= 2020 && year <= 2030;
}

const validateHeight = (value) => {
    let heightCm = 0;
    let heightIn = 0;
    if( /^\d{3}cm$/.test(value) ) {
        heightCm = parseInt(value, 10);
    }
    if( /^\d{2}in$/.test(value) ) {
        heightIn = parseInt(value, 10);
    }
    return ( heightCm >= 150 && heightCm <= 193 ) || (heightIn >= 59 && heightIn <= 76);
}

const validateHairColor = (value) => {
    return /^#[a-f0-9]{6}$/.test(value);
}

const validateEyeColor = (value) => {
    const acceptedValues = ['amb','blu','brn','gry','grn','hzl','oth'];
    return acceptedValues.includes(value);
}

const validatePassportId = (value) => {
    return /^\d{9}$/.test(value);
}

module.exports = {
    validateBirthYear,
    validateIssueYear,
    validateExpirationYear,
    validateHeight,
    validateHairColor,
    validateEyeColor,
    validatePassportId,
};
