import React from 'react';


const ChildComponent = (props) => {
    return <div>{props.data || 'no data'}</div>
};

export default ChildComponent;