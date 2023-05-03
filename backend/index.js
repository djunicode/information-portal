const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./connect');

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan('dev'));

app.use('/Filesss', express.static('Filesss'));

const authRouter = require('./routes/auth');
const projectRouter = require('./routes/projectRoutes')
const committeeRouter = require('./routes/committeeRoutes');
const gradeRouter = require('./routes/gradesRoutes');

// Assigning Routes
app.use('/api/auth', authRouter);
app.use('/api/project', projectRouter);
app.use('/api/committee', committeeRouter);
app.use('/api/grades', gradeRouter);

let port = process.env.PORT;
if (port == null || port == '') {
    port = 5000;
}

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
