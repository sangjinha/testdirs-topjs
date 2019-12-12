# testdirs-topjs
> Personal test project based on webpack-dev-server
## Overview
Integrated **index.html** and **TOP.js**, separated examples.
## Installation
You should install npm packages and link TOP.js directory.
### npm packages
```console
$ npm install
```
### Symbolic link
TOP.js libraries are necessary within test project directory. So you should copy or (symbolic) link libraries.

ex. Symbolic link
```console
# windows
$ md libs
$ cd libs
$ mklink /d top_v5 ..\..\top_v5\src\web\top-framework\react

# linux
$ mkdir libs
$ cd libs
$ ln -s ../../top_v5/src/web/top-framework/react top_v5
```
## Commands
Run webpack-dev-server by the following commands
```console
# v5
$ npm run dev
or
$ npm run dev-v5

# v4
$ npm run dev-v4

# v4_min
$ npm run dev-v4_min

# v3
$ npm run dev-v3
```
