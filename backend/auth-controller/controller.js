const home = async (req,res) => {
    res.send("Home")
}

const login = async (req,res) => {
    res.send("Login")
}

const signup = async (req,res) => {
    res.send("Signup")
}

module.exports = {home,login,signup}