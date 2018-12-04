const getFormFields = require('../../lib/get-form-fields.js') 
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) { 
    event.preventDefault()
    const data = getFormFields(event.target)
    api.signUp(data) 
    .then(ui.signUpSuccess) 
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.signIn(data) 
    .then(ui.signInSuccess) 
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.changePassword(data) 
    .then(ui.changePasswordSuccess) 
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
    event.preventDefault()
    api.signOut() 
    .then(ui.signOutSuccess) 
    .catch(ui.signOutFailure)
}


const onNewAvatar = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.newAvatar(data) 
    .then(ui.newAvatarSuccess) 
    .catch(ui.newAvatarFailure)
}


const onNewScreenName = function (event) {
    event.preventDefault()  
    const data = getFormFields(event.target)
    api.newScreenName(data) 
    .then(ui.newScreenNameSuccess) 
    .catch(ui.newScreenNameFailure)
}

const onDeleteProfile = function () {
    api.deleteProfile() 
    .then(ui.deleteProfileSuccess) 
    .catch(ui.deleteProfileFailure)
}

module.exports = {
    onSignUp,
    onSignIn,
    onChangePassword,
    onSignOut,
    onNewAvatar,
    onNewScreenName,
    onDeleteProfile
}
