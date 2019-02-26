const express        = require("express"),
      app            = express(),
      bodyParser     = require("body-parser"),
      mongoose       = require("mongoose"),
      flash          = require("connect-flash"),
      passport       = require("passport"),
      methodOverride = require("method-override"),
      localStrategy  = require("passport-local"),
      localMongoose  = require("passport-local-mongoose"),
      Campground     = require("./models/campground"),
      Comment        = require("./models/comment"),
      User           = require("./models/user"),
      seedDB         = require("./seeds");

// Requiring Routes
const commentRoutes     = require("./routes/comments"),
      campgroundRoutes  = require("./routes/campgrounds"),
      indexRoutes       = require("./routes/index");

// seedDB(); //seed the database
// mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true });
mongoose.connect("mongodb+srv://corritaylor:nin82Jusa321@cluster0-akfvk.mongodb.net/test?retryWrites=true/", { useNewUrlParser: true });


mongoose.set('useFindAndModify', false);

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.use(methodOverride("_method"));

app.use(flash());

// PASSPORT CONFIG

app.use(require("express-session")({
    secret: "I like pie more than people know",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());

app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use(indexRoutes);

app.use("/campgrounds", campgroundRoutes);

app.use("/campgrounds/:id/comments", commentRoutes);

// LOGIN ROUTES

app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function(req, res){

});

app.get("*", function(req, res){
    res.send("Error - I'm sorry, the page you tried to get to either does not exist or has been removed.");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is ready!");
});