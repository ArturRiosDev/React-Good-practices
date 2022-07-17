// import { SplitScreen } from "./SplitScreen";
import { SmallPersonList } from "./people/SmallPersonList";
// import { LongList } from "./people/LongList";
// import { RegularList } from "./RegularList";

import { Modal } from "./Modal";

//LayOut component
// const LeftHandComponent = ({name})=>{
//   return <p style={{background:'green'}}>{name}</p>
// }

// const RightHandComponents = ({name})=>{
//   return <p style={{background:'red'}}>{name}</p>
// }

//List and list items 

const people = [
  {
    id:'123',
    name:'jhon doe',
    hairColor:'brown',
    hobbies:['swimming','bicycling','video games']
  },
  {
    id:'12',
    name:'juan',
    hairColor:'red',
    hobbies:['swimming','bicycling','video games']
  },
  {
    id:'23',
    name:'Gabriel',
    hairColor:'blue',
    hobbies:['swimming','video games']
  }
]



function App() {
  return (
    // <SplitScreen left={LeftHandComponent} right={RightHandComponents} leftWeight={1} rightWeight={3}/>
    // <SplitScreen leftWeight={1} rightWeight={1}>
    //   <LeftHandComponent name={'hello'}/>
    //   <RightHandComponents name={'there'}/>
    // </SplitScreen>
    // <>
    // <RegularList items={people} resourceName='person' itemComponent={SmallPersonList}/>
    // <RegularList items={people} resourceName='person' itemComponent={LongList}/>
    // </>
    <>
      <Modal>
      <SmallPersonList person={people[0]}/>
      </Modal>
    </>
  );
}

export default App;
