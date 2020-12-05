
const validateBoardingPass = (value) => {
    return /^[FB]{7}[RL]{3}$/.test(value)
}

module.exports = validateBoardingPass;
