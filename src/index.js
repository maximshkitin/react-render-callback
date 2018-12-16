import React from 'react';
import ReactDOM from 'react-dom';

import ParentComponent from './components/ParentComponent';
import ChildComponent from './components/ChildComponent';

const App = () => {
    return (
       <ParentComponent>
           {(data) => <ChildComponent data={data}/>}
       </ParentComponent>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));