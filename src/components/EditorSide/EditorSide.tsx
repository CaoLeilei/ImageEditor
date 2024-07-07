import React from "react";
import { noop } from "lodash";
import { FolderOpenOutlined } from "@ant-design/icons";
import "./EditorSide.less"

interface IEditorSideProps {
  onOpenFile?: () => void
}

const EditorSide: React.FC = (props: IEditorSideProps) => {

  const handleOpenFileMenuClick = () => {
    const { onOpenFile = noop } = props
    onOpenFile()
  }

  return (
    <div className="EditorSide">
      <div className="EditorSide__Top">
        <div className="EditorSide__Menu">
          <div className="EditorSide__MenuItem" onClick={handleOpenFileMenuClick}>
            <div className="Icon">
              <FolderOpenOutlined />
            </div>
            <div className="Text">打开图片</div>
          </div>
        </div>
      </div>

      <div className="EditorSide__Bottom">
        <div className="sidebar-content-inner">
        </div>
      </div>
    </div>
  )
}

export default EditorSide