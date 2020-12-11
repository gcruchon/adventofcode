module.exports = (seats1, seats2) => {
    return seats1.every((cols1, index) => cols1 === seats2[index]);
}