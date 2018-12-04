'use strict'
const childEvents = require('./child_events.js')
const authEvents = require('./auth_events.js')

const onEditProfile = function () {
  document.getElementById('profile-editor').hidden = false
  document.getElementById('results').hidden = true
  $('#editProfile').click(function(){
    $('#profile-editor').toggle();
  })
}


$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-avatar').on('submit', authEvents.onNewAvatar)
  $('#new-screen_name').on('submit', authEvents.onNewScreenName)

  $('#getBuddies').on('click', () => childEvents.onGetBuddies())
  $('#getSpecialist').on('click', () => childEvents.onGetSpecialist())
  $('#editProfile').on('click', () => onEditProfile())
  $('#getting-out-button').on('click', () => authEvents.onDeleteProfile())
})
