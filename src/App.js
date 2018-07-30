import React, { Component } from 'react';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';
import Header from './components/Header';
import fileContents from './utils/fileContents';
import { v4 } from 'uuid';
import NoPosts from './components/NoPosts';
import LinkBack from './components/LinkBack';
import styled from 'styled-components';
import DatPopup from './components/DatPopup';
import urlEnv from './utils/urlEnv';
import sortBy from 'lodash.sortby';

const Wrapper = styled.div`
  padding-top: 35px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      linkField: '',
      textareaField: '',
      isOwner: false,
      listTitle: '',
      infoViewable: false
    };
  }

  async componentDidMount() {
    const archive = await new global.DatArchive(urlEnv());
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

  fieldFlip = str => {
    this.setState({
      [str]: !this.state[str]
    });
  };

  formSubmit = e => {
    e.preventDefault();
    this.writePost(this.state.linkField, this.state.textareaField);
  };

  writePost = async (linkField, textareaField) => {
    const newPostId = await v4();
    const archive = await new global.DatArchive(urlEnv());
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
    const archive = await new global.DatArchive(urlEnv());
    await archive.unlink(`/posts/${postId}.json`);
    this.refreshPosts(archive);
  };

  render() {
    const sortedPosts = sortBy(this.state.posts, ['createdAt']).reverse();
    return (
      <Wrapper>
        <LinkBack clickFn={this.fieldFlip} />
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
            links={sortedPosts}
            isOwner={this.state.isOwner}
            deleteFn={this.deleteLink}
          />
        ) : (
          <NoPosts />
        )}
        {this.state.infoViewable && <DatPopup />}
      </Wrapper>
    );
  }
}

export default App;
