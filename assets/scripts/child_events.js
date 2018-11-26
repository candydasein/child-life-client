const api = require('./api.js')
const ui = require('./ui.js')

console.log("child_events called")

const onGetBuddies = () => {
    console.log("onGetBuddies ran")
    event.preventDefault()
    api.getBuddies()
    .then(ui.getBuddiesSuccess)
    .catch(ui.failure)
}

module.exports = {
    onGetBuddies
}