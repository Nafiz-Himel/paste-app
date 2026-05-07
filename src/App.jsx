import Navbar from "../src/components/Navbar"
import Home from "../src/components/Home"
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:
    <div>
      <Navbar />
      <Home />
    </div>
  },

  {
    path: "/paste",
    element:
    <div>
      <Navbar />
      <Paste />
    </div>
  },

  {
    path: "/paste/:id",
    element:
    <div>
      <Navbar />
      <ViewPaste />
    </div>
  },
]);

function App() {

  return (
    <>
      <div>
        <RouterProvider router = {router}>

        </RouterProvider>
      </div>
    </>
  )
}

export default App
