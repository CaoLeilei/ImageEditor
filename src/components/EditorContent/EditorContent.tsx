import React from "react";
import { Scrollbars  } from "react-custom-scrollbars";
import ImageView from '../ImageView/ImageView'

import './EditorContent.less'

interface IEditorContentProps {
  showRuler: boolean, // 是否展示标尺
  showLine: boolean, // 是否展示线
}

export default class EditorContent extends React.Component {
  imageViewRef: React.RefObject<ImageView> = React.createRef()
  constructor(props: IEditorContentProps) {
    super(props);
  }

  componentDidMount(): void {
  }

  render() {
    const { showRuler, showLine } = this.props
    return (
      <div className="EditorContent">
        { showRuler && <div className="EditorContent__TopRuler" /> }
        <div className="EditorContent__LeftRuler"></div>
        <Scrollbars>
          <div className="EditorContent__Inner">
            <ImageView ref={this.imageViewRef} />
          </div>
        </Scrollbars>
        <div className="EditorContent__Line"></div>
      </div>
    )
  }
}