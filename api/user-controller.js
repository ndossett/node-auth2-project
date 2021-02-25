const bcryptjs = require("bcryptjs");

const { hash, makeToken } = require("./helpers/user-helpers");

const Users = require("./user-model");

async function register (req, res) {
    const newUser = {
        username : req.body.username,
        password : hash(req.body.password)  
    }
    
    try {
        const user = await Users.insert(newUser);
        res.status(201).json({message: `User with username: ${user.username} has successfully been created`});
    } catch (err) {
        res.status(500).json(err)
    }
    
}

async function login (req, res) {
    const { username, password } = req.body;
    console.log(username, password)
    try {
        const user = await Users.findBy(username);
        console.log(user)
        if(user && bcryptjs.compareSync(password, user.password)){
        const token = makeToken(user)    
        res.status(200).json(token)
        } else {
            res.status(401).json({message: "Username or password are incorrect"})
        }
    } catch (err) {
        res.status(500).json("you shall not pass!")
    }
}

module.exports = {
    register,
    login
}
