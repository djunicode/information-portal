const User = require('../models/user.model');

//signup
const createUser = async (req, res) => {
    try {
        let newUser = new User(req.body);
        await newUser.save();

        res.status(201).json({
            message: 'User created!'
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Login 
const loginUser = async (req, res) => {
    try{
		const user = await User.findByCredentials(req.body.Sapid, req.body.password);

		if (!user) {
			res.status(404).json({
				message: 'User not found!'
			});
			return;
		}
		
		const token = await user.generateAuthToken();
		
		res.status(200).json({
			message: 'Successfully logged in!',
			user,
			token
		});
    } catch(error){
      	res.status(400).json({
        	message: error.message
		});
    }
}


// Logout
const logoutUser = async (req,res) => {
	try {
		const token = req.token;
        const currentUser = req.user;

        currentUser.tokens = currentUser.tokens.filter((usertoken) => {
            return usertoken.token !== token;
        });

        await currentUser.save();

        res.status(200).json({
            message: 'Logged Out Successfully'
        });
	} catch (error) {
		res.status(400).json({
			message: error.message
		});
	}
}

module.exports = {
	loginUser,
	logoutUser,
    createUser
};