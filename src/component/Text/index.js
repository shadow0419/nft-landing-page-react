import styled from "styled-components";
export const Text = styled.span`
  width: ${(props) => props.width || "auto"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  font-size: ${(props) => props.fontSize || "1rem"};
  font-family: ${(props) => props.fontFamily || ""};
  font-weight: ${(props) => props.fontWeight || "350"};
  line-height: ${(props) => props.lineHeight || "1.5rem"};
  color: ${(props) => props.color || "white"};
  max-width: ${(props) => props.maxWidth || "auto"};
  text-align: ${(props) => props.align || "left"};
  white-space: ${(props) => props.whiteSpace || "none"};
  text-overflow: ${(props) => props.textOverflow || "none"};
  overflow: ${(props) => props.overflow || "none"};
  background: ${(props) => props.background || "none"};
  cursor: ${(props) => props.cursor || "unset"};
`;
