import React from 'react';
import Markdown from 'react-markdown';

const FormattedMarkdown = ({ children }: any) => {
  return (
    <Markdown>{children}</Markdown>
  );
};

export default FormattedMarkdown;