let {users} = require('../data')


function getUser(req, res) {
    let id = req.query.id;
    if(id) {
        let user = users.find((d) => d.id == id)
        if(user) res.send(user);
        else res.status(404).send({error: `User with id ${id} not found`})
        } else  {
            res.send(users)
        }
};

function addUser (req, res) {
    let user = req.body;
    id = users.length + 1;
    users.push({id: id, ...user});
    res.send(user)
}

function updateUser (req, res) {
    console.log(req.params);
    let id = req.params.id;
    let address = req.params.address;
    let user = users.find((d) => d.id == id);
    if(user) {
        user = {...user, ...req.body};
        users = users.filter((u) => u.id != id);
        users.push(user);
        res.send({message: "userName update", user})
    } else {
        res.status(404).send({error: `User with id ${id} not found`});
    }
}

function deleteUser (req, res) {
    let id = req.params.id;
    users = users.filter((user) => user.id != id);
    res.send({message: "User deleted"})
}



module.exports = {getUser, addUser, updateUser, deleteUser };