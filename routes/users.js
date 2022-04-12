import express from "express";
import { v4 as uuidv4 } from 'uuid';
import { createUser , getUsers ,getUser, deleteUser, updateUser} from "../controller/users.js";


const router = express.Router();

//rough object array
//let users = [
    // {
    //     firstName : "Anand",
    //     lastName : "Shirbhaiyye",
    //     age : "23"
    // },
    // {
    //     firstName : "Ankit",
    //     lastName : "Khapre",
    //     age : "24"
    // }
//];

router.get("/", getUsers);
// all routes in here are starting with / users
//rough get method
// router.get("/", (req, res) => {
//     res.send(users);
// });




router.post("/",createUser );
//Rough post method
// router.post("/", (req, res) => {
//     const user = req.body;

//     users.push({ ...user, id: uuidv4() });

//     res.send(`User with the name ${user.firstName} added to the database !`);

// });

router.get("/:id", getUser);
//  /users/2 => req.params {id : 2}
//rough get id method
// router.get("/:id", (req, res) => {
//     const { id } = req.params;
    
//     const foundUser = users.find(user => user.id === id);

//     res.send(foundUser);
// });

router.delete("/:id", deleteUser);
//rough delete
// router.delete("/:id", (req, res) => {
//      const { id } = req.params;

//      users = users.filter((user => user.id != id));

//      res.send(`User with the id ${id} deleted from the database !`);
// });

router.patch("/:id", updateUser);
//update user method
// router.patch("/:id", (req, res) => {
//     const { id } = req.params;
//     const {firstName,lastName, age} = req.body;

//     const user = users.find((user) => user.id === id);

//     if(firstName) user.firstName = firstName;
//     if(lastName) user.lastName = lastName;
//     if(age) user.age = age;

//     res.send(`User with the id ${id} updated in the database !`);

// })

export default router;