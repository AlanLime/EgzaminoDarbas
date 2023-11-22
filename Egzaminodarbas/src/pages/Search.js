import '../css/Search.css';

const SearchBar = () => (
    <form action="/" method="get" className="form1">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            className="textfield1"
            type="text"
            id="header-search"
            placeholder="Ieškokite skelbimų..."
            name="s" 
        />
        <button className="btnsearch" type="submit">Ieškoti</button>
    </form>
);

export default SearchBar;