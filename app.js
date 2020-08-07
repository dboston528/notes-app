const getNotes = require('./notes');
const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');

// Custpmize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove  note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function () {
    console.log('List of notes');
  },
});

// Create read commadn
yargs.command({
  command: 'read',
  describe: 'Read notes',
  handler: function () {
    console.log('Read notes!');
  },
});

// add, remove, read, list
// console.log(yargs.argv);
yargs.parse();