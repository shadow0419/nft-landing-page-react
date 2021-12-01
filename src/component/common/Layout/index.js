import styled from "styled-components";

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxWidth || "auto"};
  min-width: ${(props) => props.minWidth || "auto"};
  height: ${(props) => props.height || "auto"};
  max-height: ${(props) => props.maxHeight || "auto"};
  min-height: ${(props) => props.minHeight || "auto"};
  position: ${(props) => props.position || "0"};
  top: ${(props) => props.top || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  border-top: ${(props) => props.borderTop || "0"};
  border-bottom: ${(props) => props.borderBottom || "0"};
  border-bottom-color: ${(props) => props.borderBottomColor || "0"};
  border-style: ${(props) => props.borderStyle || "0"};
  border-width: ${(props) => props.borderWidth || "0"};
  background-image: ${(props) => props.backgroundImage};
  background: ${(props) => props.background || "none"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: ${(props) => props.backgroundRepeat};
  background-size: ${(props) => props.backgroundSize};
  border-radius: ${(props) => props.borderRadius || 0};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  overflow: ${(props) => props.overflow || "unset"};
  z-index: ${(props) => props.zIndex};
  opacity: ${(props) => props.opacity || 1};
  cursor: ${(props) => props.cursor || "unset"};
  box-shadow: ${(props) => props.shadow || 0};
  backdrop-filter: ${(props) => props.backdropFilter || "none"};
  & > *:not(:last-child) {
    margin: ${(props) => props.mgap};
  }
  & > * {
    z-index: 3;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width || "auto"};
  max-width: ${(props) => props.maxWidth || "auto"};
  min-width: ${(props) => props.minWidth || "auto"};
  height: ${(props) => props.height || "auto"};
  max-height: ${(props) => props.maxHeight || "auto"};
  min-height: ${(props) => props.minHeight || "auto"};
  position: ${(props) => props.position || "0"};
  top: ${(props) => props.top || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  z-index: ${(props) => props.zIndex};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  border: ${(props) => props.border || "0"};
  border-top: ${(props) => props.borderTop || "0"};
  border-bottom: ${(props) => props.borderBottom || "0"};
  border-bottom-color: ${(props) => props.borderBottomColor || "0"};
  border-style: ${(props) => props.borderStyle || "0"};
  border-width: ${(props) => props.borderWidth || "0"};
  background: ${(props) => props.background || "none"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: ${(props) => props.backgroundRepeat};
  background-size: ${(props) => props.backgroundSize};
  border-radius: ${(props) => props.borderRadius || 0};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  overflow: ${(props) => props.overflow || "unset"};
  opacity: ${(props) => props.opacity || 1};
  cursor: ${(props) => props.cursor || "unset"};
  backdrop-filter: ${(props) => props.backdropFilter || "none"};
  & > *:not(:last-child) {
    margin: ${(props) => props.mgap};
  }
`;
