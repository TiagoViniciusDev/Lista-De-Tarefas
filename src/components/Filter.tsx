
function Filter({filter, setFilter, setSort}){
    return(
        <div className="filter">
            <h2>Filtrar</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select name="filtro" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabética</p>
                    <button onClick={() => setSort("ASC")}>ASC</button>
                    <button onClick={() => setSort("DESC")}>DESC</button>
                </div>
            </div>
        </div>
    )
}

export default Filter