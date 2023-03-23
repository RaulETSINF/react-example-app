import React from 'react';
import axios from 'axios';

class ObjectDetail extends React.Component {
  state = {
    object: {},
  };

  componentDidMount() {
    axios
      .get(
        `http://www.sinequanon-smartdispensing.com:8085/api/v1/models/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({ object: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2>{this.state.object.title}</h2>
        <p>{this.state.object.description}</p>
      </div>
    );
  }
}

export default ObjectDetail;
