# Welcome to Friend Finder!

Hi! This is a homework App (not real and please dont depend your life on it) **FriendFinder**. If you want to learn about FriendFinder you can read me. This is created by Christina.


# File Structure
FriendFinder
 - .gitignore (node ignored)
 - app
	 - data
		 - friends.json (instead of js I used json with my tutor's help to persist the data)
	 - public
		 - home.html
		 - survey.html
 - routing
	 - apiRoutes.js
	 - htmlRoutes.js
 - node_modules
 - package.json
 - server.js


## Hosting

Heroku - [https://friendfinderct17.herokuapp.com/](https://friendfinderct17.herokuapp.com/)

## Tech Stacks

HTML
Javascripts
MaterializeCSS
Bootstrap
Node.Js
	-Express
	-Path
	-FS

## How does it work
In the home page, click on "Go to Survey" to start answering questions or you can take a look at the Friends api or visit my git repo.
In the survey page, please first provide your name and link to your photo. Then answer each question and provide a rating that reflects your taste in things. 1 being ugh definitely not and 5 being omg absolutely yes! Submit your survey. For each of your answer to the question, an algorithm will run through your self rated number and compare it to the same question of all other "friends" had answered. A difference is calculated on each question and your **BestMatch** is determined by the total smallest differences for all questions. 

