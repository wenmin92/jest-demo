import axios from 'axios';
import Users from './users';

// axios 对象中的所有方法都会被 mock
jest.mock('axios');

test('should fetch users', async () => {
    const users = [{ name: 'Bob' }];
    const resp = { data: users };
    axios.get.mockResolvedValue(resp); // get 方法已经被 mock

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    await Users.all().then(data => expect(data).toEqual(users));
    expect(axios.get.mock.calls.length).toBe(1);
    expect(axios.get.mock.calls[0][0]).toBe('/users.json');
});
