'use strict'
const childEvents = require('./child_events.js')

// use require without a reference to ensure a file is bundled
// require('./example')


$(() => {

  $('#getBuddies').on('click', () => childEvents.onGetBuddies())

})

