var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const Blog = require('./Models/Blog');
Blog.sync({ force: true });

const { response } = require('express');
// const { values } = require('sequelize/types/lib/operators');

//* ---------------------------- CRUD ----------------------------//
// Select * from Blog
app.get('/api/blogs', (req, res) => {
  Blog.findAll().then((blog) => res.json(blog));
});

// Select * from Blog WHERE id = id
app.get('/api/blogs/:id', (req, res) => {
  Blog.findByPk(req.params.id).then((blog) => {
    if (Blog) {
      res.json(blog);
    } else {
      res.status(404).send();
    }
  });
});

//Create a new Blog
app.post('/api/write', (req, res) => {
  const { author, title, article } = req.body;
  const blog = Blog.create({ author: author, title: title, article: article });
  console.log("Created blog with id : ", blog.id);
  res.redirect("/");
});


//Update the blog
app.put('/api/update', (req, res) => {
  const { id, article } = parseInt(req.body);
  Blog.update({ article: article }, {
    where: {
      id: id
    }
  });
})


//Delete the blog
app.delete('/api/delete', (req, res) => {
  const { id } = parseInt(req.body);
  Blog.destroy({
    where: {
      id: id
    }
  });
});



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
