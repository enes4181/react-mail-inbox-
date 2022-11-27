import HomePage from "./components/HomePage/homepage";
import InboxPage from "./components/InboxPage/inboxpage";
import MessagePage from "./components/MessagePage/messagepage";
import { MailProvider } from "./contexts/MailContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <MailProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="messagepage" element={<MessagePage />} />
          <Route path="messagepage/inboxpage" element={<InboxPage />} />
        </Routes>
      </BrowserRouter>
    </MailProvider>
  );
}

export default App;
