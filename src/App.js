import React, { useState } from "react";
import "./assets/css/style.css";
import Images from "./components/images";

function App() {
  const [title, setTitle] = useState("Hello React");

  const [isShowing, setIsShowing] = useState(false);

  function handleClick () {
    setIsShowing(!isShowing);
  };

  return (
    <section className="flex justify-center">
      <div className="w-1/2">
        <div className="text-center">
          <div className="my-4">{title}</div>
          <button
            className="p-1 bg-blue-700 text-white my-2"
            onClick={handleClick}
          >
            Toggle Image
          </button>
        </div>
        {isShowing ? <Images /> : null}
      </div>
    </section>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     console.log("App constructor");

//     super(props);
//     this.state = { title: "Hello React", isshowing: false };
//   }

//   componentDidMount() {
//     console.log("App mounted");
//     // this.setState({title: "Hello LifeCycle!"})
//   }

//   componentDidUpdate() {
//     console.log("App updated");
//   }

//   handleClick = () => {
//     this.setState({ isshowing: !this.state.isshowing });
//   };

//   render() {
//     console.log("App Render");
//     return (
//       <section className="flex justify-center">
//         <div className="w-1/2">
//           <div className="text-center">
//             <div className="my-4">{this.state.title}</div>
//             <button
//               className="p-1 bg-blue-700 text-white my-2"
//               onClick={this.handleClick}
//             >
//               Toggle Image
//             </button>
//           </div>
//           {this.state.isshowing ? <Images /> : null}
//         </div>
//       </section>
//     );
//   }
// }

export default App;
