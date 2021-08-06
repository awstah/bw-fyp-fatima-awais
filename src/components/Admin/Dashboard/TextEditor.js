import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
function TextEditor({ editorState, onEditorStateChanged }) {
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={onEditorStateChanged}
      toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
      editorClassName="bg-white mt-6 max-w-4xl"
    />
  );
}

export default TextEditor;
