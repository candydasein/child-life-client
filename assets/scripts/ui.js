const showBuddiesTemplate = require('./templates/buddies.handlebars')

const getBuddiesSuccess = function(data) {
    console.log(data)
    const showBuddiesHtml = showBuddiesTemplate({ patients: data.patients })
    $('#results').show()
    $('.results').html(showBuddiesHtml)
}

module.exports = {
    getBuddiesSuccess
}