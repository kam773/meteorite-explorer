import React, { Component } from 'react'
import { fetchMeteorites } from '../../actions/meteoriteActions'
import { connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa'
import './style.css'

class SearchPanel extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
        }
    }
    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        let input = this.state.searchTerm;
        this.props.fetchMeteorites(input);
        this.setState({
            searchTerm: ''
        })

    }
    render() {
        return (
            <section className="py-5 text-center">
                <form className="form-inline">
                    <input
                        type="text"
                        placeholder="Enter a search term..."
                        name="search"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                    <button className="btn btn-primary btn-lg" onClick={this.handleSubmit}><FaSearch /></button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    meteorite: state.meteorite
})

export default connect(mapStateToProps, { fetchMeteorites })(SearchPanel)