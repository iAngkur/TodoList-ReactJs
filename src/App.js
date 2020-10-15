import React from 'react';
import './App.css';
import {Container, Row, Col} from 'reactstrap';

import Todos from './components/todos';


function App() {
  return (
    <Container className="my-3">
        <Row>
          <Col>
            <Todos />
          </Col>
        </Row>
    </Container>
  );
}

export default App;
