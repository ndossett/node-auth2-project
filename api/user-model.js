const db = require("../data/db-config");

module.exports = {
    get,
    insert,
    findBy,
    findByID
};

function get() {
    return db("users")
}

function findBy(username) {
    return db("users")
        .where(username)
        .orderBy("id")
}

function findByID(id) {
    return db("users")
        .where({id})
        .first()
}

async function insert(user) {
    const [id] = await db("users").insert(user, "id")
    return findByID(id)
}

