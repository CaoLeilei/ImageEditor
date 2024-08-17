import React from "react";
import { Scrollbars  } from "react-custom-scrollbars";
import ImageView from '../ImageView/ImageView'

import './EditorContent.less'

interface IEditorContentProps {
  showRuler: boolean, // 是否展示标尺
  showGridLine: boolean, // 是否展示线
}

export default class EditorContent extends React.Component {
  imageViewRef: React.RefObject<ImageView> = React.createRef()
  constructor(props: IEditorContentProps) {
    super(props);
  }

  componentDidMount(): void {
  }

  render() {
    const { showRuler, showGridLine } = this.props as IEditorContentProps

    return (
      <div className="EditorContent">
        { showRuler && <div className="EditorContent__TopRuler" /> }
        { showRuler && <div className="EditorContent__LeftRuler"></div>}
        <Scrollbars>
          <div className="EditorContent__Inner">
            <ImageView ref={this.imageViewRef} />
          </div>
        </Scrollbars>
        {showGridLine && <div className="EditorContent__Line"></div>}
      </div>
    )
  }
}