import React from 'react';
import {EditPost} from './EditPost'; // Assuming EditPost is the default export

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false, // To toggle the edit form
      title: this.props.title,
      description: this.props.description,
    };
  }

  toggleEdit = () => {
    this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
  };

  updatePost = (newTitle, newDescription) => {
    this.setState({
      title: newTitle,
      description: newDescription,
      isEditing: false,
    });
  };

  render() {
    const { isEditing, title, description } = this.state;
    const { author } = this.props;

    return (
      <div className="post-container">
        <h2 className="post-title">{title}</h2>
        <p className="post-author">{author}</p>
        <p className="post-description">{description}</p>
        <button className="edit-button" onClick={this.toggleEdit}>
          {isEditing ? 'Edit Post' : 'Edit Post'}
        </button>
        {isEditing && (
          <EditPost
            title={title}
            description={description}
            onSave={this.updatePost}
          />
        )}
      </div>
    );
  }
}

export { Post };
