<template>
    <!DOCTYPE html>
<html class="container-html" lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transparencia</title>
</head>

<body class=".contenido-body">
    <header>
        <h1 class="titulo">Coordinación de Transparencia y Acceso a la Información Pública</h1>
    </header>

    <section class="hero">
        <div class="contenido-hero">
            <h2>Sistema de Prestamo de Archivos</h2>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="80"
                    height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFC107" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="11" r="3" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg> Villahermosa, Tabasco
            </p>

            <div>
                <a href="https://www.villahermosa.gob.mx/">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-bank" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="3" y1="21" x2="21" y2="21" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                        <polyline points="5 6 12 3 19 6" />
                        <line x1="4" y1="10" x2="4" y2="21" />
                        <line x1="20" y1="10" x2="20" y2="21" />
                        <line x1="8" y1="14" x2="8" y2="17" />
                        <line x1="12" y1="14" x2="12" y2="17" />
                        <line x1="16" y1="14" x2="16" y2="17" />
                      </svg>
                </a>
            </div>

        </div>

    </section>

<main class="contenedor sombra">
        <h2 style=" text-align: center">Transparencia</h2>
        <div class="servicios">

            <section class="servicio">
                <h3>Definición de acceso a la Información</h3>
                <div class="iconos">
                   <i style="font-size: 5rem" class="fa-solid fa-box-archive"></i>
                </div>
                <p>El acceso a la información consiste en el derecho reconocido jurídicamente —a menudo a través de leyes sobre libertad de información— de consultar datos e información clave en poder del gobierno o de cualquier organismo público. 
                Si bien los presupuestos, la aprobación de proyectos y las evaluaciones normalmente se publican, los ciudadanos pueden solicitar que se proporcionen documentos adicionales.</p>
            </section>

            <section class="servicio">
                <h3>Definición de Transparencia</h3>
                <div class="iconos">
                   <i style="font-size: 5rem" class="fa-solid fa-folder-open"></i>
                </div>
                <p>El acceso a la información consiste en el derecho reconocido jurídicamente —a menudo a través de leyes sobre libertad de información— de consultar datos e información clave en poder del gobierno o de cualquier organismo público. Si bien los presupuestos, 
                la aprobación de proyectos y las evaluaciones normalmente se publican, los ciudadanos pueden solicitar que se proporcionen documentos adicionales.</p>
            </section>

            <section class="servicio">
                <h3>Se encarga</h3>
                <div class="iconos">
                <i style="font-size: 5rem" class="fa-solid fa-circle-info"></i>
                </div>
                <p>La transparencia es la cualidad de un gobierno, empresa, organización o persona de ser abierta en la divulgación de información, normas, planes, procesos y acciones.

Como regla general, los funcionarios públicos, empleados públicos, gerentes y directores de empresas y organizaciones, y las juntas directivas tienen la obligación de actuar de manera visible, predecible y comprensible en la promoción de la participación y la rendición de cuentas.</p>
            </section>

        </div>

        <footer class="footer">
            <p>Todos los derechos reservador.</p>
        </footer>

    </main>



</body>

</html>
</template>

<script>
export default {};
</script>

<style scoped>
:root{
    --primario: #ffc107; 
    --secundario: #0097A7;
    --blanco: #ffffff;
    --oscuro: #000;
    --gris: #757575; 
}
.container-html {
    font-size: 62.5%;
    box-sizing: border-box;
}
.contenido-body{
    font-size: 16px;
    font-family: 'Krub', sans-serif;
    background-image: linear-gradient(to top, #DFE9F3 0%, var(--blanco) 100%);
}


.logo{
   width: 25rem;
   height: 8.7rem;
   margin: 2rem; 
   position: absolute;
}
.titulo{
    font-size: 3.3rem;
    font-family: 'Krub', sans-serif;
    text-align: center;
}

.contenedor{
    max-width: 120rem;
    margin: 0 auto;
}

.sombra{
    -webkit-box-shadow: 0px 5px 15px 0px rgba(140,137,140,1);
    -moz-box-shadow: 0px 5px 15px 0px rgba(140,137,140,1);
    box-shadow: 0px 5px 15px 0px rgba(140,137,140,1);
    background-color: var(--blanco);
    padding: 2rem;
    border-radius: 1rem;
}

.boton{
    background-color: #831919;
    color: var(--blanco);
    padding: 1rem 3rem;
    margin-top: 3rem;
    font-size: 2rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: .5rem;
    width: 90%;
    text-align: center;
    border: none;
}

@media (min-width: 768px) {
    .boton{
        width: auto;
    }
}

.boton,.buton:hover{
cursor: pointer;
}

.w-sm-100{
    width: 100%;
}

@media (min-width: 768px) {
    .w-sm-100{
        width: auto;
    }
}

.flex{
    display: flex;
}

.alinear-derecha{
    justify-content: flex-end;
}

.nav-bg{
    background-color: #831919;
}

.navegacion-principal{
    display: flex;
    flex-direction: column;
   }

@media (min-width: 768px) {
    .navegacion-principal{
        flex-direction: row;
        justify-content: space-between;
    }    
}

.navegacion-principal a{
    display: block;
    text-align: center;
    color: var(--blanco);
    text-decoration: none;
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem;
}

.navegacion-principal a:hover{
    background-color: var(--primario);
    color: var(--oscuro);
}

.hero{ 
    background-image: url(https://th.bing.com/th/id/OIP.XH9VdUuumk-9vYkI54TT0QHaEo?pid=ImgDet&w=1080&h=675&rs=1);
    background-repeat: no-repeat;
    background-size: cover;
    height: 410px;
    position: relative;
    margin-bottom: 2rem;
}

.contenido-hero{
    position: absolute;
    background-color: rgb(0 0 0 / 70%);
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.contenido-hero h2, .contenido-hero p{
    color: #ffffff;
}

@media (min-width: 768px){
    .servicios{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    
    }
}

.servicio{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.servicio h3{
    color: var(--secundario);
    font-weight: normal;
}

.servicio p{
    line-height: 2;
    text-align: center;
}

.servicio .iconos{
    height: 15rem;
    width: 15rem;
    background-color: var(--primario);
    border-radius: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.proyect{
    height: 70rem;
    width: 70rem;
}

.formulario{
    background-color: var(--gris);
    width: min(60rem, 100%);
    margin: 0 auto;
    padding: 2rem;
    border-radius: 1rem;
}

.formulario fieldset{
    border:none;
}

.formulario legend{
    text-align: center;
    font-size: 1.8rem;
    transform: uppercase;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--primario);
}

.contenedor-campos{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto 20rem;
    column-gap: 1rem;
}

.campo{
    margin-bottom: 1rem;
}

@media (min-width: 768px ){
    .campo label{
    color: var(--blanco);
    font-weight: bold;
    margin-bottom: .5rem ;
    display: block;   
    }

    .campo:nth-child(3),.campo:nth-child(4){
        grid-column: 1 / 3;
    }
}


.campo textarea{
 height: 20rem;
}

.input-text{
    width: 100%;
    border: none;
    padding: 1.5rem;
    border-radius: .5rem;
}

.footer{
    text-align: center;
}
</style>
