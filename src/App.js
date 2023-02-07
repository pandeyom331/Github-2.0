import Navbar from "./components/Navbar";
import Topics from "./components/Topics";
import Profile from "./components/Profile";
import Interests from "./components/Interests";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="App ">
      {/* Navbar */}
      <Navbar />
      {/* Topics */}
      <div className="mt-12 pt-2">
        <Topics />
      </div>
      <div className="m-4 md:mx-16 xl:flex xl:gap-10  ">
        {/* Profile */}
        <Profile />
        <div className="md:flex sm:gap-10 md:pt-6">
          {/* Interests */}
          <Interests />
          {/* Trending */}
          <Trending />
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}

export default App;
