
function Search(props:{search:any, setSearch:any}){
    return(
        <div className="search">
            <h2>Pesquisar:</h2>
            <input name="pesquisar" type="text" value={props.search} onChange={(e) => props.setSearch(e.target.value)} placeholder="pesquisar..."/>
        </div>
    )
}

export default Search

