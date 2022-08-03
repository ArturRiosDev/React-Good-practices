import { printProps } from "./printProps";
import {UserInfo} from "./UserInfo"
import { withUser } from "./withUser";

const UserInfoWrapped = printProps(UserInfo)
const UserInfoWithLoader = withUser(UserInfo, '2')


function App() {
  return (
    <>
    <UserInfoWrapped a={1} b="hello" c={{name:'artur'}}/>
    <UserInfoWithLoader />

    </>
    
  );
}

export default App;
