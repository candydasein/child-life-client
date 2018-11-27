const showBuddiesTemplate = require('./templates/buddies.handlebars')
const showSpecialistsTemplate = require('./templates/specialists.handlebars')
const store = require('./store.js')
//const app = require('./app.js')

const signUpSuccess = function(data) {
    // $('#message').text('Welcome!')
    // $('#message').addClass('success')  
    $('#sign-up').hide()  
    console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
    $('#message').text('Sorry, we were unable to sign you in.')
    $('#message').addClass('failure')
    console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
    store.user = data.user
    $('#sign-up').hide()  
    $('#sign-in').hide()
    $('#message').hide()
    document.getElementById('change-password').hidden = false
    document.getElementById('sign-out').hidden = false
    document.getElementById('nav-bar').hidden = false
    console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = function (error) {
    document.getElementById('message').hidden = false
    $('#message').text('Sorry, we were unable to sign you in. Please try again.')
    console.log('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = function (data) {
    document.getElementById('message').hidden = false
    $('#message').text('Password Changed.')
    //$('#message').addClass('success')    
    console.log('changePasswordSuccess ran. Data is', data)
}

const changePasswordFailure = function (error) {
    $('#message').text('Nope. Did not work.')
    $('#message').addClass('failure')
    console.log('changePassword ran. Error is :', error)
}



const getBuddiesSuccess = function(data) {
    console.log(data)
    const showBuddiesHtml = showBuddiesTemplate({ patients: data.patients })
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
    console.log("ui.getSpecialistsSuccess ran")
    console.log(data)
    const showSpecialistsHtml = showSpecialistsTemplate({ specialists: data.specialists })
    // const hideSpecialists = function() {
    //     $('#results').hide() 
    // }
    // const showBuddies = function() {
    //     $('#results').show() 
    // }
 
    //$('#buddies').show()
    document.getElementById('results').hidden = false
    $('.results').html(showSpecialistsHtml)
    $('#getSpecialist').click(function(){
        $('.results').toggle();
    })
   
    // $('#getSpecialist').on('click', () => hideSpecialists())
    // $('#getBuddies').on('click', () => showBuddies())

  
    //app.clickEvents()
}

module.exports = {
    getBuddiesSuccess,
    getSpecialistSuccess,
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordSuccess,
    changePasswordFailure
}