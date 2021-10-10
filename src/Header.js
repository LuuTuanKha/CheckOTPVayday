import React, { useState } from 'react'
import MiVay from './MiVay'
import VayDay from './VayDay'

const Header = () => {
    const [index, setindex] = useState(0)

    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
                    <div class="container-fluid">
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarExample01"
                            aria-controls="navbarExample01"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarExample01">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                
                                <li class="nav-item">
                                    <a class="nav-link" href="#" onClick={()=>setindex(0)}>VayDay</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" onClick={()=>setindex(1)}>MiVay</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Giới thiệu</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="p-5 text-center bg-light">
                {index===0 ? <VayDay />: <MiVay/>}
                </div>
            </header>
        </div>
    )
}

export default Header
