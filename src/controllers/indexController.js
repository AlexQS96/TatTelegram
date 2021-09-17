let { memberData } = require('../data/db');

module.exports = {
    index: (req, res) => {
        res.render('home');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    events: (req, res) => {
        res.render('events');
    },
    members: (req, res) => {
        res.render('membersPage', {
            memberData
        });
    },
    member: (req, res) => {
        let memberID = +req.params.id;

        let memberDisplay = memberData.find(memberDisplay => memberDisplay.id === memberID);

        res.render('member',{
            memberDisplay
        });
    }
}