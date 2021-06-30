'use strict';

const axios = jest.createMockFromModule('axios');

axios.get = (path) => Promise.resolve({ data: [{ name: 'bob' }] });

export default axios;