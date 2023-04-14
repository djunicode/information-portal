const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./connect');

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan('dev'));

const authRouter = require('./routes/auth');
const committeeRouter = require('./routes/committeeRoutes');
// Assigning Routes
app.use('/api/auth', authRouter);
app.use('/committee', committeeRouter);

let port = process.env.PORT;
if (port == null || port == '') {
    port = 5000;
}

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
