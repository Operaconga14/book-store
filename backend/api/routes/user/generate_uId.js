const crypto = require('crypto')

function generateRandomNumericId(length) {
    const digits = '0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = crypto.randomInt(0, digits.length);
        id += digits[randomIndex];
    }
    return id;
}


module.exports = generateRandomNumericId
