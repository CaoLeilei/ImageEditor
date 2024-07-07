import React from "react"
import { FolderOpenOutlined } from '@ant-design/icons'
import "./EditorSide.less"

const AsideTools: React.FC = props => {
  return (
    <div className="EditorSide">
      <div className="EditorSide__Top">
        <div className="EditorSide__Menu">

          <div className="EditorSide__MenuItem">
            <div className="Icon">
              <FolderOpenOutlined />
            </div>
            <div className="Text">调整</div>
          </div>

          <div className="EditorSide__MenuItem">
            <div className="Icon">
              <FolderOpenOutlined />
            </div>
            <div className="Text">效果</div>
          </div>
          <div className="EditorSide__MenuItem">
            <div className="Icon">
              <FolderOpenOutlined />
            </div>
            <div className="Text">污点去除</div>
          </div>

          <div className="EditorSide__MenuItem">
            <div className="Icon">
              <FolderOpenOutlined />
            </div>
            <div className="Text">扭曲</div>
          </div>

          <div className="EditorSide__MenuItem">
            <div className="Icon">
              <FolderOpenOutlined />
            </div>
            <div className="Text">模糊</div>
          </div>

          <div className="EditorSide__MenuItem">
            <div className="Icon">
              <FolderOpenOutlined />
            </div>
            <div className="Text">添加图层</div>
          </div>

          <div className="EditorSide__MenuItem">
            <div className="Icon">
              <FolderOpenOutlined />
            </div>
            <div className="Text">添加文字</div>
          </div>

          <div className="EditorSide__MenuItem">
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
export default AsideTools