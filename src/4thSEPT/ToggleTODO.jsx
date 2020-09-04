import React from "react";

let count = 0;

export default class TodoItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.data.status !== this.props.data.status;
  }

  render() {
    const {
      data: { title, status }
    } = this.props;

    return (
      <div style={{marginTop:"20px" ,border: " 2px solid green", width: "100%"}}>
        <p>{title}</p>

        <p>{status ? "✔️ Done " : " ❌ Not Done"}</p>
        <button style={{color: "green",border: "2px solid green",padding:"10px"}} onClick={this.props.toggle}>{status ? "Not Done" : "Done"}</button>
      </div>
    );
  }
}