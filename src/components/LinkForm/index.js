import React from 'react';
import { Form, Input, Textarea, Submit, Wrapper } from './styles';
import ThemePicker from '../ThemePicker';

const LinkForm = ({
  changeFn,
  submitFn,
  linkField,
  textareaField,
  theme,
  themeChangeFn
}) => (
  <Wrapper>
    <ThemePicker theme={theme} themeChangeFn={themeChangeFn} />
    <Form onSubmit={e => submitFn(e)}>
      <Input
        type="text"
        placeholder="Link"
        value={linkField}
        onChange={e => changeFn(e, 'linkField')}
      />
      <Textarea
        value={textareaField}
        placeholder="Description"
        onChange={e => changeFn(e, 'textareaField')}
      />
      <Submit type="submit" />
    </Form>
  </Wrapper>
);

export default LinkForm;
