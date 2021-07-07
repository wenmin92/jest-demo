import $ from 'jquery';
import {registerClick} from '../displayUser.js';
import {fetchCurrentUser} from '../fetchCurrentUser.js';

jest.mock('../fetchCurrentUser.js');

test('displays a user after a click', () => {
    document.body.innerHTML = 
    '<div>' +
    '  <span id="username" />' +
    '  <button id="button" />' +
    '</div>';

    registerClick();

    fetchCurrentUser.mockImplementation(cb => {
        cb({fullName: 'Johnny Cash', loggedIn: true});
    });

    $('#button').trigger('click');

    expect(fetchCurrentUser).toBeCalled();
    expect($('#username').text()).toEqual('Johnny Cash - Logged In');

});
