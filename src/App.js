import { BiTrendingUp } from "react-icons/bi";

function App() {
  return (
    <div className="font-tomorrow min-h-screen flex flex-col justify-center gap-20 bg-background px-8">
      <div className="flex items-center gap-2">
        <BiTrendingUp color="#DC1FFF" />
        <span className="text-white">Trending Assets</span>
      </div>
    </div>
  );
}

export default App;
