import {useState, useEffect} from "react"
import data from "../data"
import Header from "./components/Header"
import TodoInputForm from "./components/TodoInputForm"
import TodoTemplate from "./components/TodoTemplate"
import TodoList from "./components/TodoList"
import Footer from "./components/Footer"
import './App.css'


function App() {
  const [theme, setTheme] = useState(() => JSON.parse(localStorage.getItem("theme")) || false);
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || data)
  const [filteredStatus, setFilteredStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState(todos)
  const [leftToDo, seLeftToDo] = useState(0)
  const [formData, setFormData] = useState({
    todo: "",
  });


  const element = document.documentElement;

  useEffect(() => {
    switch (theme) {
      case true:
        element.classList.add("dark");
        localStorage.setItem("theme", true);
        break;
      case false:
        element.classList.remove("dark");
        localStorage.setItem("theme", false);
        break;
    }
  }, [theme]);

  useEffect(() => {
    const uncompleted = todos.filter(todo => !todo.completed)
    seLeftToDo(uncompleted.length)
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  useEffect(() => {
    setFilteredTodos(todos)
  },[todos])


  useEffect(() => {
    const handleFilter = () => {
      switch (filteredStatus) {
        case "active":
          const active = todos.filter(todo => !todo.completed)
          setFilteredTodos(active)
          break;
        case "completed":
          const completed = todos.filter((todo) => todo.completed);
          setFilteredTodos(completed)
          break;
      
        default:
          setTodos(todos)
          break;
      }
    }
    handleFilter()
  },[todos,filteredStatus])


  const handleSwitch = function () {
    setTheme((prevTheme) => !prevTheme);
  };

  const handleChange = function (e) {
    const { name, value } = e.target;
    setFormData({[name]: value});
  };

  const generateId = (array) => {
    const ids = array.map((item) => item.id);
    return Math.max(...ids) + 1;
  };

  
  const submit = function (e) {
    e.preventDefault();
    if (formData.todo) {
      setTodos(prevTodos => {
        return [
          { id: generateId(prevTodos), content: formData.todo, completed: false },
          ...prevTodos
        ];
      })
      setFormData({todo: ""});
    }
  };

  const updateData = function(id) {
    setTodos(prevTodos => {
      return prevTodos.map(item => {
        return item.id === id ? {...item, completed: !item.completed} : item
      })
    })
  };

  const deleteTask = function(id) {
    setTodos(prevTodos => {
      return prevTodos.filter(item => item.id !== id)
    })
  }

  const clearCompleted = () => {
    setTodos(prevTodo => {
      return prevTodo.filter(todo => !todo.completed)
    })
  }

  const handleClick = (status) => {
    setFilteredStatus(status)
  };


  const todoActivity = function() {
    return (filteredStatus === "active" || filteredStatus === "completed" ? filteredTodos : todos).map((element,i) => {
      // In-line styling
      const bg = "../src/images/bg-mobile-light.jpg"
      const styles = {
        backgroundImage: element.completed ? `url(${bg})`: ""
      }
      return <TodoTemplate i={i} element={element} styles={styles} updateData={updateData} deleteTask={deleteTask}/>
    })
  }


  return (
    <div className="min-h-screen md:bg-[url('./images/bg-desktop-light.jpg')] md:dark:bg-[url('./images/bg-desktop-dark.jpg')] dark:bg-veryDarkBlue dark:bg-[url('./images/bg-mobile-dark.jpg')] bg-[url('./images/bg-mobile-light.jpg')] bg-veryLightGray bg-no-repeat bg-contain py-20">
      <div className="max-w-2xl mx-auto min-h-full px-4">
        <Header theme={theme} handleSwitch={handleSwitch} />
        <main>
          <TodoInputForm
            submit={submit}
            handleChange={handleChange}
            formData={formData}
          />
          <TodoList
            todoActivity={todoActivity()}
            leftToDo={leftToDo}
            handleClick={handleClick}
            filteredStatus={filteredStatus}
            clearCompleted={clearCompleted}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App
