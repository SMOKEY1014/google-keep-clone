import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar"
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

function App() {
  let notes = [
    {
      id: 1,
      title: "Title 1",
      text: "Text 1"
    },
    {
      id: 2,
      title: "Title 2",
      text: "Text 2"
    },
    {
      id: 3,
      title: "Title 3",
      text: "Text 3"
    }
  ]
  const addNote = (note) => {
    notes.push(note);
    console.log("notes", notes)
  }
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote}/>
      <Notes notes={notes} />
      <Modal />
    </div>
  );
}

export default App;
