// import React from 'react';

const SearchInput = (props) => {
    const setSearch = (e) => {
        let text = e.target.value.toUpperCase();
        props.updateSearch(text);
        props.loading();
        fetch(`https://invest-dimasik.herokuapp.com/api/trades?limit=10&symbol=${text}`)
        .then(response => response.json())
        .then(items => props.updateOperation(items))
        .catch(errors => props.error(errors))
    }
    return (
        <form
            className='navbar-search navbar-search-light form-inline mr-sm-3'
            id='navbar-search-main'
        >
            <div className='form-group mb-0'>
                <div className='input-group input-group-alternative input-group-merge'>
                    <div className='input-group-prepend'>
                        <span className='input-group-text'>
                            <i className='fas fa-search'></i>
                        </span>
                    </div>
                    <input
                        className='form-control'
                        placeholder='Search'
                        type='text'
                        value={props.search}
                        onChange={setSearch}
                    />
                </div>
            </div>
            <button
                type='button'
                className='close'
                data-action='search-close'
                data-target='#navbar-search-main'
                aria-label='Close'
            >
                <span aria-hidden='true'>×</span>
            </button>
        </form>
    );
};

export default SearchInput;
