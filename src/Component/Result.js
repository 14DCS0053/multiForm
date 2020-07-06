import React, { Component } from 'react';
import { connect } from 'react-redux';
class Result extends Component {
    render() {
        return (<table>
            {this.props.Data.title.map(t => <tr><td>{t}</td></tr>)}
        </table>)
    }
}
const mapStateToProps = (state) => {
    const { Data } = state;
    return { Data };
};

export default connect(mapStateToProps, null)(Result);