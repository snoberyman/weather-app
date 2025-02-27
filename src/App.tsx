import Header from "./components/header/header";
import MainInput from "./features/mainInput/mainInput";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-full">
        <MainInput />
      </div>
    </>
  );
};

export default App;
