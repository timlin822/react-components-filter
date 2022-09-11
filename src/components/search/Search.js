import './Search.css';

const Search=({searchText,changeHandler})=>{
    return (
        <form className="search-form">
            <input type="text" className="search" placeholder="搜尋..." value={searchText} onChange={changeHandler} autoFocus />
        </form>
    );
}

export default Search;