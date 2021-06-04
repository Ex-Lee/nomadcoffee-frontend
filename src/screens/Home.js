import { isLoggedInVer } from "../apollo";

const Home = () => (
  <div>
    <h1>Home</h1>
    <button onClick={() => isLoggedInVer(false)}>Log out Now</button>
  </div>
);

export default Home;
