Deployed on heroku https://yelp-camp-cmt.herokuapp.com/
The following is a list of what happened to get to the final deployed version of this application.

# YelpCamp Steps
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

- Each Campground has:
    * Name
    * Image


# Layout and Basic Styling
* Create our header and footer partials
* Add in Bootrap 4


# Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form


# Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid


# Style the Navbar and Form
* Add a navbar to all templates using Bootstrap
* Style the new campground form


# Add Mongoose to an Express App
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!


# Show Page
* Review the RESTful routes we've seen so far
* Add description to our camprground model
* Show db.collection.drop() - deletes all data from the collection
* Add a show route/template

## RESTful Routes
Route name |  URL | HTTP Verb | Description | Mongoose Method
------------ | ------------- | ------------- | ------------- | -------------
Index | /campgrounds | GET | Display a list of all campgrounds | Campground.find()
New | /campgrounds/new | GET | Show form to make new campgrounds | N/A
Create | /campgrounds | POST | Add new campground to database, then redirect | Campground.create()
Show | /campgrounds/:id  | GET | Show info about one campgrounds | Campground.findById()

* Note:
    * Make sure get requests for /url/new (NEW) are always declared before /url/:id (SHOW) IT WILL TREAT YOUR NEW LIKE ANOTHER TYPE OF PAGE

========================================================================================

# Version 2

# Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

# Add Seeds File
* Add a seeds.js file
* Run the seeds file everytime the server starts

# Add the Comment model!
* Make our errors go away!
* Display comments on campground show page

# Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add a new comment form

## RESTful Routes
Route name |  URL | HTTP Verb | Description | Mongoose Method
------------ | ------------- | ------------- | ------------- | -------------
Index | /campgrounds | GET | Display a list of all campgrounds | Campground.find()
New | /campgrounds/new | GET | Show form to make new campgrounds | N/A
Create | /campgrounds | POST | Add new campground to database, then redirect | Campground.create()
Show | /campgrounds/:id  | GET | Show info about one campgrounds | Campground.findById()

## RESTful Routes for comments
Route name |  URL | HTTP Verb
------------ | ------------- | -------------
New | /campgrounds/:id/comments/new | GET
Create | /campgrounds/:id/comments | POST

========================================================================================

# Version 3

# Style Show Page
* Add sidebar to show page
* Display comments nicely

========================================================================================

# Version 4
## Part 1 - Add User Model
* Install all packages needed for auth
* Define User model

## Part 2 - Register
* Configure Passport
* Add register routes
* Add register template

## Part 3 - Login
* Add login routes
* Add login template

## Part 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

## Part 5 - Show/Hide Links
* Show/hide auth links in navbar correctly
* Show user name once logged in within the navbar

========================================================================================
# Version 5
## Refactor The Routes
* Use Express router to reorganize all routes

## Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

## Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

========================================================================================

# Version 6
## Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update RouteFix $set problem

## RESTful Routes for campgrounds

Route name |  URL | HTTP Verb | Description | Mongoose Method
------------ | ------------- | ------------- | ------------- | -------------
Edit | /campgrounds/:id/edit | GET | Show edit form for one campground | Campground.findById()
Update	      |     /campgrounds/:id  |     PUT       | Show info about one campgrounds	          |   Campground.findByIdAndUpdate()

## Deleting Campgrounds
* Add Destroy Route
* Add Delete Button

## Authorization - Campgrounds
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons

## Editing Comments
* Add Edit route for comments
* Add Edit Button
* Add Update route

## Deleting Comments
* Add Destroy Route
* Add Delete Button

## Authorization - Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

========================================================================================

# Version 7
## UI Improvments
* Install Flash Messages
* Install and configure connect-flash
* Add bootstrap alerts to header

## Debugging Campgrounds and Comments
* Not allow someone to change a campground id and post to site
* Not allow someone to change a comment id and post to site

========================================================================================

# Version 8 - Final
## Slideshow
* Adjust views/landing.ejs
* Create a seperate landing.css in the public folder

## Dynamic Pricing
* Add price to campground model as a String datatype
* Add price to views/campgrounds/new.ejs and views/campgrounds/edit.ejs (new and edit forms)
* Add price to views/camprounds/show.ejs (campground show page)

