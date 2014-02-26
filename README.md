The TK Toolkit
==============

A work-in-progress collection of utilities to help with reading, transforming and writing data. 

# Installation

````
npm install tktk
````

# Usage

Examples TK.

### Current functions

#### Reading data

__.readData(filepath, [delimiter], callback)__

Reads in a data file given a path ending in the file format. 

Supported formats:

* `.json`
* `.csv` Comma-separated
* `.tsv` Tab-separated
* `.psv` Pipe-separated

Pass in a delimiter as the second argument to read in another format.

__.readDataSync(filepath, [delimiter])__

Syncronous version of `.readData()`

__.readJson(filepath, callback)__

Read in a json file.

__.readJsonSync(filepath)__

Read json syncronously.

__.readCsv(filepath, callback)__

Read in a comma-separated value file.

__.readCsvSync(filepath)__

Read csv syncronously.

__.readTsv(filepath, callback)__

Read in a tab-separated value file.

__.readTsvSync(filepath)__

Read tsv syncronously.

__.readPsv(filepath, callback)__

Read in a pipe-separated value file.

__.readPsvSync(filepath)__

Read psv syncronously.

#### Writing data

__.writeData(filepath, data, callback)__

Write out the data object, inferring the file format from the file ending specified in `filepath`.

Supported formats:

* `.json`
* `.csv` Comma-separated
* `.tsv` Tab-separated
* `.psv` Pipe-separated

__.writeDataSync(filepath, data)__

Syncronous version of `.writeData`

# What's the name mean?

In news writing, `TK` is used as a placeholder for facts or sections you don't have yet. For example:

````
Mr. Gerald held three titles during his time at the company: TK EXACT TITLES.
````

Depending on whom you ask, it either stands for `TO COME` if you like your acronyms phonetic or `TO KNOW` if you like them lexical.

### So what's that have to do with this?

Since this library is a work in progress, it's largely `TO COME`, but you use it `TO KNOW` things, and since it's a collection of utilities, you could say it's a toolkit of toolkits: The (T)ool(K)it Toolkit.

# TODOs

* Add [`joiner`](http://github.com/mhkeller/joiner) module
* Add [`tablespoon`](http://github.com/ajam/tablespoon) module
* Read and write dbfs
* Read dbf from shapefile
* Convenience fn for joining data to shapefile
