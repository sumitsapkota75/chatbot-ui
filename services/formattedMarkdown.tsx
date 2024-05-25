import React from 'react';
import Markdown from 'react-markdown';

const FormattedMarkdown = ({ children }) => {
  return (
    <Markdown>{children}</Markdown>
  );
};

export default FormattedMarkdown;