import * as React from 'react';
import { Editor, IAllProps } from '@tinymce/tinymce-react';
import { Box, FormLabel } from '@mui/material';

import styles from './RtfEditor.module.scss';

export interface OcRtfProps extends IAllProps {
  /**
   * Placeholder text to pass in text editor
   */
  placeholder: string | undefined;
  /**
   * Current editor value
   */
  value: string | undefined;
  /**
   * Text value which will be already typed in editor
   */
  onChange: any;
  /**
   * Label text, attached to the input
   */
  label: string;
  name?: string;
  /**
   * List of classes which can be attached to the current list
   */
  className?: string;
  /**
   * Text value which will be already typed in editor
   */
  initialValue?: string;
  /** error message from formik */
  error?: string;
  id?: string;
}

export const RichTextEditor = (props: OcRtfProps) => {
  const { name, className = '', placeholder, value, onChange, initialValue, onBlur, label, error, id } = props;

  const editorRef: any = React.useRef();

  const onInit = React.useCallback(
    (_e, editor) => {
      editorRef.current = editor;

      if (onBlur) {
        editor.on('blur change', (event: any) => {
          onBlur(event, editor);
        });
      }
    },
    [onBlur],
  );

  return (
    <Box className={`${styles['rich-editor']} ${className}`}>
      <FormLabel className={styles['rich-editor__label']} htmlFor={id}>
        {label}
      </FormLabel>
      <Editor
        id={name}
        onEditorChange={onChange}
        onInit={onInit}
        initialValue={initialValue}
        value={value}
        init={{
          suffix: '.min',
          // resize: true,
          toolbar: ' undo redo styles bold italic  |' + 'alignleft aligncenter alignright alignjustify | outdent indent | ',
          plugins: 'lists link autoresize',
          placeholder: placeholder,
          skin: 'oxide-dark',
          content_css: 'dark',
          height: 292,
          min_height: 292,
          mobile: {
            toolbar_mode: 'sliding',
            max_height: 300,
            height: 220,
            toolbar: ' undo redo bold italic  |' + 'alignleft aligncenter alignright alignjustify | outdent indent | ',
          },
        }}
        textareaName={name}
        apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
      />
      <div className={styles['error']}>
        {Array.isArray(error) ? (
          error.map((value) => (
            <span key={value} className={styles['error__feedback']}>
              {value}
            </span>
          ))
        ) : (
          <span className={styles['error__feedback']}>{error}</span>
        )}
      </div>
    </Box>
  );
};

export default RichTextEditor;
