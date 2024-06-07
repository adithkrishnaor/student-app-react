import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Student App</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Add Student</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/searchstudent">Search</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/deletestudent">Delete</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/viewall">View All</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar