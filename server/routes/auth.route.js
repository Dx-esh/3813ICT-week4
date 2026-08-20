import express from 'express';

const router = express.Router();

class User {
    constructor(username, birthDate, age, email, password, valid) {
        this.username = username;
        this.birthDate = birthDate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }
}

const users = [
    new User('John', '01/01/2000', 26, 'johndoe@gmail.com', 'password123', true),
    new User('Jane', '15/05/1999', 27, 'janedoe@gmail.com', 'password456', true),
    new User('Ricky', '20/10/2001', 24, 'rickypotts@gmail.com', 'password789', true)
];

router.post('/', (req, res) => {
    const { username, password } = req.body;
    console.log('Login request: ', username);

    const user = users.find(
        user => user.username === username && user.password === password);

    if (user) {
        res.json({ username: user.username, birthDate: user.birthDate, age: user.age, email: user.email, valid: true });
    } else {
        res.status(401).json({ username: username, birthDate: '', age: 0, email: '', valid: false });
    }
});

export default router;