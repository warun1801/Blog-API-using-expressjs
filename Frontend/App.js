import './App.css';
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import UpdateForm from './components/UpdateForm';
import DeleteForm from './components/DeleteForm';

function App() {
  return (
    <div className="App-header">
      
        <h1 className="App">Happy Blog!</h1>
        <BlogList/>
        <BlogForm/>
        <UpdateForm/>
        <DeleteForm/>
    </div>
  );
}

export default App;
