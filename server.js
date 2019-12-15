var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
	//articel object for storing the content which is changing in each artile page
	'article-one': {
		title: 'Article One | Bhushan',
		heading: 'Article One',
		date: 'Dec 15, 2019',
		content: `
			<p>
				I am enthusiastic about doing and learning the programming but
				I lost my motivation right in the middle of the learning 
				when I can't able to solve or do the right amout of task.
			</p>
		`
		},
	'article-two': {
		title: 'Article Two | Bhushan',
		heading: 'Article Two',
		date: 'Dec 16, 2019',
		content: `
			<p>
				But I am so dumb I always get scared of little things.
			</p>
		`
		},
	'article-three': {
		title: 'Article Three | Bhushan',
		heading: 'Article Three',
		date: 'Dec 17, 2019',
		content: `
			<p>
				I think I should have birth as a tortoise.
				I am so lame I don't want to use my brain.
				<hr/>
				Anyways for keeping my faith I use brain that's why I am able to copy and paste this page from external source.	
			</p>
		`
		}

};

function createTemplate (data) {

	var title = data.title;
	var date = data.date;
	var heading = data.heading;
	var content = data.content;

	var htmlTemplate = `
	<!DOCTYPE html>
	<html>
	<head>
		<title>
			${title} 
		</title>
		<!--- For mobile view use below meta---->
    	<meta name="viewport" content="width=device-width, initial-scale=1" />
    	<link href="/ui/style.css" rel="stylesheet" />
	</head>
	<body>
		<div class="container">
		
		<div>
			<a href="/">Home</a>
		</div>
		<hr/>
		<h3>
			${heading} <!--Heading-->
		</h3>
		<div>
			${date} <!--Date-->
		</div>
		<div>
			${content}<!--Content-->
		</div>

    	</div>
	</body>
	</html>

	`;

	return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
	//articleName == articel-one
	//articles[articleName] == {} content object for article one
	var articleName = req.params.articleName; //express framework utility
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
