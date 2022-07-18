// import { UncontrolledForm } from "./UncontrolledForm";
// import { ControlledForm } from "./ControlledForm";
// import {UncontrolledModal} from './UncontrolledModal'
// import {ControlledModal} from './ControlledModal'
// import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";
import { useState } from "react";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={()=>goToNext({name:'artur'})}>next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={()=>goToNext({age:25})}>next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={()=>goToNext({profession: 'carpinter'})}>next</button>
  </>
);

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const OnNext = stepData => {
    setOnboardingData({...onboardingData, ...stepData})
    setCurrentIndex(currentIndex + 1)
  }


  // const [shouldShow, setShouldShow] = useState(false)
  return (
    // <UncontrolledForm/>
    // <ControlledForm/>
    // <UncontrolledModal/>
    // <>
    // <button onClick={()=> setShouldShow(!shouldShow)}>Show modal</button>
    // <ControlledModal shouldShow={shouldShow} onRequestClose={()=>setShouldShow(!shouldShow)}>
    //   <h1>Its working!!</h1>
    // </ControlledModal>
    // </>
    <>
      <ControlledOnboardingFlow onNext={OnNext} currentIndex={currentIndex}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;
