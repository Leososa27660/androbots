import Navbar from "./components/Navbar";
import ItemListContainer from"./components/ItemListContainer";
import Tecnología from "./components/Tecnología";
import Footer from "./Footer";
import "./App.css"

const App = () => {
  let name ="Androbots"
return (
  <div>
  <Navbar/>

  {/* prop greeting */}
  <ItemListContainer mensaje= "La Ley Zeroth: 'un robot no puede dañar a la humanidad o, por inacción, permitir que la humanidad sufra daños'." />
  <h1>Bienvenidos a la página de {name}</h1>
  <hr />
  <h2>¿Quienes somos?</h2>
 
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam ex consectetur nisi reiciendis praesentium quidem? Sit repudiandae aut iusto et temporibus iste similique nulla, quo deleniti dolor minima ut.</p>
  <Tecnología robot= "520/1300" androide= "320/ 820"/>
  <hr />
  <Footer/>
  </div>
  


)

}

export default App; 
