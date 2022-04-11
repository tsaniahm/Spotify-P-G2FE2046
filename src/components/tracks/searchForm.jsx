
const SearchForm = ({ handleInputChange, handleSearch }) => {
    return (
        <div className="search-section">
            <input
                type={'text'}
                placeholder={'Search Here'}
                onChange={handleInputChange}
            />
            <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchForm;