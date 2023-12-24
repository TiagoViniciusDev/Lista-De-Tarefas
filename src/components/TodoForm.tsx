import { useState } from "react"

function TodoForm({addTodo}){

    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        if(!value || !category){ // Se value ou category estiverem vazios não acontece nada
            alert("Prencha corretamente os campos")
            return
        } 

        addTodo(value, category)
    }

    return(
        <div className="todoForm">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome da tarefa" name="tarefa" onChange={(e) => setValue(e.target.value)}/>
                <select value={category} name="categoria" onChange={(e) => setCategory(e.target.value)}>
                    <option value="" disabled>Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}

export default TodoForm