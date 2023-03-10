import "./App.css";
import React, {useState} from "react";
import Card from "./components/Card";

function App() {
  const [auto, setAuto] = useState({
    modelo: "",
    color: "",
    marca: "",
  });
  const [error, setError] = useState({error: false, mensaje: ""});
  const [isUploaded, setIsUploaded] = useState(false);

  const handleChange = (e, input) => {
    setAuto({...auto, [input]: e.target.value.trim()}); //se usa trim para eliminar espacios en blanco
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(auto.modelo === "" || auto.color === "" || auto.marca === ""){
      setError({error: true, mensaje: "Todos los campos son obligatorios"});
      return;
    }else if(auto.modelo.length < 3){
      setError({error: true, mensaje: "El modelo debe tener al menos 3 caracteres"});
      return;
    }else if(auto.marca.length < 6){
      setError({error: true, mensaje: "La marca debe tener al menos 6 caracteres"});
      return;
    }else{
      setError({error: false, mensaje: ""});
      setIsUploaded(true);
    }
  };

  return (
    <div className="App">
      <div className="form-box">
        <h1>Carga de Autos</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>Modelo</label>
          <input
            type="text"
            name="modelo"
            onChange={(e) => handleChange(e, "modelo")}
          />
          <label>Marca</label>
          <input
            type="text"
            name="marca"
            onChange={(e) => handleChange(e, "marca")}
          />
          <label>Color</label>
          <input
            type="text"
            name="color"
            onChange={(e) => handleChange(e, "color")}
          />
          <button type="submit">Ingresar Auto</button>
        </form>
         {error.error && (
          <p className="error">
            Por favor chequea que la información sea correcta: <br/>
            {error.mensaje}
          </p>
        )}
        {isUploaded && (
          <Card auto={auto}></Card>
        )}
      </div>
    </div>
  );
}

export default App;
