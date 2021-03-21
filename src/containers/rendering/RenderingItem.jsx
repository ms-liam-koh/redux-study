import React from "react";

class RenderingItem extends React.Component {
  state = {
    itemNumber: 0,
  };

  componentDidMount() {
    console.log("## Item Componentdidmount");
  }

  componentDidUpdate() {
    console.log("## Item Componentdidupdate");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("## Item Getsnapshotbeforeupdate");
    return "value from snapshot";
  }

  //초기 상태값 필요함
  static getDerivedStateFromProps(prevProps, prevState, snapshot) {
    console.log(
      "## Item getderivedstatefromprops",
      prevProps,
      prevState,
      snapshot
    );
    return true;
  }

  shouldComponentUpdate() {
    console.log("## Item shouldcomponentupdate");
    return true;
  }

  render() {
    console.log("## RenderingItem render");
    const { id, title, content, setItem } = this.props;
    return (
      <div style={{ marginBottom: "20px" }}>
        <div>title: {title}</div>
        <div>content: {content}</div>
        <button
          onClick={() => {
            setItem(id, title, content);
          }}
        >
          change
        </button>
      </div>
    );
  }
}

export default RenderingItem;
