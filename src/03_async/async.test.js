function fetchData1(callback) {
    // do something
    setTimeout(() => {
        const data = "some data";
        callback(data);
    }, 500);
}

function fetchData2(fakeError) {
    // do something
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "some data";
            if (fakeError) reject(new Error("fake error"));
            else resolve(data);
        }, 500);
    });
}

// 错误的方式
test('the data is "some data" (错误的方式1)', () => {
    fetchData1((data) => {
        expect(data).toBe("some data2");
    });
});
test('the data is "some data" (错误的方式2)', () => {
    fetchData2().then((data) => {
        expect(data).toBe("some data2");
    });
});


// // 方式1: 使用回调参数 done
// test('the data is "some data" (done)', (done) => {
//     fetchData1((data) => {
//         expect(data).toBe("some data");
//         done();
//     });
// });

// // 方式1: 使用回调参数 done (优化)
// test('the data is "some data" (done (优化))', (done) => {
//     fetchData1((data) => {
//         try {
//             expect(data).toBe("some data");
//             done();
//         } catch (error) {
//             done(error);
//         }
//     });
// });


// // 方式2: 通过返回 promise
// test('the data is "some data" (返回 promise)', () => {
//     return fetchData2().then((data) => {
//         expect(data).toBe("some data");
//     });
// });
// test('error occur (返回 promise)', () => {
//     expect.assertions(1);
//     return fetchData2(true).catch((err) => {
//         expect(err.toString()).toMatch("fake error");
//     });
// });

// // 方式2: 通过返回 promise (简化)
// test('the data is "some data" (返回 promise (简化))', () => {
//     return expect(fetchData2()).resolves.toBe("some data");
// });
// test('error occur (返回 promise (简化))', () => {
//     return expect(fetchData2(true)).rejects.toThrow("fake error");
// });


// // 方式3: 使用 async/await
// test('the data is "some data" (使用 async/await)', async () => {
//     await expect(fetchData2()).resolves.toBe("some data");
// });

// test('error occur (使用 async/await)', async () => {
//     await expect(fetchData2(true)).rejects.toThrow("fake error");
// });
