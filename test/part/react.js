// udacity 3-2-3
/* Create A Reducer
 *
 * You need to create a reducer called "appReducer" that accepts two arguments:
 * - First, an array containing information about ice cream 
 * - Second, and object with a 'DELETE_FLAVOR' `type` key
 * (i.e., the object contains information to delete the flavor from the state)
 *
 * The action your reducer will receive will look like this:
 * { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }
 *
 * And the initial state will look something like this (as such, refrain 
 * from passing in default values for any parameters!):
 * [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }];
*/

const state={icecream:[{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }]};
const action={type: 'DELETE_FLAVOR', flavor: 'Vanilla'};
function reducer(state,action){
    switch(action.type){
        case 'DELETE_FLAVOR':
            
            return state;
        default:
            return state;
    }
}
// udacity 3-1-6
/* Popular Ice Cream Totals Quiz
 *
 * Using the data array and .reduce():
 *   - return an object where each property is the name of an ice cream flavor and
 *     each value is an integer that's the total count of that flavor
 *   - store the returned data in a new iceCreamTotals variable
 *
 * Note:
 *   - do not delete the data variable
 *   - do not alter any of the data content
 */

const data = [
    { name: 'Tyler', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
    { name: 'Richard', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
    { name: 'Amanda', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
    { name: 'Andrew', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
    { name: 'David', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
    { name: 'Karl', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
];


// HOC组件可以这样运用，将可替换组件作为形参传入container组件
import React from 'react';
import logo from '../logo.svg';
const PageShell = Page => { 
  return props => {/* [1]*/}
    <div className="page">
        <img src={logo} alt="" />
        <Page {...props} /> {/* [2]*/}
    </div>;
};
export default PageShell;


// redux中间件写法
const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
  }