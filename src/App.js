import React, { Component } from 'react';
import { DAT_URL } from './config';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';
import Header from './components/Header';
import fileContents from './utils/fileContents';
import { v4 } from 'uuid';
import NoPosts from './components/NoPosts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      linkField: '',
      textareaField: '',
      isOwner: false,
      listTitle: ''
    };
  }

  async componentDidMount() {
    const archive = await new global.DatArchive(DAT_URL);
    const archiveInfo = await archive.getInfo();
    this.refreshPosts(archive);
    this.setInfo(archiveInfo);
  }

  refreshPosts = async archive => {
    const posts = await archive.readdir('/posts');
    if (posts.length === 0) {
      this.setState({
        posts: []
      });
    } else {
      const promises = posts.map(async post => {
        // if (post !== ".DS_Store") {
        const postResponse = await archive.readFile(`/posts/${post}`);
        return JSON.parse(postResponse);
        // }
      });

      const results = await Promise.all(promises);
      this.setState({
        posts: results
      });
    }
  };

  setInfo = archiveInfo => {
    this.setState({
      ...(archiveInfo.isOwner && { isOwner: true }),
      listTitle: archiveInfo.title,
      listDescription: archiveInfo.description
    });
  };

  fieldChange = (e, str) => {
    this.setState({
      [str]: e.target.value
    });
  };

  formSubmit = e => {
    e.preventDefault();
    this.writePost(this.state.linkField, this.state.textareaField);
  };

  writePost = async (linkField, textareaField) => {
    const newPostId = await v4();
    const archive = await new global.DatArchive(DAT_URL);
    await archive.writeFile(
      `/posts/${newPostId}.json`,
      fileContents(linkField, textareaField, newPostId)
    );

    this.setState({
      textareaField: '',
      linkField: ''
    });
    this.refreshPosts(archive);
  };

  deleteLink = async postId => {
    console.log('delete link');
    const archive = await new global.DatArchive(DAT_URL);
    await archive.unlink(`/posts/${postId}.json`);
    this.refreshPosts(archive);
  };

  render() {
    return (
      <div>
        {console.log('rerender, this.state.posts', this.state.posts)}
        <Header
          listTitle={this.state.listTitle}
          listDescription={this.state.listDescription}
        />
        {this.state.isOwner && (
          <LinkForm
            changeFn={this.fieldChange}
            submitFn={this.formSubmit}
            linkField={this.state.linkField}
            textareaField={this.state.textareaField}
          />
        )}

        {this.state.posts.length ? (
          <LinkList
            links={this.state.posts}
            isOwner={this.state.isOwner}
            deleteFn={this.deleteLink}
          />
        ) : (
          <NoPosts />
        )}
      </div>
    );
  }
}

export default App;
