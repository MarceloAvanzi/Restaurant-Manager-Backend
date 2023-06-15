module.exports = (app) => {
    require('dotenv/config');
    const jwt = require('jsonwebtoken')

    const posts = [
        {
            username: 'Kyle',
            title: 'Post 1'
        },
        {
            username: 'Jim',
            title: 'Post 2'
        }
    ]

    app.get('/api/posts', authenticateToken, (req, res) => {

        res.send(posts.filter(post => post.username === req.user.name))
    })

    app.post('/api/login', (req, res) => {
        // This part is where we authenticate the user with password and username (TODO later)

        const username = req.body.username
        const user = { name: username }

        // sign() needs first what we want to serialize (user object in this case), and the second parameter is a secret key which we generate via crypto
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        res.send({accessToken: accessToken})
    })

    // midware function to validate the accessToken and verify if it's the correct user and then return him
    function authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization']
        // token verify if authHeader exists then gets and splits it between Bearer and the token itself, the [1] is to get only the token
        const token = authHeader && authHeader.split(' ')[1]

        if (token == null) return res.sendStatus(401)

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => { //verify()  has a callback function with error and the value we serialized
            if (err) return res.sendStatus(403)
            req.user = user
            next()
        })
    }

};