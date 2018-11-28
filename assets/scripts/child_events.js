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
const onNewAvatar = (event) => {
    event.preventDefault()
    const data = getFormFields(event.target)
    // document.getElementById('sign-up').hidden = true
    api.newAvatar(data) 
    .then(ui.newAvatarSuccess) 
    .catch(ui.newAvatarFailure)
}


const onNewScreenName = (event) => {
    event.preventDefault()
    const data = getFormFields(event.target)
    // document.getElementById('sign-up').hidden = true
    api.newScreenName(data) 
    .then(ui.newScreenNameSuccess) 
    .catch(ui.newScreenNameFailure)
}

module.exports = {
    onGetBuddies,
    onGetSpecialist,
    onNewAvatar,
    onNewScreenName
}