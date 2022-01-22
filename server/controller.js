require(`dotenv`).config()
const { CONNECTION_STRING } = process.env
const Sequelize = require('sequelize')
const bcrypt = require('bcryptjs')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    register: async (req, res) => {
        //all written in a try-catch because EVERYTHING has to work before we actually save the user into our database - ASYNC
        try {
            ///deconstruct username and password from req.body
            const { username, password } = req.body
            //check to see if username already exists
            const existingUser = await sequelize.query(`SELECT * FROM users 
            WHERE username = '${username}'`)
            //send error if username is taken
            if(existingUser[0][0]) {
                return res.status(409).send('username already exists')
            }
            //salt and hash the password inputed by the user
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            let user = await sequelize.query(`INSERT INTO users 
            (username,password)
            VALUES('${username}', '${hash}')
            RETURNING *;`)

            user = user[0][0]
            delete user.password
            // console.log(req.session)
            req.session.user = user
            // console.log(req.session)

            res.status(200).send(req.session.user)

        } catch (error) {
            console.log(error)
        }

     },
    login: (req, res) => {

     },
    logout: (req, res) => {

     }
}