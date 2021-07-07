import $ from 'jquery';

function parseJSON(user) {
    return {
        fullName: user.firstName + ' ' + user.lastName,
        loggedIn: true,
    };
}

export function fetchCurrentUser(callback) {
    return $.ajax({
        success: user => callback(parseJSON(user)),
        type: 'GET',
        url: 'http://example.com/currentUser',
    });
}
