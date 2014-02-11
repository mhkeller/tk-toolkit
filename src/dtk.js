var fs          = require('fs'),
    dsv         = require('dsv'),
    toDbf       = require('dbf'),
    fromDbf     = require('node-dbf');

function discernFormat(file_name){
  var name_arr = file_name.split('\.')
  format_name = name_arr[name_arr.length - 1];
  return format_name
}

function discernParser(file_name, delimiter){
  if (delimiter) return dsv(delimiter)
  var format = discernFormat(file_name);
  return parsers[format]
}

var parsers = {
  json: JSON,
  csv: dsv.csv,
  tsv: dsv.tsv,
  psv: dsv.dsv('|')
  Dbf_Parser: require('node-dbf')
}

var readers = {
  readCsv: function(path, cb){
    fs.readFile(path, 'utf8', function(err, data){
      cb(err, parsers.csv.parse(data));    
    })
  },
  readCsvSync: function(path){
    return parsers.csv.parse(fs.readFileSync(path, 'utf8'));
  },
  readJson: function(path, cb){
    fs.readFile(path, function(err, data){
      cb(err, JSON.parse(data));
    })
  },
  readJsonSync: function(path){
    return parsers.JSON.parse(fs.readFileSync(path));
  },
  readTsv: function(path, cb){
    fs.readFile(path, 'utf8', function(err, data){
      cb(err, parsers.tsv.parse(data));    
    })
  },
  readTsvSync: function(path){
    return parsers.tsv.parse(fs.readFileSync(path, 'utf8'));
  },
  readPsv: function(path, cb){
    fs.readFile(path, 'utf8', function(err, data){
      cb(err, parsers.psv.parse(data));    
    })
  },
  readPsvSync: function(path){
    return parsers.psv.parse(fs.readFileSync(path, 'utf8'));
  },
  readData: function(path, cb, delimiter){
    fs.readFile(path, 'utf8', function(err, data){
      cb(err, discernParser(path, delimiter).parse(data));    
    })
  },
  readDataSync: function(path, delimiter){
    return discernParser(path, delimiter).parse(fs.readFileSync(path, 'utf8'));
  },
  readDbf: function(path){
    var dbf_parser = new parsers.Dbf_Parser(path),
        rows = [];
    dbf_parser.on('record', function(p) {
        rows.push(p)
    });
    dbf_parser.on('end', function(p) {
        // console.log(rows)
    });
    dbf_parser.parse();

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
  readData: readers.readData,
  readDataSync: readers.readDataSync,
  readDbf: readers.readDbf
}