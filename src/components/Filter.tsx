
function Filter(props:{filter: any, setFilter: any, setSort: any}){
    return(
        <div className="filter">
            <h2>Filtrar</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select name="filtro" value={props.filter} onChange={(e) => props.setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabética</p>
                    <button onClick={() => props.setSort("ASC")}>ASC</button>
                    <button onClick={() => props.setSort("DESC")}>DESC</button>
                </div>
            </div>
        </div>
    )
}

export default Filter