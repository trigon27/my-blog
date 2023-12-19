const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const DBconnection=require('./database/db.js')
const path = require('path');
const registerRoute = require('./routes/register.js');
const loginRoutes = require('./routes/login.js');
const { profile } = require('console');
const profileRoutes = require('./routes/profile.js');
const logoutRoutes = require('./routes/logout.js');
const postBlog = require('./routes/postBlog.js');
const retrieveBlog = require('./routes/retrieveBlog.js');
const singleBlog = require('./routes/singleBlog.js');
const port = process.env.PORT || 4000;

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


DBconnection();

app.use('/',registerRoute);

app.use('/',loginRoutes);

app.use('/',profileRoutes);

app.use('/',logoutRoutes)

app.use('/',postBlog)

app.use('/',retrieveBlog)

app.use('/',singleBlog)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
