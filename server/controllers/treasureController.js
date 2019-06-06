

async function dragonTreasure(req,res) {
    const db = req.app.get('db')
    const treasure = await db.get_dragon_treasure(1);
    return res.status(200).send(treasure);
}

async function getUserTreasure(req,res) {
    const db = req.app.get('db')
    const userTreasure = await db.get_user_treasure([req.session.user.id]);
    return res.status(200).send(userTreasure);
}

async function addUserTreasure(req,res) {
    const db = req.app.get('db')
    const { treasureURL } = req.body;
    const { id } = req.session.user;
    const userTreasure = await db.add_user_treasure([treasureURL, id]);
    return res.status(200).send(userTreasure);
}

async function getAllTreasure(req,res) {
    const db = req.app.get('db')
    const allTreasure = await db.get_all_treasure();
    return res.status(200).send(allTreasure)
}


module.exports = {
    dragonTreasure,
    getUserTreasure,
    addUserTreasure,
    getAllTreasure
}