import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import BookDetailsWithParams from '../BookDetails/BookDetailsWithParams';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_BOOKS' });
  }

  render = () => {
    return (
      <main className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <BookList />
            </Route>
            <Route path="/newbook">
              <BookForm />
            </Route>
            <Route path="/details/:id">
              <BookDetailsWithParams />
            </Route>
            <Route path="/">
              404 Not Found
            </Route>
          </Switch>
        </Router>
      </main>
    );
  }
}

export default connect()(App);