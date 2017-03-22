var fs = require('fs');
module.exports = function(configfile){
    // Read file
    var config_data = fs.readFileSync(configfile).toString().split('\n');
    for(var i = 0; i<config_data.length; i++){
        // Remove lines that start with #
        // they are comments
        config_data[i] = config_data[i].trim();
        if(config_data[i][0] == '#'){
            config_data.splice(i, 1);
        }
    }
    config_data = config_data.filter(Boolean); // Remove all blank strings
    var config = {};
    for(var i=0; i<config_data.length; i++){
        if(config_data[i].match(/\s/)){
            config[config_data[i].match(/\w+\s/)[0].trim()] = config_data[i].match(/\s(.*)/)[0].trim(); // messy code
        }
    }
    return config;
}
