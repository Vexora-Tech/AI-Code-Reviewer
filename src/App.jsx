import CodeArea from "./CodeArea";
import OutputArea from "./OutputArea";
import NavBar from "./Navbar";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col lg:flex-row h-[calc(100vh-3.5rem)] max-w-full overflow-hidden">
        <CodeArea />
        <OutputArea />
      </div>
    </>
  );
}
