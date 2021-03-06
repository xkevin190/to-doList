import React, { Component } from "react";
import Session from "./Login";
import Home from "./home";
import { connect } from "react-redux";
import styled  from "styled-components";
import Snarckbars from '../components/Snarckbars'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logout: false
    };
  }
  render() {

    return (
      <Container>
        <Snarckbars/>
        {!this.props.user && <Session />}
        {this.props.user && <Home />}
      </Container>
    );
  }
}

const Container = styled.div`
  min-height: 98vh;
  display: flex;
  flex-direction: column;
  background: aliceblue;
`;

const mapStateToProps = state => ({
  user: state.app.getIn(["sesionUser", "logout"])
});

export default connect(
  mapStateToProps,
  null
)(App);
