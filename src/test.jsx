import React from 'react';
import ReactDOM from 'react-dom';

const Test1 = () => {
    alert('Test1');
};

const Test2 = ()=>{
    alert('Test2');
}

/*
module.exports = {
    t1 : Test1,
    t2 : Test2
}
*/

export { Test1 as T1, Test2 as T2}
