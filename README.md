# nodejs-simple-config

simple configuration file reader

example-config:
```
username fatbu
```

index.js:
```
var config = require('./simpleconfig.js')('example-config');
console.log(config.username);
```

Run:
```
$ node index.js
fatbu
```
