import { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Raihan Adam",
    };
  }

  handleNameState(newState) {
    this.setState({
      name: newState,
    });
  }

  render() {
    return (
      <div>
        <p className="text-slate-800 font-bold text-lg">
          Name: {this.state.name}
        </p>
        <button
          className="px-3 py-2 rounded-sm bg-blue-300"
          onClick={() => this.setState({ name: "Teuing saha" })}
        >
          Ganti Nama
        </button>
        <button
          className="px-3 py-2 ml-3 rounded-sm bg-blue-300"
          onClick={() => this.handleNameState("Saya Satpol")}
        >
          Ganti Nama nu lain
        </button>
      </div>
    );
  }
}

export default State;
