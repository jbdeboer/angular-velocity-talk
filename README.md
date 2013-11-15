# Angular Velocity Live Demo

This is a fork of the Angular phonecat tutorial used as a live
demo in the Angular Velocity talk.

## Setup

For the talk, start two webservers:

   * scripts/prod-server.js which listens on port 3000
   * scripts/web-server.js which listens on port 8000

## Demo: Server Round-trips

The first demo shows server round-trips in the phonecat tutorial.

Use the prod-server.js server for this demo.

Notice when index.html, the templates, the data, and the images come in.

## Demo: Runtime playground

The second demo uses an instrumented version of AngularJS to show
the AngularJS digest loop.

Use the web-server.js (although prod-server.js works too) server.

Notice the right-hand side numbers while the we click through the app.
