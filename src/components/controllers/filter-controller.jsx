import React from 'react';
import PropTypes from 'prop-types'
import {Button, ButtonGroup} from 'reactstrap';

const FilterController = ({handleFilter}) => (
    <ButtonGroup>
        <Button onClick={() => handleFilter('all')}>
            All
        </Button>
        <Button onClick={() => handleFilter('running')}>
            Running
        </Button>
        <Button onClick={() => handleFilter('completed')}>
            Completed
        </Button>
    </ButtonGroup>
)
FilterController.propTypes = {
    handleFilter : PropTypes.func.isRequired
}

export default FilterController;