import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class Form extends Component {
    submit = () => {
        var query = "https://api.themoviedb.org/3/search/movie?api_key=969919c57a019f92f13e269e77f2b52c&language=en-US&query=";
        query = query + this.props.query;
        var that = this;
        fetch(query).then(res => res.json()).then(data => {
            console.log(data);
            that.props.updateData(data);
            that.props.history.push('/result');
        })

    }
    render() {
        const { query } = this.props;
        return (<form>
            <input type="text" placeholder="search..." value={query} onChange={(e) => this.props.updateQuery(e.target.value)} />
            <button type="submit" onClick={this.submit} />
        </form>)
    }
}
const mapStateToProps = (state) => {
    const { query } = state;
    return { query };
};
const mapDispatchToProps = dispatch => {
    return {
        updateQuery: (payload) => dispatch({ type: 'UPDATE_QUERY', payload }),
        updateData: (payload) => dispatch({ type: 'UPDATE_DATA', payload }),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Form))