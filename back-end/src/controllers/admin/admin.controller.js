const User = require('../../modals/users')
const jwt = require('jsonwebtoken')

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) {
                return res.status(400).json({
                    message: 'someting went wrong',
                    error
                })
            }
            if (user) {
                //   we got the valid email lets do for password
                if (user.authenticate(req.body.password) && user.role === "admin") {
                    // lets token generation
                    let token = jwt.sign({ _id: user._id , role: user.role }, process.env.SECRET_KEY, { expiresIn: '2d' });

                    const { _id, firstName, lastName, email, role, fullName } = user;

                 return   res.status(200).json({
                        token,
                        user: {
                            _id,
                            firstName,
                            lastName,
                            email,
                            role,
                            fullName
                        },
                        message:'Login Successfully'
                    })

                } else {
                    return res.status(400).json({
                        message: 'Invalid Password',
                        error
                    })
                }


            } else {
                return res.status(400).json({
                    message: 'something went wrong',
                    error
                })
            }
        })

}


// signup 
exports.signup = (req, res) => {
    // lets check the user exits or not
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user)
                return res.status(400).json({
                    message: 'Admin is already present',
                    user
                })
            //  now in case there is no user present
            const { firstName, lastName, email, password } = req.body;
            const newUser = new User({
                firstName,
                lastName,
                email,
                password,
                username: Math.random().toString(),
                role:'admin'
            })
            newUser.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: 'could not save new usert',
                        error
                    })
                }
                if (data) {
                    return res.status(201).json({
                        message: 'new Admin Registred',
                        user: data
                    })
                }
            })
        })
}