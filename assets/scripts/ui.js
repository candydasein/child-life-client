const showBuddiesTemplate = require('./templates/buddies.handlebars')
const showSpecialistsTemplate = require('./templates/specialists.handlebars')
const store = require('./store.js')

const signUpSuccess = function(data) {
    document.getElementById('sign-up').hidden = true
    document.getElementById('message').hidden = true
    document.getElementById('sign-up').reset()
    document.getElementById('sign-in').reset()
    document.getElementById('fireworks').hidden = true
}

const signUpFailure = function (error) {
    document.getElementById('message').hidden = false
    $('#message').text('Sorry, we were unable to sign you up. Please try again.')
    document.getElementById('sign-up').reset()
    document.getElementById('sign-in').reset()
}

const signInSuccess = function (data) {
    store.user = data.user
    document.getElementById('sign-up').hidden = true
    document.getElementById('sign-in').hidden = true
    document.getElementById('message').hidden = true
    document.getElementById('change-password').hidden = false
    document.getElementById('sign-out').hidden = false
    document.getElementById('nav-bar').hidden = false
    document.getElementById('sign-up').reset()
    document.getElementById('sign-in').reset()
    document.getElementById('welcome').hidden = true
    document.getElementById('fireworks').hidden = true
}

const signInFailure = function (error) {
    document.getElementById('message').hidden = false
    $('#message').text('Sorry, we were unable to sign you in. Please try again.')
    document.getElementById('sign-up').reset()
    document.getElementById('sign-in').reset()
}

const signOutSuccess = function (data) {
    $('#message').text('Goodbye.')
    document.getElementById('nav-bar').hidden = true
    document.getElementById('change-password').hidden = true
    document.getElementById('nav-bar').hidden = true
    document.getElementById('sign-up').hidden = false
    document.getElementById('sign-in').hidden = false
    document.getElementById('sign-out').hidden = true
    document.getElementById('results').hidden = true
    document.getElementById('profile-editor').hidden = true
    document.getElementById('new-screen_name').hidden = true
    document.getElementById('new-avatar').hidden = true
    document.getElementById('sign-up').reset()
    document.getElementById('sign-in').reset()
    store.user = null
}

const changePasswordSuccess = function (data) {
    document.getElementById('message').hidden = false
    $('#changepw-message').text('Password successfully changed.')
    document.getElementById('change-password').reset()
}

const changePasswordFailure = function (error) {
    $('#changepw-message').text('Sorry, we were unable to change your password. Please try again.')
}

const getBuddiesSuccess = function(data) {
    const showBuddiesHtml = showBuddiesTemplate({ users: data.users }) 
    document.getElementById('results').hidden = false
    $('.results').html(showBuddiesHtml)
    $('#getBuddies').click(function(){
        $('.results').toggle();
    })
}

const getSpecialistSuccess = function(data) {
    const showSpecialistsHtml = showSpecialistsTemplate({ specialists: data.specialist })
    document.getElementById('results').hidden = false
    $('.results').html(showSpecialistsHtml)
    $('#getSpecialist').click(function(){
        $('.results').toggle();
    })
}

const newScreenNameSuccess = function (data) {
    document.getElementById('changepw-message').hidden = false
    $('#changepw-message').text('Screen Name changed successfully.')  
    document.getElementById('new-screen_name').reset()
}

const newAvatarSuccess = function (data) {
    document.getElementById('changepw-message').hidden = false
    $('#changepw-message').text('Avatar changed successfully.')  
    document.getElementById('new-avatar').reset()
}


const deleteProfileSuccess= function () {
        store.user = null
        document.getElementById('nav-bar').hidden = true
        document.getElementById('change-password').hidden = true
        document.getElementById('sign-up').hidden = false
        document.getElementById('sign-in').hidden = false
        document.getElementById('sign-up').reset()
        document.getElementById('sign-in').reset()
        document.getElementById('sign-out').hidden = true
        document.getElementById('results').hidden = true
        document.getElementById('profile-editor').hidden = true
        document.getElementById('new-screen_name').hidden = true
        document.getElementById('new-avatar').hidden = true
        
        document.getElementById('fireworks').hidden = false
    $('#fireworks').html('<img src="https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif">')
}

module.exports = {
    getBuddiesSuccess,
    getSpecialistSuccess,
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    signOutSuccess,
    changePasswordSuccess,
    changePasswordFailure,
    newScreenNameSuccess,
    newAvatarSuccess,
    deleteProfileSuccess
}