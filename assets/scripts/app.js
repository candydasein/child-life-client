'use strict'
const childEvents = require('./child_events.js')
const authEvents = require('./auth_events.js')

// use require without a reference to ensure a file is bundled
// require('./example')
// let clickEvents = function() {
  
// }

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#getBuddies').on('click', () => childEvents.onGetBuddies())
  $('#getSpecialist').on('click', () => childEvents.onGetSpecialist())
  
})

// module.exports = {
//   clickEvents
// }