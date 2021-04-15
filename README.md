# Game Blog

A place to put some of a writing about games, and something to get me back into building javascript projects after the holidays. Runs as an express server serving static files with the Pug templating engine.

Hosted [here](https://game-blog-1312.herokuapp.com/) for now.

## Running the site

If you want to run this yourself for some reason:

Run `npm install` then start the server with `npm start`.

You can then run the cypress tests through the test runner with `npx cypress open`. Make sure the server is running before doing this (in a different terminal or window usually).

## Notes

### Currently working on

- Having built-in sections for the articles which are actually separate in the DB
- Making said sections individually selectable (ie table of contents)

### Testing

I originally started building the tests for this using Mocha and Supertest, but decided/realised that proper end-to-end testing was needed, and that Cypress would be a better solution. There are still some remnants of Mocha/Supertest in the repo which I need to clean up (package.json etc) and that's why.

### Database etc.

I've decided to store all data (at the moment, just articles, but that may change) in a Mongo cloud database. This is more for practice using a cloud database and pulling data off it than because I think that is the optimum way to structure a blog, as this is more intended as development practice for me than anything else. This means that I'm using Mongoose (far easier to setup and use than MongoDB's own solution) as my solution for database modelling, querying, etc. At some point down the line this will all mean that I may have to work out some changes to the schema in order to allow proper templating for article pages.

### Styling

Styling is a mess for now, as I am partially using this project as an excuse to mess around with learning some basic design principles, a big hole in my knowledge which I want to patch up. Excuse some of the pages looking like a geocities site that magically got access to modern dev tools.

Also being used as a way to learn about using the Pug template engine, because it looked cool.
