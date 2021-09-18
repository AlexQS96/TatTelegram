const fs = require('fs');
const path = require('path');

module.exports = {
    memberData: JSON.parse(fs.readFileSync(path.join(__dirname, '/membersInfo.json'), "utf-8"))
}