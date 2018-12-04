const config = require ('./config.js')
const store = require('./store.js')

const signUp = function(data) {
    console.log(data)
    return $.ajax({
        url: config.apiUrl + '/sign-up', 
        method: 'POST',
        data: data 
    })
}

const signIn = function (data) {
    return $.ajax({
        url: config.apiUrl + '/sign-in',
        method: 'POST',
        data: data 
    })
}

const changePassword = function (data) {
    return $.ajax({
        url: config.apiUrl + '/change-password', 
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        },
        data 
    })
}

const getBuddies = function() {
    return $.ajax({
        url: config.apiUrl + '/users',
        method: 'GET',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        },
      })
}

const getSpecialist = function(data) {
    console.log(store.user.specialist_id)
    return $.ajax({
        url: config.apiUrl + '/specialists/' + store.user.specialist_id, /* + HOW TO GET JUST SPECIFIC SPECIALIST*/
        method: 'GET',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        },
      })
}

const newAvatar = function (data) {
    return $.ajax({
        url: config.apiUrl + '/users/' + store.user.id, 
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        },
        data: data
    })
}

const newScreenName = function (data) {
    return $.ajax({
        url: config.apiUrl + '/users/' + store.user.id, 
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        },
        data: data
    })
}

const signOut = function () {
    return $.ajax({
        url: config.apiUrl + '/sign-out', 
        method: 'DELETE',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        } 
    })
}

const deleteProfile = function () {
    return $.ajax({
        url: config.apiUrl + '/users/' + store.user.id, 
        method: 'DELETE',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        } 
    })
}

module.exports = {
    getBuddies,
    signUp,
    signIn,
    signOut,
    changePassword,
    getSpecialist,
    newAvatar,
    newScreenName,
    deleteProfile
}