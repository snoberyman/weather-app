import Header from "./components/header/header";
import MainInput from "./features/mainInput/mainInput";
import MainOutpt from "./features/mainOutput/mainOutput";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-full ">
        <MainInput />
        <MainOutpt />
      </div>
    </>
  );
};

export default App;
