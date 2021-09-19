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
        let memberID = req.params.member.toLowerCase();

        let memberDisplay = memberData.find(memberDisplay => memberDisplay.username.toLowerCase() === memberID);

        if(memberDisplay != undefined)
        {
            res.render('member',{
                memberDisplay
            });
        }
        else
        {
            res.render('error' , {
                error: "ERROR: El miembre que buscas no existe o escribiste mal el link kpo nos vemos, besitos no homo error edition"
            });
        }
    }
}