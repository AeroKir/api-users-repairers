const db = require('../storage/db');

async function getRepairers() {
       const result = await db.query(`SELECT * FROM repairers`);
       console.log(result);
       return result;
}

module.exports = {
    getRepairers
};
