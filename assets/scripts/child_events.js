const api = require('./api.js')
const ui = require('./ui.js')

const onGetBuddies = () => {
    //document.getElementById('profile-editor').hidden = false
    event.preventDefault()
    api.getBuddies()
    .then(ui.getBuddiesSuccess)
    .catch(ui.failure)
}

const onGetSpecialist = () => {
    //document.getElementById('profile-editor').hidden = false
    event.preventDefault()
    api.getSpecialist()
    .then(ui.getSpecialistSuccess)
    .catch(ui.failure)
}

// const onNewAvatar = (event) => {
//     event.preventDefault()
//     const data = getFormFields(event.target)
//     // document.getElementById('sign-up').hidden = true
//     api.newAvatar(data) 
//     .then(ui.newAvatarSuccess) 
//     .catch(ui.newAvatarFailure)
// }


// const onNewScreenName = (event) => {
//     event.preventDefault()
//     const data = getFormFields(event.target)
//     // document.getElementById('sign-up').hidden = true
//     api.newScreenName(data) 
//     console.log("data in onNewScreenName is" + data)
//     .then(ui.newScreenNameSuccess) 
//     .catch(ui.newScreenNameFailure)
// }

module.exports = {
    onGetBuddies,
    onGetSpecialist
    // onNewAvatar,
    // onNewScreenName
}