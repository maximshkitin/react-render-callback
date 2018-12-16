import {Component} from 'react';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { data: undefined };
    }

    fetchData() {
        setTimeout(() => {
            this.setState({ data: 'Some data'})
        }, 2000);
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return this.props.children(this.state.data);
    }
}

export default ParentComponent;
