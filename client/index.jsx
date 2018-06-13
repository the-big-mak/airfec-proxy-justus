// import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';

// export default class FullApp extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       reviews: '',
//       roomId: window.location.pathname.split('/')[2],
//     };
//   }

//   componentDidMount() {
//     this.getComponents();
//   }

//   getComponents() {
//     axios.get('/rooms/:id',{
//       params: {
//         ID: this.state.roomId
//       }
//     })
//       .then((response) => {
//         console.log(response.data)
//         // const review = response.data.split('<body>', '</body>')[1];
//         console.log('review', review)
//         this.setState({
//           reviews: response.data,
//         })
//       })
//       .catch(error => console.error('failed to get reviews', error));
//   }

//   render() {
//     return (
//       <div>
//         <div>hello</div>
//         {/* <div>{this.state.reviews}</div> */}
//         {/* <div id="reviewIndex"></div>
//         <script src="http://localhost:3001/reviewBundle.js"></script>  */}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<FullApp />, document.getElementById('airFeC'));