import jwt from 'jsonwebtoken'

// this is saved in the database
let refreshTokens = []

export default class JwtService {
    static generateToken = (user) => {
        return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1d' });
    }

    // midware function to validate the accessToken and verify if it's the correct user and then return him
    static authenticateToken = (req, res, next) => {
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

    static generateAccessToken = (user) => {
        // sign() needs first what we want to serialize (user object in this case), and the second parameter is a secret key which we generate via require('crypto').randomBytes(64).toString('hex')
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
    }

    static refreshToken = (req, res) => {
        const refreshToken = req.body.token
        if (refreshToken == null) return res.sendStatus(401)
        if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) return send.sendStatus(403)
            const accessToken = this.generateAccessToken({ name: user.name })

            res.send({ accessToken: accessToken })
        })
    };

    static login = (req, res) => {
        // This part is where we authenticate the user with password and username (TODO later)

        const username = req.body.username
        const user = { name: username }

        const accessToken = this.generateAccessToken(user)
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
        refreshTokens.push(refreshToken)

        res.send({ accessToken: accessToken, refreshToken: refreshToken })
    };

    static logout = (req, res) => {
        // this should delete in the database the refreshtokens
        refreshTokens = refreshTokens.filter(token => token !== req.body.token)
        res.sendStatus(204)
    };
}