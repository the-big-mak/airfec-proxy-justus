import react from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class FullApp extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: '',
      roomId: window.location.pathname.split('/')[2],
    };
  }

  componentDidMount() {
    this.getComponents();
  }

  getComponents() {
    axios.get('/rooms/:id',{
      params: {
        ID: this.state.roomId
      }
    })
      .then((response) => {
        this.setState({
          reviews: response.data,
        })
      })
      .catch(error => console.error('failed to get reviews', error));
  }

  render() {
    return (
      <div>
        <div>hello</div>
        <div>{this.state.reviews}</div>
      </div>
    );
  }
}

ReactDOM.render(<FullApp />, document.getElementById('airFeC'));