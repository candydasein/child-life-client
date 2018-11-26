const config = require ('./config.js')

const getBuddies = function() {
    return $.ajax({
        url: config.apiUrl + '/patients'
      })

}

module.exports = {
    getBuddies
}