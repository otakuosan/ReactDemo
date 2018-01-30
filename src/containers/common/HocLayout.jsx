import React from 'react';
import ReactDOM from 'react-dom';

const HocLayout = (WrappedComponent) => {
    return class extends React.Component{
        render(){
            return(
                <div>
                    <h1>母版1111</h1>
                    <header><h1>Layout Header</h1></header>
                    <main><WrappedComponent/></main>
                    <footer><h1>Layout Footer</h1></footer>
                </div>
            );
        }
    }
};

export default HocLayout;
