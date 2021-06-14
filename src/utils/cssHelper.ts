import { css } from "styled-components"

// 多行文本显示省略号
export function ellipsisMultiline(lines: number = 2) {
  return css`
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
  `
}