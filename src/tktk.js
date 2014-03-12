var fs          = require('fs'),
    io          = require('indian-ocean'),
    joiner      = require('joiner'),
    ts          = require('tablespoon'),
    ss          = require('simple-statistics');

module.exports = {

  readData:             io.readData,
  readDataSync:         io.readDataSync,
  readCsv:              io.readCsv,
  readCsvSync:          io.readCsvSync,
  readJson:             io.readJson,
  readJsonSync:         io.readJsonSync,
  readTsv:              io.readTsv,
  readTsvSync:          io.readTsvSync,
  readPsv:              io.readPsv,
  readPsvSync:          io.readPsvSync,

  writeData:            io.writeData,
  writeDataSync:        io.writeDataSync,

  discernFormat:        io.discernFormat,
  discernParser:        io.discernParser,
  discernFileFormatter: io.discernFileFormatter,

  join:                 joiner,

  db:                   ts,

  stats:                ss

}