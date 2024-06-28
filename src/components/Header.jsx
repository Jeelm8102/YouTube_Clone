import React, { useContext, useState } from 'react'

import ytLogo from '../assets/yt-logo.png'
import ytLogoMobile from '../assets/yt-logo-mobile.png'

import { SlMenu } from 'react-icons/sl'
import { IoIosSearch } from 'react-icons/io'
import { RiVideoAddLine } from 'react-icons/ri'
import { FiBell } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'
import { Context } from '../context/contextApi'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("")

    // use values given provider in ContextApi.js with the help of Context variable
    // The values from providers which we want use should be mentioned in left curly braces
    const { loading, mobileMenu, setMobileMenu } = useContext(Context);

    const navigate = useNavigate();

    const seachQueryHandler = (event) => {
        if ((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0) {
            navigate(`/searchResult/${searchQuery}`);
        }
    }

    const mobileMenuToggle = () =>{
        setMobileMenu(!mobileMenu)
    }

    const {pathname} = useLocation();
    const pagename = pathname?.split("/")?.filter(Boolean)?.[0]

    return (
        <div>Header</div>
    )
}

export default Header