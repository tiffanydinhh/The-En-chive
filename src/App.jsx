import Navbar from "./Navbar"

function App() {
  let component
  switch(window.location.pathname) {
    case "/":
      component = <App />
      break
    case "/pricing":
      component = <Pricing />
      break
    case "/about":
      component = <About />
      break
  }
  
  return (
    <>
      <Navbar />
      {component}
    </>
  )
}

export default App
