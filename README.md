# nodejs-simple-config

simple configuration file reader

example-config:
```
username fatbu
```

index.js:
```
var config = require('very-simple-config')('example-config');
console.log(config.username);
```

Run:
```
$ node index.js
fatbu
```
