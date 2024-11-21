import React from "react";
import Proptypes from "prop-types";
import { EditPost } from "./EditPost";

export class Post extends React.Component {
  constructor(props) {
    super(props);

    //set states
    this.state = {
      isEditVisible: false,
      title: this.props.title,
      author: this.props.author,
      description: this.props.description,
    };

    //bind
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.updatePost = this.updatePost.bind(this);
  }

  //toggle
  toggleEditForm() {
    this.setState((prev) => this.state.isEditVisible = !prev.isEditVisible);
  }

  //edit and update
  updatePost({ title, description }) {
    this.setState((prev) => ({
      ... prev,
      title: title,
      description: description,
      isEditVisible: false
    }));
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <p>{this.state.author}</p>
        <hr />
        <p>
          {this.state.description.split(" ").map((str) => {
            if (str.startsWith("#")) {
              return (
                <a href={`/${str}`} className="text-blue-500">
                  {str}{" "}
                </a>
              );
            }
            return str + " ";
          })}
        </p>
        <button onClick={this.toggleEditForm}>Edit Post</button>
        {this.state.isEditVisible && (
          <EditPost
            title={this.state.title}
            description={this.state.description}
            updatePost={this.updatePost}
          />
        )}
      </div>
    );
  }
}

Post.propTypes = {  //Set props for class
  title: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired
}