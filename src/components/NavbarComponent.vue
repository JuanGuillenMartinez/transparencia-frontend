<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"
                ><img src="@/assets/logo.png" width="40" alt="" />Dashboard</a
            >
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Usuarios
                        </a>
                        <ul
                            class="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <li>
                                <a class="dropdown-item" href="#">Registrar</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Solicitudes</a
                                >
                            </li>
                        </ul>
                    </li>
                    <a class="nav-link">Comercios</a>
                    <a class="nav-link">Solicitudes</a>
                    <a class="nav-link">Ordenes</a>
                    <a class="nav-link">Logs</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script></script>

<style scoped>
a {
    cursor: pointer;
}
</style>
