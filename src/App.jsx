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
// function App() {

//   const Students = arr.map((persons,index) =>{
//     return <tr key={index}>
//       <td>{index + 1}</td>
//     <td>{persons.name}</td>
//     <td>{persons.class}</td>
//     </tr>

//   })

//   return (
//     <div>
//       <h1>{name}</h1>
//       <table>
//         <td>S No</td>
//         <td>Name</td>
//         <td>Class</td>
//         {Students}
//       </table>
//     </div>
//   )
// }

function app() {
  const Students = arr.map((persons, index) => {
    return <tr key={index}>
      <td>
        {index + 1}
      </td>
      <td>
        {persons.name}
      </td>
      <td>
        {persons.class}
      </td>
    </tr>
  })
  return (
    <div>
      <table>
      <td>Sno</td>
      <td>Name</td>
      <td>Class</td>
      {Students}
      </table>
    </div>
   
  )
}

export default app;

