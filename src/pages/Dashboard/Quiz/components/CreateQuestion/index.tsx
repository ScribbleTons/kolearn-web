import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

import rehypeSanitize from 'rehype-sanitize';
import { getCodeString } from 'rehype-rewrite';
import katex from 'katex';
import 'katex/dist/katex.css';
import './index.scss';

const CreateQuestion = () => {
  const [value, setValue] = useState('**Hello world!!!**');
  return (
    <div className='container'>
      <MDEditor
        value={value}
        onChange={setValue}
        minHeight={500}
        previewOptions={{
          // rehypePlugins: [[rehypeSanitize]],
          components: {
            code: ({ inline, children = [], className, ...props }) => {
              const txt = children[0] || '';
              if (inline) {
                if (typeof txt === 'string' && /^\$\$(.*)\$\$/.test(txt)) {
                  const html = katex.renderToString(
                    txt.replace(/^\$\$(.*)\$\$/, '$1'),
                    {
                      throwOnError: false,
                    }
                  );
                  return <code dangerouslySetInnerHTML={{ __html: html }} />;
                }
                return <code>{txt}</code>;
              }
              const code =
                props.node && props.node.children
                  ? getCodeString(props.node.children)
                  : txt;
              if (
                typeof code === 'string' &&
                typeof className === 'string' &&
                /^language-katex/.test(className.toLocaleLowerCase())
              ) {
                const html = katex.renderToString(code, {
                  throwOnError: false,
                });
                return (
                  <code
                    style={{ fontSize: '150%' }}
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                );
              }
              return <code className={String(className)}>{txt}</code>;
            },
          },
        }}
      />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
    </div>
  );
};

export default CreateQuestion;
