const repairersData = require('../dal/repairers.data');

async function getRepairers(req, res) {
    try {
        res.json(await repairersData.getRepairers());
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getRepairers
};
