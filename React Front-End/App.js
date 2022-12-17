import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Home from './components/home';
import AllCourses from './components/AllCourses';
import AddCourses from './components/AddCourses';
import Header from './components/Header';
import { Col, Container, Row } from 'reactstrap';
import Menu from './components/Menu';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/About';
function App() {

  return (
    <div>
      <Router>
      <Header/>
    <Container>
      <Row>
        <Col md={4}><Menu/></Col>
        <Col md={8}>
        <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/addCourse' component={AddCourses} exact/>
        <Route path='/viewCourses' component={AllCourses} exact/>
        <Route path='/About' component={About} exact/>
        <Route path='/viewCourses' component={AllCourses} exact/>
        </Switch>
        </Col>
        
      </Row>
    </Container>
    </Router>
    </div>

  );
}

export default App;
