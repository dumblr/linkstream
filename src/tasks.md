# Tasks

- If not loaded from dat://, show <DatPopup/> component, which gives some instructions on how to interact or create your own.

  - link to beaker browser
  - link to forking instructions
  - link to dat

- Can files always be 'published' ? Do you need to click the 'hot reload' button?

  - do we need to use webdb?

- check which environment you are in to determine where you should be loading posts from
  - NODE_ENV is available in npm start, if 'development' then load archive from config.
    - if 'production' then load archive from window.location.toString() ..?
  - archive can generally be refactored a bit in App.js
