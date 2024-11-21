import React from 'react';

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      description: props.description,
    };
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSave(this.state.title, this.state.description);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="edit-post-form">
        <div className="form-group">
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Post Description</label>
          <textarea
            id="description"
            className="form-control"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
        </div>
        <button type="submit" className="save-button">Save</button>
      </form>
    );
  }
}

export {EditPost};
