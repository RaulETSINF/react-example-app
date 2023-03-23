import React from 'react';
import axios from 'axios';

class ObjectList extends React.Component {
  state = {
    objects: [],
  };

  componentDidMount() {
    axios
      .get('http://www.sinequanon-smartdispensing.com:8085/api/v1/models')
      .then((response) => {
        this.setState({ objects: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.objects.map((object) => (
          <div key={object.id}>
            <h2>{object.title}</h2>
            <button
              onClick={() => this.props.history.push(`/object/${object.id}`)}
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default ObjectList;
