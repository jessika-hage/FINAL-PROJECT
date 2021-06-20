import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/spaceAPI';
mongoose.connect(mongoUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});
mongoose.Promise = Promise;

const Citizen = mongoose.model('Citizen', {
	username: {
		type: String,
		required: [true, 'Username Required'],
		unique: [true, 'Username is already taken'],
		maxlength: [10, 'Your username can be max 15 characters'],
	},
	email: {
		type: String,
		required: [true, 'Email required'],
		unique: [true, 'This email is already registrated'],
		trim: true,
		validate: {
			validator: (value) => {
				return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
			},
			message: 'Please, enter a valid email',
		},
	},
	password: {
		type: String,
		required: [true, 'Password required'],
	},
	accessToken: {
		type: String,
		default: () => crypto.randomBytes(128).toString('hex'),
	},
	badges: {
		type: Number,
		default: 5,
	},
	ranking: {
		type: Number,
		default: 1,
	},
	coins: {
		type: Number,
		default: 10,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	avatar: {
		type: String,
		default: 'man',
	},
	items: {
		type: Array,
	},
	investments: {
		type: Number,
		default: 0,
	},
	investmentQuantity: {
		type: Number,
		default: 0,
	},
	energy: {
		type: Number,
		default: 2000,
	},
	highscoreSpaceball: {
		type: Number,
		default: 0,
	},
	highscoreFish: {
		type: Number,
		default: 0,
	},
	highscoreMath: {
		type: Number,
		default: 0,
	},
});

const CitizenMessage = mongoose.model('CitizenMessage', {
	message: String,
	createdAt: {
		type: Date,
		default: Date.now,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Citizen',
	},
});

// Authorization
const authenticateCitizen = async (req, res, next) => {
	const accessToken = req.header('Authorization');

	try {
		const citizen = await Citizen.findOne({ accessToken });
		if (citizen) {
			req.citizen = citizen;
			next();
		} else {
			res.status(401).json({ success: false, message: 'Not authorized' });
		}
	} catch (error) {
		res.status(400).json({ success: false, message: 'Invalid request', error });
	}
};

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello world');
});

// GET all citizens
app.get('/citizens', async (req, res) => {
	const { sort } = req.query;
	const sortCitizens = (sort) => {
		if (sort === 'mostBadges') {
			return { badges: -1 };
		} else if (sort === 'senior') {
			return { createdAt: 1 };
		} else if (sort === 'junior') {
			return { createdAt: -1 };
		} else if (sort === 'richest') {
			return { coins: -1 };
		} else if (sort === 'highscoreSpaceball') {
			return { highscoreSpaceball: -1 };
		} else if (sort === 'highscoreFish') {
			return { highscoreFish: -1 };
		} else if (sort === 'highscoreMath') {
			return { highscoreMath: -1 };
		} else {
			return { ranking: -1 };
		}
	};

	const allCitizens = await Citizen.find().sort(sortCitizens(sort)).exec();

	try {
		return res.json({ allCitizens });
	} catch (error) {
		res.status(400).json({ message: 'Someting went wrong', error });
	}
});

//use to generate a random link to reset password
// const randomString = (length) => {
// 	let text = '';
// 	const possible = 'abcdefghijklmnopqrstuvwxyx123456789_-.';
// 	for (let i = 0; i < length; i++) {
// 		text += possible.charAt(Math.floor(Math.random() * possible.length));
// 	}
// 	return text;
// };

// app.put('/citizen/password', authenticateCitizen);
// app.put('/citizen/password', async (req, res) => {
// 	if (!req.body) return res.status(400).json({ message: 'No request body' });
// 	if (!req.body.email)
// 		return res.status(400).json({ message: 'No email in request body' });

// 	const token = randomString(40);
// 	const emailData = {
// 		to: req.body.email,
// 		subject: 'Hello ✔', // Subject line
// 		text: 'Hello world?', // plain text body
// 		html: '<b>Hello world?</b>',
// 	};
// 	return Citizen.update(
// 		{ email: req.body.email },
// 		{ $set: { resetPassLink: token } },
// 		function (error, feedback) {
// 			if (error) return res.send(error);
// 			else {
// 				sendEmail(emailData);
// 				return res
// 					.status(200)
// 					.json({ message: `Email has been sent to ${req.body.email}` });
// 			}
// 		}
// 	);
// });

// app.put('/api/resetpass', async (req, res) => {
// 	const { resetPassLink, newPassword } = req.body;
// 	Citizen.hashPassword(newPassword).then((hashPassword) => {
// 		return Citizen.update(
// 			{ resetPassLink },
// 			{ $set: { password: hashedPass, reserPassLink: '' } },
// 			function (error, feedback) {
// 				if (error) return res.send(error);
// 				return res.send(feedback);
// 			}
// 		);
// 	});
// });

//update password when you remember your old password
app.patch('/citizen/:id/password', authenticateCitizen);
app.patch('/citizen/:id/password', async (req, res) => {
	const { _id } = req.citizen;
	const { password, newPassword } = req.body;

	try {
		const salt = bcrypt.genSaltSync();

		if (req.citizen && bcrypt.compareSync(password, req.citizen.password)) {
			const updatedCitizen = await Citizen.findByIdAndUpdate(
				_id,
				{
					password: bcrypt.hashSync(newPassword, salt),
				},
				{ new: true }
			);
			res.json({ success: true, message: 'password updated!' });
		} else {
			res.status(401).json({ success: false, message: 'Could not update password!' });
		}
	} catch (error) {
		res.status(400).json({ success: false, message: 'Invalid request', error });
	}
});

//update password when you forgot your old password
// app.patch('/citizen/newpassword', authenticateCitizen);
// app.patch('/citizen/newpassword', async (req, res) => {
// 	const { _id } = req.citizen;
// 	const { newPassword } = req.body;

// 	try {
// 		const salt = bcrypt.genSaltSync();

// 		const updatedCitizen = await Citizen.findByIdAndUpdate(
// 			_id,
// 			{
// 				password: bcrypt.hashSync(newPassword, salt),
// 			},
// 			{ new: true }
// 		);
// 		res.json({ success: true });
// 	} catch (error) {
// 		res.status(400).json({ success: false, error });
// 	}
// });

// POST for signing up
app.post('/signup', async (req, res) => {
	const { username, email, password, avatar } = req.body;

	try {
		const salt = bcrypt.genSaltSync();

		const newCitizen = await new Citizen({
			username,
			email,
			password: bcrypt.hashSync(password, salt),
			avatar,
		}).save();
		res.json({
			success: true,
			username: newCitizen.username,
			email: newCitizen.email,
			userId: newCitizen._id,
			accessToken: newCitizen.accessToken,
			badges: newCitizen.badges,
			ranking: newCitizen.ranking,
			coins: newCitizen.coins,
			avatar: newCitizen.avatar,
			items: newCitizen.items,
			createdAt: newCitizen.createdAt,
			investments: newCitizen.investments,
			investmentQuantity: newCitizen.investmentQuantity,
			energy: newCitizen.energy,
			highscoreSpaceball: newCitizen.highscoreSpaceball,
			highscoreFish: newCitizen.highscoreFish,
			highscoreMath: newCitizen.highscoreMath,
		});
	} catch (error) {
		if (error.code === 11000) {
			if (error.keyValue.username) {
				res.status(400).json({
					success: false,
					message: 'Another citizen already has that username',
					error,
				});
			} else if (error.keyValue.email) {
				res.status(400).json({
					success: false,
					message: 'You can not have the same email as another citizen',
					error,
				});
			}
		}
		res.status(400).json({ success: false, message: 'Invalid request', error });
	}
});

// POST for signing in
app.post('/signin', async (req, res) => {
	const { username, password } = req.body;

	try {
		const citizen = await Citizen.findOne({ username });

		if (citizen && bcrypt.compareSync(password, citizen.password)) {
			res.json({
				success: true,
				userId: citizen._id,
				username: citizen.username,
				accessToken: citizen.accessToken,
				badges: citizen.badges,
				ranking: citizen.ranking,
				coins: citizen.coins,
				avatar: citizen.avatar,
				items: citizen.items,
				createdAt: citizen.createdAt,
				investments: citizen.investments,
				investmentQuantity: citizen.investmentQuantity,
				energy: citizen.energy,
				highscoreSpaceball: citizen.highscoreSpaceball,
				highscoreFish: citizen.highscoreFish,
				highscoreMath: citizen.highscoreMath,
			});
		} else {
			res.status(404).json({ success: false, message: 'Citizen not found' });
		}
	} catch (error) {
		res
			.status(400)
			.json({ success: false, message: 'Invalid request', error });
	}
});

// GET Messages for messageboard
app.get('/citizenmessage', async (req, res) => {
	const citizenMessage = await CitizenMessage.find()
		.sort({ createdAt: -1 })
		.populate('user', 'username avatar');
	res.json({ success: true, citizenMessage });
});

// POST message on messageboard
app.post('/citizenmessage/:userid', authenticateCitizen);
app.post('/citizenmessage/:userid', async (req, res) => {
	const { message } = req.body;
	const { userid } = req.params;

	try {
		const user = await Citizen.findById(userid);
		const newCitizenMessage = await new CitizenMessage({ message, user }).save();
		res.json({ success: true, newCitizenMessage });
	} catch (error) {
		res.status(400).json({ success: false, message: 'Invalid request', error });
	}
});

// PATCH for updating avatar
app.patch('/citizen/:id/avatar', authenticateCitizen);
app.patch('/citizen/:id/avatar', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedAvatar = await Citizen.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (updatedAvatar) {
			res.json(updatedAvatar);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});


// PATCH for increasing badges
app.patch('/citizen/:id/badges', authenticateCitizen);
app.patch('/citizen/:id/badges', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedBadges = await Citizen.findByIdAndUpdate(
			id,
			{
				$inc: {
					badges: req.body.badges,
				},
			},
			{ new: true }
		);
		if (updatedBadges) {
			res.json(updatedBadges);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for increasing ranking
app.patch('/citizen/:id/ranking', authenticateCitizen);
app.patch('/citizen/:id/ranking', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedRanking = await Citizen.findByIdAndUpdate(
			id,
			{
				$inc: {
					ranking: req.body.ranking,
				},
			},
			{ new: true }
		);
		if (updatedRanking) {
			res.json(updatedRanking);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for increasing coins
app.patch('/citizen/:id/coins', authenticateCitizen);
app.patch('/citizen/:id/coins', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedCoins = await Citizen.findByIdAndUpdate(
			id,
			{
				$inc: {
					coins: req.body.coins,
				},
			},
			{ new: true }
		);
		if (updatedCoins) {
			res.json(updatedCoins);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for adding items from shop
app.post('/citizen/:id/items', authenticateCitizen);
app.post('/citizen/:id/items', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedItems = await Citizen.findByIdAndUpdate(
			id,
			{
				$addToSet: { items: req.body.items },
			},
			{ new: true }
		);
		if (updatedItems) {
			res.json(updatedItems);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for updating investments
app.patch('/citizen/:id/investments', authenticateCitizen);
app.patch('/citizen/:id/investments', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedInvestments = await Citizen.findByIdAndUpdate(
			id,
			{
				$inc: {
					investments: req.body.investments,
					investmentQuantity: req.body.investmentQuantity,
				},
			},
			{ new: true }
		);
		if (updatedInvestments) {
			res.json(updatedInvestments);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for increasing caloryintake
app.patch('/citizen/:id/energy', authenticateCitizen);
app.patch('/citizen/:id/energy', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedEnergy = await Citizen.findByIdAndUpdate(
			id,
			{
				$inc: {
					energy: req.body.energy,
				},
			},
			{ new: true }
		);
		if (updatedEnergy) {
			res.json(updatedEnergy);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for updating highscore spaceball
app.patch('/citizen/:id/highscoreSpaceball', authenticateCitizen);
app.patch('/citizen/:id/highscoreSpaceball', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedHighscoreSpaceball = await Citizen.findByIdAndUpdate(
			id,
			req.body,
			{ new: true }
		);
		if (updatedHighscoreSpaceball) {
			res.json(updatedHighscoreSpaceball);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for updating highscore fish farm
app.patch('/citizen/:id/highscoreFish', authenticateCitizen);
app.patch('/citizen/:id/highscoreFish', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedHighscoreFish = await Citizen.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (updatedHighscoreFish) {
			res.json(updatedHighscoreFish);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for updating highscore math
app.patch('/citizen/:id/highscoreMath', authenticateCitizen);
app.patch('/citizen/:id/highscoreMath', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedHighscoreMath = await Citizen.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (updatedHighscoreMath) {
			res.json(updatedHighscoreMath);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
