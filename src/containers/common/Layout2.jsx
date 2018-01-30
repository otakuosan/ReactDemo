import React from 'react';
import ReactDOM from 'react-dom';

const HocLayout2 = (WrappedComponent) => {
    return class extends React.Component{
        render(){
            return(
                <div>
                    <h1>母版22222222</h1>
                    <main><WrappedComponent/></main>
                    <footer>版权所有</footer>
                </div>
            );
        }
    }
};

export default HocLayout2;
