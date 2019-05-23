import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMeteorites } from '../../actions/meteoriteActions'
// import TableRow from '../TableRow/TableRow';
// import JwPagination from 'jw-react-pagination';
// import Meteorite from '../Meteorite/Meteorite';
// import SearchPanel from '../../components/SearchPanel/SearchPanel';

import PropTypes from 'prop-types';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";

class SearchResults extends Component {
    state = {
        pageOfItems: []
    }
    componentDidMount() {
        this.props.fetchMeteorites()
    }
    onChangePage = pageOfItems => {
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        const { meteorites } = this.props.meteorite;
        console.log(meteorites)

        return (
            <div></div>
        )

    }
}

SearchResults.propTypes = {
    fetchMeteorites: PropTypes.func.isRequired,
    meteorite: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    meteorite: state.meteorite
});

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'

};

export default connect(mapStateToProps, { fetchMeteorites })(SearchResults)