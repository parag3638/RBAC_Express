const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { use } = require('../authRoutes');
const dotenv = require('dotenv');
dotenv.config();


const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        if (username !== 'user') {
            return res.status(401).send('Invalid User');
        }

        // const isMatch = await bcrypt.compare(password, dbPassword);
        // if (!isMatch) {
        //     return res.status(401).send('Invalid password');
        // }
        // const token = jwt.sign({ id: Userid, role: user.role } process.env.JWT_SECRET, { expiresIn: '1h' });
        const token = jwt.sign({ id: 123, role: "user" }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // res.status(200).send('Login Successful');
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

module.exports = { login };