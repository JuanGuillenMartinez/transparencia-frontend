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
                    <a @click="$router.push({ path: '/dependencias/todos' })" class="nav-link">Dependencias</a>
                    <a @click="$router.push({ name: 'BorrowIndexRoute' })" class="nav-link">Prestamos</a>
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
