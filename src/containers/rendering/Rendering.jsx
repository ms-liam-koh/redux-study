import React from "react";
import RenderingItem from "./RenderingItem";
import produce from "immer";

class Rendering extends React.Component {
  state = {
    items: [
      {
        id: 1,
        title: "title1",
        content: "content1",
      },
      {
        id: 2,
        title: "title2",
        content: "content2",
      },
      {
        id: 3,
        title: "title3",
        content: "content3",
      },
    ],
  };

  setItem = (index, title, content) => {
    const items = produce(this.state.items, (draft) => {
      draft[index].title = title;
      draft[index].content = content;
    });

    this.setState({ items });
  };

  componentDidMount() {
    console.log("## Rendering Componentdidmount");
  }

  componentDidUpdate() {
    console.log("## Rendering Componentdidupdate");
  }

  static getDerivedStateFromProps(prevProps, prevState, snapshot) {
    console.log("## Rendering getderivedstatefromprops", prevProps, prevState, snapshot);
      return true;
  }

  shouldComponentUpdate() {
    console.log("## Rendering shouldcomponentupdate");
    return true;
  }


  render() {
    console.log("## Rendering Rendering render");
    const { items } = this.state;

    return (
      <div>
        <h1>sample</h1>
        {items.map((item) => {
          return (
            <RenderingItem
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              setItem={this.setItem}
            ></RenderingItem>
          );
        })}
      </div>
    );
  }
}

export default Rendering;
