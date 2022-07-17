import React from "react";
import styled from "styled-components";
import { useState } from "react";

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

export const Modal = ({ children}) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
    <button onClick={()=> setShouldShow(!shouldShow)}>Show Modal</button>
    {
        shouldShow &&
        <MainContainerModal onClick={()=> setShouldShow(!shouldShow)}>
        <BodyContainerModal onClick={e => e.stopPropagation()}>
        <button onClick={()=> setShouldShow(!shouldShow)}>Hide Modal</button>
          {children}
        </BodyContainerModal>
      </MainContainerModal>
    }
      
    </>
  );
};
