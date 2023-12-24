import { useEffect, useState } from 'react'

import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'



function App() {
  
  const [todos, setTodos] = useState([ //UseState esta atuando como uma api guardando os dados dentro dele
    // {
    //   id: 1,
    //   text: "Criar funcionalidade",
    //   category: "Trabalho",
    //   isCompleted: false
    // },
    // {
    //   id: 2,
    //   text: "Ir para academia",
    //   category: "Pessoal",
    //   isCompleted: false
    // },
    // {
    //   id: 3,
    //   text: "Terminar Resumo",
    //   category: "Estudar",
    //   isCompleted: false
    // }
  ])

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("ASC")

  function addTodo(text:string, category:string){ //Função que adiona novas tarefas
    const newTodos: object[] = [ //Usa um spread para criar um novo array com os objetos que já tinham com um novo objeto no final
      ...todos,
      {
        id: Math.floor(Math.random() * 10000), //id aleatorio
        text,
        category,
        isCompleted: false,
      },
    ]

    setTodos(newTodos) //Atualizando api
  }

  function removeTodo(id:number){ //Remove o objeto com o id passado
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null) //O Objeto com mesmo id é removido (retornado null)
    setTodos(filteredTodos) //Atualizando api
  }

  function completeTodo(id: number){
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted: todo)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className='todo-list'>
        {todos
          .filter((todo) => //Filtro de pequisa por completas/incompletas
            filter === "All" ? true //Se igual a "All" retorna todas as tarefas
            : filter === "Completed" ? todo.isCompleted //Se igual a "Completed" retorna apenas tarefas completas
            : !todo.isCompleted) //Se nenhuma das condições acima bateu retorna as tarefas incompletas
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())) //Filtro de pesquisa por texto
          .sort((a, b) => sort === "ASC"
            ? a.text.localeCompare(b.text)
            : b.text.localeCompare(a.text))
          .map((todo) => ( //Percorrendo api retornando dados um a um
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
        {todos.length < 1 && (
          <div className='semTarefas'>
            <h3>Você não tem tarefas</h3>
            <p>Crie tarefas no campo abaixo</p>
          </div>) 
        }
      </div>
      <TodoForm addTodo={addTodo}/> {/*Passamos via props a função*/}
    </div>
  )
}

export default App
