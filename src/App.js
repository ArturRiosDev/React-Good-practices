import { printProps } from "./printProps";
import {UserInfo} from "./UserInfo"


const UserInfoWrapped = printProps(UserInfo)

function App() {
  return (
    <UserInfoWrapped a={1} b="hello" c={{name:'artur'}}/>
  );
}

export default App;
