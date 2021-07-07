import $ from 'jquery';
import { fetchCurrentUser } from './fetchCurrentUser.js';

export function registerClick() {
    $('#button').on('click', () => {
        fetchCurrentUser(user => {
            const loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out');
            $('#username').text(user.fullName + ' - ' + loggedText);
        });
    });
}
