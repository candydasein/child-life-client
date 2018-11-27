const api = require('./api.js')
const ui = require('./ui.js')

const onGetBuddies = () => {
    event.preventDefault()
    api.getBuddies()
    .then(ui.getBuddiesSuccess)
    .catch(ui.failure)
}

const onGetSpecialist = () => {
    event.preventDefault()
    api.getSpecialist()
    .then(ui.getSpecialistSuccess)
    .catch(ui.failure)
}

module.exports = {
    onGetBuddies,
    onGetSpecialist
}