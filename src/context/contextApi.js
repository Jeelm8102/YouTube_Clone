import React, { createContext, useEffect, useState } from "react";

import { fetchDataFromApi } from '../utils/api'

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(false);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);


    // whenever the catergory of left pannel changes this useEffect will be called and then the method inside will execute.
    useEffect(() => {
        fetchSelectedCategoryData(selectCategories)
    }, [selectCategories]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
            console.log(contents)
            setSearchResults(contents)
            setLoading(false)
        })
    }

    return (
        <Context.Provider 
            value={{
                loading,
                setLoading,
                searchResults,
                setSelectCategories,
                selectCategories,
                mobileMenu,
                setMobileMenu
            }}
        >
            {props.children}
        </Context.Provider>
    )
}