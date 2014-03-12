The TK Toolkit
==============

A work-in-progress collection of utilities to help with reading, transforming and writing data. 

# Installation

````
npm install tktk
````

# Usage

Examples TK.

# Current functions

* [Reading data](#reading-data)
    * [.readData(filepath, [delimiter], callback)](#readdatafilepath-delimiter-callback)
    * [.readDataSync(filepath, [delimiter])](#readdatasyncfilepath-delimiter)
    * [.readJson(filepath, callback)](#readjsonfilepath-callback)
    * [.readJsonSync(filepath)](#readjsonsyncfilepath)
    * [.readCsv(filepath, callback)](#readcsvfilepath-callback)
    * [.readCsvSync(filepath)](#readcsvsyncfilepath)
    * [.readTsv(filepath, callback)](#readtsvfilepath-callback)
    * [.readTsvSync(filepath)](#readtsvsyncfilepath)
    * [.readPsv(filepath, callback)](#readpsvfilepath-callback)
    * [.readPsvSync(filepath)](#readpsvsyncfilepath)
* [Writing data](#writing-data)
    * [.writeData(filepath, data, callback)](#writedatafilepath-data-callback)
    * [.writeDataSync(filepath, data)](#writedatasyncfilepath-data)
* [Joining data](#joining-data)
    * .join.left(leftData, leftDataKey, rightData, rightDataKey, [nestedKeyName])
    * .join.geoJson(leftData, leftDataKey, rightData, rightDataKey)
* [Creating a database](#database-operations)
    * .db.sqlite()
    * .db.pgsql(dbConnectionString)
    * .db.createTable(dataobject, [tablename], [tableschema], [permanent])
    * .db.createTableCommands(dataobject, [tablename], [tableschema], [permanent], [skipinsert])
    * .db.createEmptyTable(dataobject, [tablename], [tableschema], [permanent])
    * .db.insert(dataobject, [tablename])
* [Querying a database](#database-operations)
    * .db.query(queryString, function)
    * .db.query.each(queryString, function)
    * .db.queries(list, function)
    * .db.queries.each(list, function)
* [Statistics](#statistics)
    * .db.stats
* [Helpers](#helpers)
    * [.discernFormat(filepath)](#discernformatfilepath)
    * [.discernParser(filepath, [delimiter]](#discernparserfilepath-delimiter)
    * [.discernFileFormatter(filepath)](#discernfileformatterfilepath)


## Reading data

Uses the [`indian-ocean`](https://github.com/mhkeller/indian-ocean) module. Reads a variety of data file formats in as json.

### .readData(filepath, [delimiter], callback)

Reads in a data file given a path ending in the file format. Callback structure is `function(err, data)`.

Supported formats:

* `.json`
* `.csv` Comma-separated
* `.tsv` Tab-separated
* `.psv` Pipe-separated

Pass in a delimiter as the second argument to read in another format.

### .readDataSync(filepath, [delimiter])

Syncronous version of `.readData()`

### .readJson(filepath, callback)

Read in a json file. Callback structure is `function(err, data)`.

### .readJsonSync(filepath)

Read json syncronously.

### .readCsv(filepath, callback)

Read in a comma-separated value file. Callback structure is `function(err, data)`.

### .readCsvSync(filepath)

Read csv syncronously.

### .readTsv(filepath, callback)

Read in a tab-separated value file. Callback structure is `function(err, data)`.

### .readTsvSync(filepath)

Read tsv syncronously.

### .readPsv(filepath, callback)

Read in a pipe-separated value file. Callback structure is `function(err, data)`.

### .readPsvSync(filepath)

Read psv syncronously.

## Writing data

Uses the [`indian-ocean`](https://github.com/mhkeller/indian-ocean) module. Writes json objects to the specified format.

### .writeData(filepath, data, callback)

Write out the data object, inferring the file format from the file ending specified in `filepath`. Callback structure is `function(err, data)`.

Supported formats:

* `.json`
* `.csv` Comma-separated
* `.tsv` Tab-separated
* `.psv` Pipe-separated

### .writeDataSync(filepath, data)

Syncronous version of `.writeData`. Callback structure is `function(err)`.

## Joining data

Uses the [`joiner`](http://github.com/mhkeller/joiner) module. All methods return an object with the following structure:

````
data: [data object],
report: {
	diff: {
		a: [data in A],
		b: [data in A],
		a_and_b: [data in A and B],
		a_not_in_b: [data in A not in B],
		b_not_in_a: [data in B not in A]
	}:
	prose: {
		summary: [summary description of join result, number of matches in A and B, A not in B, B not in A.]
		full:    [full list of which rows were joined in each of the above categories]
	}
}
````

### _.left(leftData, leftDataKey, rightData, rightDataKey, [nestedKeyName])

Perform a left join on the two array-of-object json datasets. Optionally, you can pass in a key name in case the left data's attribute dictionary is nested, such as in GeoJson where the attributes are under a `properties` object.

### .geoJson(leftData, leftDataKey, rightData, rightDataKey)

Does the same thing as __.left__ but navigates to the `features` array and passes in `properties` as the nested key name.

## Database operations

Uses the [`tablespoon`](https://github.com/ajam/tablespoon) module. Check out [the wiki](https://github.com/ajam/tablespoon/wiki) for the full documention.

## Statistics

Uses the [`simple-statistics`](https://github.com/tmcw/simple-statistics) module.

## Helpers

### .discernFormat(filepath)

Given a `filepath` return its file extension. Used internally by `.discernPaser` and `.discernFileFormatter`.

E.g. `tk.discernFormat('path/to/data.csv')` returns `'csv'`

### .discernParser(filepath, [delimiter])

Given a `filepath`, optionally a delimiter, return a parser that can read that file as json. Used internally by `.readData` and `.readDataSync`.

E.g. 

````
var csvParser = tk.discernParser('path/to/data.csv');

var json = parser('path/to/data.csv');
````

### .discernFileFormatter(filepath)

Returns a formatter that will format json data to file type specified by the extension in `filepath`. Used internally by `.writeData` and `.writeDataSync`.

E.g.

````
var formatter = tk.discernFileFormatter('path/to/data.tsv');
var csv = formatter(json);
````

# What's the name mean?

In news writing, `TK` is used as a placeholder for facts or sections you don't have yet. For example:

````
Mrs. Robinson arrived at the office at TK EXACT TIME to speak with the board members.
````

Depending on whom you ask, it either stands for `TO COME` if you like your acronyms phonetic or `TO KNOW` if you don't mind the silent 'K'.

### What's that have to do with this?

This library is a work in progress so it's largely `TO COME`. You could also say you can use it `TO KNOW` things since it's a collection of data utilities. Or you could say it's a (T)ool(K)it of toolkits: a TK TK.

# TODOs

* Read and write dbfs
* Convenience fn for joining data to shapefile
