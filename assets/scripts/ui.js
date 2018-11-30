const showBuddiesTemplate = require('./templates/buddies.handlebars')
const showSpecialistsTemplate = require('./templates/specialists.handlebars')
//const showNewAvatarTemplate = require('./templates/new_avatar.handlebars')
const store = require('./store.js')
//const app = require('./app.js')

const signUpSuccess = function(data) {
    // $('#message').text('Welcome!')
    // $('#message').addClass('success')  
    document.getElementById('sign-up').hidden = true
    //$('#sign-up').hide()  
    console.log('signUpSuccess ran. Data is :', data)
    document.getElementById('sign-up').reset()
    document.getElementById('sign-in').reset()
}

const signUpFailure = function (error) {
    document.getElementById('message').hidden = false
    $('#message').text('Sorry, we were unable to sign you up. Please try again.')
    console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
    store.user = data.user
    console.log(store.user)
    document.getElementById('sign-up').hidden = true
    //$('#sign-up').hide()  
    document.getElementById('sign-in').hidden = true
    //$('#sign-in').hide()
    document.getElementById('message').hidden = true
    //$('#message').hide()
    document.getElementById('change-password').hidden = false
    document.getElementById('sign-out').hidden = false
    document.getElementById('nav-bar').hidden = false
    document.getElementById('sign-up').reset()
    document.getElementById('sign-in').reset()
    console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = function (error) {
    document.getElementById('message').hidden = false
    $('#message').text('Sorry, we were unable to sign you in. Please try again.')
    console.log('signInFailure ran. Error is :', error)
}

const signOutSuccess = function (data) {
    $('#message').text('Goodbye.')
    document.getElementById('nav-bar').hidden = true
    document.getElementById('change-password').hidden = true
    document.getElementById('nav-bar').hidden = true
    document.getElementById('sign-up').hidden = false
    document.getElementById('sign-in').hidden = false
    document.getElementById('sign-out').hidden = true
    document.getElementById('sign-up').reset()
    document.getElementById('sign-in').reset()
    store.user = null
    console.log('signOutSuccess ran. Data is', data)
}

const changePasswordSuccess = function (data) {
    document.getElementById('message').hidden = false
    $('#changepw-message').text('Password successfully changed.')
    //$('#message').addClass('success')    
    console.log('changePasswordSuccess ran. Data is', data)
    document.getElementById('change-password').reset()
}

const changePasswordFailure = function (error) {
    $('#changepw-message').text('Sorry, we were unable to change your password. Please try again.')
    $('#message').addClass('failure')
    console.log('changePassword ran. Error is :', error)
}

const getBuddiesSuccess = function(data) {
    console.log(data)
    const showBuddiesHtml = showBuddiesTemplate({ users: data.users })
    // const hideBuddies = function() {
    //     $('#results').hide() 
    // }
    // const showBuddies = function() {
    //     $('#results').show() 
    // }
   
    document.getElementById('results').hidden = false
    $('.results').html(showBuddiesHtml)
    $('#getBuddies').click(function(){
        $('.results').toggle();
    })
    //showHide()
    //$('#getBuddies').on('click', () => hideBuddies())
    // $('#getBuddies').on('click', () => showBuddies())

  
    //app.clickEvents()
}

const getSpecialistSuccess = function(data) {
    console.log("ui.getSpecialistSuccess ran")
    console.log(data)
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
    newAvatarSuccess
}