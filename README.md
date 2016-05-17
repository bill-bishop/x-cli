# x-cli
Intuitive Command-line Interface Builder for Node.js applications. Extremely simple branching based on command line options

### Install

    npm install x-cli

### Usage

    > node some-module -p --age=123 name "John Doe"

    var cli = require('x-cli');

    cli({
      p: function () {}, // this will execute because of the -p flag
      d: function () {} // this will not execute with the given arguments

      age: function (age) {
        // this function will get passed '123' from the above age argument
        // "--age=123" and "age 123" on the command line will both have the same result
      },
      name: function (name) {
        // name is 'John Doe' here
      }
    });
