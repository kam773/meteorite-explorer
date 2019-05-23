import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMeteorites } from '../../actions/meteoriteActions'
import Meteorite from '../Meteorite/Meteorite';
import SearchPanel from '../../components/SearchPanel/SearchPanel';

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
        if (meteorites.length === 0) {
            return (
                <React.Fragment>
                    <SearchPanel items={meteorites} />
                    <section className="table-responsive">
                        <table className="table table-striped table-dark">
                            <thead>

                            </thead>
                            <tbody>
                                <img src={require("../../assets/loader.gif")} className="loader" alt="Loading spinner" />
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
                            </thead>
                            <tbody>
                                {meteorites.map((item, key) => {
                                    return <Meteorite key={key} meteorite={item} />
                                })}
                            </tbody>
                        </table>
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
    meteorite: state.meteorite
});

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'

};

export default connect(mapStateToProps, { fetchMeteorites })(SearchResults)