import { Navbar } from "./components/Navbar";
import { Chats } from "./components/Chats";
import { usePagesStore } from "./stores";
import * as pages from "./pages";

function App() {
  const page = usePagesStore((state) => state.page);

  return (
    <div className="flex items-start justify-start gap-2">
      <div className="flex items-start justify-start">
        <Navbar />
        {page !== "Account" && <Chats />}
      </div>
      {Object.values(pages)
        .filter(({ name }) => name !== page)
        .map((Page) => (
          <Page key={Page.name} />
        ))}
    </div>
  );
}

export default App;
