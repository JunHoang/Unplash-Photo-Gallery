import React, { useEffect } from "react";

export default function Images() {
  useEffect(() => {
    //Did Mount
    console.log("Images Comp mounted");
    const interval = setInterval(() => {
      console.log("Hello");
    }, 1000);

    //Did Unmount
    return () => {
      console.log("Images Comp unmounted");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <img src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1911&q=80" />
    </div>
  );
}

// export class Images extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { interval: null };
//   }

//   componentDidMount() {
//     console.log("Images Comp mounted");
//     this.setState({
//       interval: setInterval(() => {
//         console.log("Hello");
//       }, 1000),
//     });
//   }

//   componentWillUnmount() {
//     console.log("Images Comp unmounted");
//     clearInterval(this.state.interval);
//   }

//   render() {
//     return (
//       <div>
//         <img src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1911&q=80" />
//       </div>
//     );
//   }
// }

//  export default Images;
