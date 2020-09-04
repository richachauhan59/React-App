import React from "react";
import { v4 as uuid } from "uuid";
import TodoItem from "./ToggleTODO";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      data: []
    };
  }

  handleAdd = () => {
    const { value, data } = this.state;
    let item = {
      id: uuid(),
      title: value,
      status: false
    };
    this.setState({
      data: [...data, item]
    });
  };

  toggleStatus = (id) => {
    const { data } = this.state;
    let newData = data.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    this.setState({
      data: newData
    });
  };
  render() {
    const { data } = this.state;

    return (
      <div style={{marginLeft: "35%",
       border: "2px solid black",
        width:"20%",
         textAlign:"center",
         background: "#D2D2D2",
          padding:"2%"}}>
        <h1>Todo List</h1>
        <input
          placeholder="add todo +"
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />

        <button onClick={this.handleAdd}> ADD </button>
        <div>
          {data.map((item) => (
            <TodoItem
              key={item.id}
              toggle={() => this.toggleStatus(item.id)}
              data={item}
            />
          ))}
        </div>
      </div>
    );
  }
}