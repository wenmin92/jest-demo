import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Link from './Link';

// test('snapshot first view', () => {
//     document.body.innerHTML = '<div id="root"></div>';
//     ReactDOM.render(<Link page="http://www.facebook.com">Facebook</Link>, document.querySelector('#root'));
//     expect(document.body.innerHTML).toMatchSnapshot();
// });

// test('snapshot second view', () => {
//     expect('a string').toMatchSnapshot();
// });

// test('snapshot third view', () => {
//     expect({ num: 1, string: 'xyz', date: new Date() }).toMatchSnapshot({
//         date: expect.any(Date)
//     });
// })

// test('Link changes the class when hovered', () => {
//     const component = renderer.create(
//         <Link page="http://www.facebook.com">Facebook</Link>
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();

//     // // manually trigger the callback
//     // tree.props.onMouseEnter();
//     // // re-rendering
//     // tree = component.toJSON();
//     // expect(tree).toMatchSnapshot();

//     // // manually trigger the callback
//     // tree.props.onMouseLeave();
//     // // re-rendering
//     // tree = component.toJSON();
//     // expect(tree).toMatchSnapshot();
//     component.unmount();
// });

it('inline snapshot', () => {
    const obj = {
        msg: 'hello, jest!',
        date: new Date(),
    };
    expect(obj).toMatchInlineSnapshot({
        date: expect.any(Date)
    }, `
Object {
  "date": Any<Date>,
  "msg": "hello, jest!",
}
`);
});
