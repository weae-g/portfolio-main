import { RouterProvider } from "react-router-dom";
import BackgroundLayout from "./layouts/BackgroundLayout";
import router from "./router";
import { ModalProvider } from "./utils/ModalProvider";

function App() {
  return (
    <ModalProvider>
      <RouterProvider router={router} />
      <BackgroundLayout />
    </ModalProvider>
  );
}

export default App;
