import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'reactstrap';
import SearchPanel from './search-panel';

import FilterController from './filter-controller';
import ViewController from './view-controller';
import BulkController from './bulk-controller';

const Controller = ({
    term, 
    view, 
    handleSearch, 
    toggleForm,
    handleFilter, 
    changeView,
    clearSelected,
    clearCompleted,
    reset
}) => (
    <div>
        <SearchPanel 
            term = {term}
            handleSearch = {handleSearch}
            toggleForm = {toggleForm}
        />
        <Row className="my-4">
            <Col md={{size : 4}}>
                <FilterController handleFilter={handleFilter}/>
            </Col>
            <Col md={{size : 4}}>
                <ViewController view={view} changeView={changeView}/>
            </Col>
            <Col md={{size : 4}} className='d-flex'>
                <div className='ml-auto'>
                    <BulkController 
                        clearSelected = {clearSelected}
                        clearCompleted = {clearCompleted}
                        reset = {reset}
                    />
                </div>
            </Col>
        </Row>
    </div>
)

Controller.propTypes = {
    term : PropTypes.string.isRequired,
    view : PropTypes.string.isRequired,
    handleSearch : PropTypes.func.isRequired,
    toggleForm : PropTypes.func.isRequired,
    handleFilter : PropTypes.func.isRequired,
    changeView : PropTypes.func.isRequired,
    clearSelected : PropTypes.func.isRequired,
    clearCompleted : PropTypes.func.isRequired,
    reset : PropTypes.func.isRequired,
}

export default Controller;