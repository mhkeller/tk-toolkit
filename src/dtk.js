var fs          = require('fs'),
    dsv         = require('dsv'),
    toDbf       = require('dbf'),
    fromDbf     = require('node-dbf');

var parsers = {
  psv: dsv('|')
}

var readers = {
  readCsv: function(path, cb){
    fs.readFile(path, 'utf8', function(err, data){
      cb(err, dsv.csv.parse(data));    
    })
  },
  readCsvSync: function(path){
    return dsv.csv.parse(fs.readFileSync(path, 'utf8'));
  },
  readJson: function(path, cb){
    fs.readFile(path, function(err, data){
      cb(err, JSON.parse(data));
    })
  },
  readJsonSync: function(path){
    return JSON.parse(fs.readFileSync(path));
  },
  readTsv: function(path, cb){
    fs.readFile(path, 'utf8', function(err, data){
      cb(err, dsv.tsv.parse(data));    
    })
  },
  readTsvSync: function(path){
    return dsv.tsv.parse(fs.readFileSync(path, 'utf8'));
  },
  readPsv: function(path, cb){
    fs.readFile(path, 'utf8', function(err, data){
      cb(err, parsers.psv.parse(data));    
    })
  },
  readPsvSync: function(path){
    return parsers.psv.parse(fs.readFileSync(path, 'utf8'));
  },
  readDsv: function(path, delimiter, cb){
    fs.readFile(path, 'utf8', function(err, data){
      cb(err, dsv(delimiter).parse(data));    
    })
  },
  readDsvSync: function(path, delimiter){
    return dsv(delimiter).parse(fs.readFileSync(path, 'utf8'));
  }
}

module.exports = {
  readCsv: readers.readCsv,
  readCsvSync: readers.readCsvSync,
  readJson: readers.readJson,
  readJsonSync: readers.readJsonSync,
  readTsv: readers.readTsv,
  readTsvSync: readers.readTsvSync,
  readPsv: readers.readPsv,
  readPsvSync: readers.readPsvSync,
  readDsv: readers.readDsv,
  readDsvSync: readers.readDsvSync,
}