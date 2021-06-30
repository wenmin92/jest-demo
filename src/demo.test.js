import axios from 'axios';
import Users from './demo';

jest.mock('axios');

test('test mock', () => {
    const users = [{name: 'bob',}];
    const resp = {data: users};
    // axios.get.mockResolvedValue(resp);

    return Users.all().then(data => expect(data).toEqual(users));
});