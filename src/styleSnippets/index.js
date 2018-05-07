import { css, keyframes } from 'styled-components';
const myKeyframes = {
  fadeIn: keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `
};
const myCss = {
  // 链接样式
  link: css`
    color: ${props => props.theme.fc_default};
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.fc_primary};
    }
  `,
  // wrapper样式
  wrapper: css`
    width: 1200px;
    margin: auto;
    box-sizing: border-box;
  `,
  // 省略号样式
  ellipsis: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  // flex布局
  // row
  rowStart: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `,
  rowStartStart: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  rowStartEnd: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  `,
  rowStartCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `,
  rowStartStretch: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
  `,
  rowEnd: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `,
  rowEndStart: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
  `,
  rowEndEnd: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  `,
  rowEndCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `,
  rowEndStretch: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: stretch;
  `,
  rowCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `,
  rowCenterStart: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  `,
  rowCenterEnd: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  `,
  rowCenterCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  rowCenterStretch: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  `,
  rowBetween: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  rowBetweenStart: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  `,
  rowBetweenEnd: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  `,
  rowBetweenCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  rowBetweenStretch: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  `,
  rowAround: css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `,
  rowAroundStart: css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  `,
  rowAroundEnd: css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
  `,
  rowAroundCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `,
  rowAroundStretch: css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
  `,
  // col
  colStart: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  colStartStart: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  colStartEnd: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  `,
  colStartCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
  colStartStretch: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  `,
  colEnd: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `,
  colEndStart: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  `,
  colEndEnd: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  `,
  colEndCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  `,
  colEndStretch: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: stretch;
  `,
  colCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  colCenterStart: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `,
  colCenterEnd: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  `,
  colCenterCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  colCenterStretch: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  `,
  colBetween: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  colBetweenStart: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  `,
  colBetweenEnd: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  `,
  colBetweenCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
  colBetweenStretch: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
  `,
  colAround: css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `,
  colAroundStart: css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  `,
  colAroundEnd: css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
  `,
  colAroundCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `,
  colAroundStretch: css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
  `,
}
export {
  myCss,
  myKeyframes
}
export default myCss;
