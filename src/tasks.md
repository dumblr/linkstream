# Tasks

- If not loaded from dat://, show <DatPopup/> component, which gives some instructions on how to interact or create your own.
  - styling done, need to add links to the component
  - link to beaker browser
  - link to forking instructions
  - link to dat
  - you can check if https or dat:// by running the try/catch with DatArchive and setting some state (this.state.p2p or this.state.http or whatever), like here: https://github.com/kodedninja/orkl/blob/master/src/orkl.js#L16

- Can files always be 'published' ? Do you need to click the 'hot reload' button?

  - do we need to use webdb?

- check which environment you are in to determine where you should be loading posts from
  - NODE_ENV is available in npm start, if 'development' then load archive from config.
    - if 'production' then load archive from window.location.toString() ..?
  - archive can generally be refactored a bit in App.js
  
- make favicon that is the gradient that is used all over the site
