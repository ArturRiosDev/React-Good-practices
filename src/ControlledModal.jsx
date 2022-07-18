import React from "react";
import styled from "styled-components";

const MainContainerModal = styled.div`
    position: fixed;
    z-index: 1;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
`;
const BodyContainerModal = styled.div`
    background-color: white;
    margin:10% auto;
    padding: 20px;
    width:50%
`;

export const ControlledModal = ({shouldShow, onRequestClose, children}) => {

  return shouldShow ?(
        <MainContainerModal onClick={onRequestClose}>
        <BodyContainerModal onClick={e => e.stopPropagation()}>
        <button onClick={onRequestClose}>Hide Modal</button>
          {children}
        </BodyContainerModal>
      </MainContainerModal>): null
};
