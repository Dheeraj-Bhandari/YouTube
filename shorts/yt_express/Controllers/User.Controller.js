const User = require("../Models/User.Model")
const RedisClient = require("../Config/redis.config")

exports.getUsers = async (req, res) => {
    console.log("getUsers", req.body)
    try {
        const Users = await User.find();
        return res.status(200).json({ status: true, User: Users })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

exports.addUser = async (req, res) => {
    console.log("inside adUser func", req.body)
    try {

        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(500).json({ error: "All Field is Required" });
        }
        const allUser = await User.findOne({ email: email });
        if (allUser) {
            return res.status(500).json({ error: "Email is Already Exists" });
        }

        let newUser = await User.create({
            name: name,
            email: email,
            password: password
        })
        await newUser.save();

        return res.status(200).json({ status: true, User: newUser })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

exports.loginUser = async (req, res) => {
    console.log("inside loginUser func", req.body)
    try {

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(500).json({ error: "All Field is Required" });
        }
        const userFound = await User.findOne({ $and: [{ email: email }, { password: password }] });

        if (userFound) {

            return res.status(200).json({ status: true, User: userFound })
        }
        else {
            return res.status(500).json({ error: "User Not Found" });
        }

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}