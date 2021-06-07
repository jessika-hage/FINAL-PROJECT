import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import crypto from 'crypto'
import bcrypt from 'bcrypt'

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/spaceAPI';
mongoose.connect(mongoUrl, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true });
mongoose.Promise = Promise;

const Citizen = mongoose.model('Citizen', {
	username: {
		type: String,
		required: [true, 'Username Required'],
		unique: [ true, 'Username is already taken']
	},
	email: {
		type: String,
		required: [true, "Email required"],
		unique: [true, "This email is already registrated"],
		trim: true,
		validate: {
		validator: (value) => {
			return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
		},
		message: "Please, enter a valid email",
		},
	},
	password: {
		type: String,
		required: [true, 'Password required']
	},
	accessToken: {
		type: String,
		default: () => crypto.randomBytes(128).toString('hex')
	},
	badges: {
		type: Number,
		default: 5
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

const authenticateCitizen = async (req, res, next) => {
	const accessToken = req.header('Authorization');

	try {
		const citizen = await Citizen.findOne({ accessToken });
		if (citizen) {
		next();
		} else {
		res.status(401).json({ success: false, message: 'Not authorized' });
		}
	} catch (error) {
		res.status(400).json({ success: false, message: 'Invalid request', error });
	}
}


const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello world');
});



app.post('/signup', async (req, res) => {
const { username, email, password } = req.body;

try {
    const salt = bcrypt.genSaltSync();

    const newCitizen = await new Citizen({
		username,
		email,
		password: bcrypt.hashSync(password, salt)
    }).save();
    res.json({
		success: true,
		username: newCitizen.username,
		email: newCitizen.email,
		citizenID: newCitizen._id,
		accessToken: newCitizen.accessToken
    });
  } catch(error) {
    res.status(400).json({ success: false, message: 'Blä blä,Invalid request', error });
  }
});

app.get('/citizens', async (req, res) => {
	const { sort } = req.query
	const sortCitizens = (sort) =>{
		if (sort === 'mostBadges') 
		{
			return{badges: -1}
		}else if (sort ==='leastBadges')
		{
		return{badges: 1}	
		} else if (sort === 'senior'){
			return{createdAt: 1}			
	} else {
		return {createdAt: -1}
	}}

	const allCitizens = await Citizen.find().sort(sortCitizens(sort))

	try {
		return res.json({allCitizens})	

	}catch (error) {
		res.status(400).json({ message: 'Someting went wrong', error });
		}

})

app.post('/signin', async (req, res) => {
	const { username, password } = req.body;

	try {
		const citizen = await Citizen.findOne({ username });

			if (citizen && bcrypt.compareSync(password, citizen.password)) {
			res.json({
			success: true, 
			citizenID: citizen._id,
			username: citizen.username,
			accessToken: citizen.accessToken
			});
		} else {
			res.status(404).json({ success: false, message: 'Citizen not found' });
			}
		} catch (error) {
		res.status(400).json({ success: false, message: 'Blä!!Invalid request', error });
		}
});



app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
