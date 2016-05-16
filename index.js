var argv = require('argvark');

function parseCommand(interface) {
  for (var command in interface) {
    var fn = interface[command],
        param;
    if (/function ?\(\s*\w+?\)/.test(fn.toString())) {
      // fn is expecting a param
      param = argv('(?:--)?' + command + '=(.+)') || argv.after(command);
      fn(param);
    }
    else if(argv(command) || argv.flag(command)) {
      console.log(command, argv(command));
      fn(param);
    }
  }
}

module.exports = parseCommand;
