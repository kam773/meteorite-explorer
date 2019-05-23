import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMeteorites } from '../../actions/meteoriteActions'
import Meteorite from '../Meteorite/Meteorite';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import TableRow from '../TableRow/TableRow';
import JwPagination from 'jw-react-pagination';

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
        const { meteorites, loading } = this.props.meteorite;
        if (loading === true) {
            return (
                <React.Fragment>
                    <SearchPanel items={meteorites} />
                    <section className="table-responsive">
                        <table className="table table-striped table-dark">
                            <thead>
                                <TableRow />
                            </thead>
                            <tbody>
                                <img src={require("../../assets/loader.gif")} className="loader" alt="Loading spinner" />
                            </tbody>
                        </table>
                    </section>
                </React.Fragment>
            )
        } else if (meteorites.length === 0) {
            return (
                <React.Fragment>
                    <SearchPanel items={meteorites} />
                    <section className="table-responsive">
                        <table className="table table-striped table-dark">
                            <thead>
                                <TableRow />
                            </thead>
                            <tbody>
                                <div className="wrapper">
                                    <h1 className="message">No results found :(</h1>
                                </div>
                            </tbody>
                        </table>
                    </section>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <SearchPanel items={meteorites} />
                    <section className="table-responsive-sm">
                        <table className="table table-striped table-dark">
                            <thead>
                                <TableRow />
                            </thead>
                            <tbody>
                                {this.state.pageOfItems.map((item, key) => {
                                    return <Meteorite key={key} meteorite={item} />
                                })}
                            </tbody>
                        </table>
                        <JwPagination items={meteorites} onChangePage={this.onChangePage} labels={customLabels} pageSize={100} />
                    </section>
                </React.Fragment>
            )
        }
    }
}

SearchResults.propTypes = {
    fetchMeteorites: PropTypes.func.isRequired,
    meteorite: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    meteorite: state.meteorite,
    loading: state.loading,
    error: state.error
});

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'

};

export default connect(mapStateToProps, { fetchMeteorites })(SearchResults)