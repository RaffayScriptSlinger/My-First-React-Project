import './App.css';
{
  {

  }
}
const arr = [
  {
    name: `Raffay`,
    class: `Sir Bilal`
  },
  {
    name: `Sharjeel`,
    class: `Sir Shezad`
  },
  {
    name: `Anas`,
    class: `Sir Abdullah`
  },
  {
    name: `Abdullah`,
    class: `Sir Ghous`
  },
  {
    name: `Shaz`,
    class: `Sir Ahmer`
  },
  {
    name: `Nafay`,
    class: `Sir abc`
  },

]
function App() {
  let Students = arr.map((person, i) => {
    return <tr key={i}>
      <td>{i}</td>
      <td>{person.name}</td>
      <td>{person.class}</td>
    </tr>
  })
  return (
    <div>
      <h1>{name}</h1>
      <table>
        <td>S No</td>
        <td>Name</td>
        <td>Class</td>
        {Students}
      </table>
    </div>
  )
}

export default App;
