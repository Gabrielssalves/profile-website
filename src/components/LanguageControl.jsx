import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { LanguagesList } from '../i18n/Languages.js'
import './LanguageControl.css'

const LanguageControl = () => {
    const [lang, setLang] = useState('/' + window.location.pathname.split('/')[1]); 
    
    return (
        <div className="language-control">
            <ul className="nav-languages">
                {LanguagesList.map((item, index) => {
                    return <li
                                key={index}
                                style={lang === '/' + item.code ? { backgroundColor: 'rgb(233, 217, 0)' } : {}}
                                onClick={() => { 
                                    setLang('/'+ item.code)
                                    window.location.reload() 
                                }}
                            >
                            <Link 
                                style={lang === '/' + item.code ? { color: 'rgb(51, 51, 51)' } : {}}
                                to={'/' + item.code}>{item.code}
                            </Link>                    
                    </li>
                })}
            </ul>
        </div>
    )
}

export default LanguageControl