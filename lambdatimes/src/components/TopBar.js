import React from 'react';

import styled, {css} from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const DivTopBar = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`;
const DivContainer = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`;
const DivCLeft = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`;
const DivCCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`;
const DivCRight = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
`;
const SpanCLeft = styled.span`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`;
const SpanCenter = styled.span`
cursor: pointer;
margin-right: 5%;

&:hover {
  padding: 0.5em 1.25em;
  font-size: 24px;
}
`;
const SpanCenterLast = styled.span`
cursor: pointer;
margin-right: 0;

&:hover {
  padding: 0.5em 1.25em;
  font-size: 24px;
}
`;
const SpanCRight = styled.span`
cursor: pointer;
`;

class TopBar extends React.Component {
  constructor() {
    super();
    this.state = {
      logOut: false
    }
  }
  logOut = () => { 
    this.props.logOut();
  }
  render () {
  return (
    <DivTopBar>
      <DivContainer>
        <DivCLeft>
          <SpanCLeft>TOPICS</SpanCLeft><SpanCLeft>SEARCH</SpanCLeft>
        </DivCLeft>
        <DivCCenter>
          <SpanCenter>GENERAL</SpanCenter><SpanCenter>BROWNBAG</SpanCenter><SpanCenter>RANDOM</SpanCenter><SpanCenter>MUSIC</SpanCenter><SpanCenterLast>ANNOUNCEMENTS</SpanCenterLast>
        </DivCCenter>
        <DivCRight>
          <SpanCRight onClick={this.logOut}>LOG OUT</SpanCRight>
        </DivCRight>
      </DivContainer>
    </DivTopBar>
  )
}
}

export default TopBar;