import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-info">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://static.vecteezy.com/system/resources/previews/018/859/280/non_2x/train-rail-logo-symbol-flat-color-illustration-locomotive-vector.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
                            Bootstrap
                    </a>

                    <a class="navbar-brand" href="#">Metro App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/service">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/FAQ">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
