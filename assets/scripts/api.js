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

const getSpecialist = function() {
    console.log("api.getSpecialist ran")
    return $.ajax({
        url: config.apiUrl + '/specialists',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        },
      })
}

// const newAvatar = function (data) {
//     return $.ajax({
//         console.log(data)
//         url: config.apiUrl + '/patients/' + store.user.id, 
//         method: 'PATCH',
//         headers: {
//             Authorization: 'Token token=' + store.user.token 
//         },
//         data: {
//             patient: {
//             : {data}
//          } 
//         }
//     })
// }

// const newScreenName = function (data) {
//     return $.ajax({
//         url: config.apiUrl + '/patients/' + store.user.id, 
//         method: 'PATCH',
//         headers: {
//             Authorization: 'Token token=' + store.user.token 
//         },
//         data: 
//     })
// }

module.exports = {
    getBuddies,
    signUp,
    signIn,
    changePassword,
    getSpecialist,
    // newAvatar,
    // newScreenName
}