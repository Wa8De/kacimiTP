import { useState } from "react";
import Stagiaires from "./config/Data";

function App() {
  const [ide, setid] = useState();
  const [Nome, setNom] = useState();
  const [Filieree, setFiliere] = useState();
  const getID = (e) => {
    setid(e.target.value);
  };
  const getNom = (e) => {
    setNom(e.target.value);
  };
  const getFiliere = (e) => {
    setFiliere(e.target.value);
  };
  const valider = () => {
    Stagiaires.push({ id: ide, nom: Nome, filière: Filieree });
    console.log(Stagiaires);
  };
  return (
    <div className="App">
      <input type="text" placeholder="id" onChange={getID} />
      <input type="text" placeholder="Nom" onChange={getNom} />
      <input type="text" placeholder="Filière" onChange={getFiliere} />
      <button onClick={valider}>Valider</button>
      <table border={1}>
        <thead>
          <tr>
            <td>   Liste de Stagiaires</td>
       
          </tr>
        </thead>
        <tbody>
          <tr className="title">
            <td>ID</td>
            <td className="Nom">Nom</td>
            <td>Filière</td>
            <td>Module</td>
            <td>Note</td>
            <td>Action</td>
          </tr>
        </tbody>
        <tbody>
          {Stagiaires.map((elem) => (
            <>
              <tr>
                <td>{elem.id}</td>
                <td>{elem.nom}</td>
                <td>{elem.filière}</td>
                <td>{elem.Module}</td>
                <td>{elem.Note}</td>
                <td>
                  <button>Delete user</button>
                </td>
                <td>
                  <button>Update Note</button>
                </td>
                <td>
                  <button>Delete Note</button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
