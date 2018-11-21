/* eslint-disable react/no-array-index-key */
import React from 'react';
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey';

export default class Toolbar extends React.Component {
  //TODO: add prop for x, y offset to support other sidebar types as well
  state = {
    position: {
    }
  }

  componentWillMount() {
    this.computePosition()
  }

  computePosition = () => {
    const {editorState, isSidebarVisible} = this.props;
    const selection = editorState.getSelection();

    const currentContent = editorState.getCurrentContent();
    const currentBlock = currentContent.getBlockForKey(selection.getStartKey());
    // TODO verify that always a key-0-0 exists
    const offsetKey = DraftOffsetKey.encode(currentBlock.getKey(), 0, 0);
    // Note: need to wait on tick to make sure the DOM node has been create by Draft.js
    setTimeout(() => {
      const node = document.querySelectorAll(`[data-offset-key="${offsetKey}"]`)[0];
      const {top, bottom} = node.getBoundingClientRect();

      const median = (bottom-top)/2
      const editor = this.props.getEditorRef().editor.editor;
      this.setState({
        position: {
          top: (node.offsetTop + median + 15),
          left: isSidebarVisible ? editor.getBoundingClientRect().left - 320 : 100,
        },
      });
    }, 0);
  }

  render() {
    const { theme, store } = this.props;
    return (
      <div
        className={`${theme.toolbarStyles.wrapper} sidebar-toolbar` }
        style={this.state.position}
      >
        {
          this.props.children
        }
      </div>
    );
  }
}
