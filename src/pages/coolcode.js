import React, { Component } from 'react';
import '../styles/coolcode.css';
import firebase from '../firebase.js'
class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    // const itemsRef = firebase.database().ref('test');
    // const item1 = {
    //   text: "push text",
    // }
    // itemsRef.push(item1);
    const itemsRef = firebase.database().ref('overwatch');
    itemsRef.on('value', (snapshot) => {
      let item = snapshot.val();
      console.log(item.overone.overtext);
      this.setState({
        doc: item.overone.overtext,
        isLoaded: true,
      });
    });
    firebase.firestore().collection("tester").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(doc.data().text);
      });
    });
    // console.log(itemsRef);
    // const test = firebase.database().ref('overwatch');
    // this.setState({ 
    //   doc: test,
    //   isLoaded: true,
    // });
    // console.log(test);
  }
  render() {
    const { doc, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>{doc}</div>
      );
    }
  }
//   render() {
//     return (
//       <div className="tips">
//         <h2>JS</h2>
//         <h3>Variable Declarationsfdsf</h3>
//         <pre>
//         {`let example = 0;
// const example2 = 0;
// var example 3 = 0;
//     `}
//         </pre>
//       </div>
//     );
//   }
}

export default homePage;
