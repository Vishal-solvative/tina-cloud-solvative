'use client'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {tinaField} from 'tinacms/dist/react'
import {useActivePage} from '../../hooks/useActivePage'

const Header = ({header, headerStyle = false, handleOpen}) => {
    const [scroll, setScroll] = useState(0)

    const {activePage, updateActivePage} = useActivePage()

    useEffect(() => {
        if (window.location.pathname !== '/') {
            updateActivePage(window.location.pathname)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    return (
        <>
            <header className={scroll ? `header sticky-bar stick ` : `header sticky-bar`}>
                <div className='container'>
                    <div className='main-header'>
                        <div className='header-left'>
                            <div className='header-logo'>
                                <Link className='d-flex' href='/home' onClick={() => updateActivePage('/home')}>
                                    <img alt='Solvative' src='/solvative-logo.svg' />
                                </Link>
                            </div>
                            <div className='header-nav'>
                                <nav className='nav-main-menu d-none d-xl-block'>
                                    <ul className='main-menu'>
                                        {header?.navLinks?.map((navLink, index) => (
                                            <li key={index} onClick={() => updateActivePage(navLink?.link)}>
                                                <Link href={navLink?.link} data-tina-field={tinaField(navLink, 'link')}>
                                                    <p className={activePage == navLink?.link ? 'active' : ''}>
                                                        {navLink?.title}
                                                    </p>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <div className='burger-icon burger-icon-white' onClick={handleOpen}>
                                    <span className='burger-icon-top' />
                                    <span className='burger-icon-mid' />
                                    <span className='burger-icon-bottom' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
