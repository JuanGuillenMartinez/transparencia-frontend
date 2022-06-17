<template>
    <header>
        <img class="logo" src="img/logo4.jpg" alt="" />
        <h1 class="titulo">
            Coordinación de Transparencia y Acceso a la Información
        </h1>
    </header>

    <div class="nav-bg">
        <nav class="navegacion-principal contenedor">
            <a href="#">Inicio</a>
            <a href="sobremi.html">Agregar Archivos</a>
            <a href="#">Eliminar Archivo</a>
            <a href="#">Editar Archivo</a>
        </nav>
    </div>

    <section class="hero">
        <div class="contenido-hero">
            <h2>Sistema de Prestamo de Archivos</h2>
            <p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-map-pin"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#FFC107"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="11" r="3" />
                    <path
                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                    />
                </svg>
                Villahermosa, Tabasco
            </p>

            <a class="boton" href="#">Contactar</a>
            <div>
                <a href="https://www.villahermosa.gob.mx/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-building-bank"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
    <footer class="footer">
        <p>Todos los derechos reservador.</p>
    </footer>
</template>

<script>
export default {};
</script>

<style scoped>
:root {
    --primario: #ffc107;
    --secundario: #0097a7;
    --blanco: #ffffff;
    --oscuro: #000;
    --gris: #757575;
}
html {
    font-size: 62.5%;
    box-sizing: border-box;
}
*,
*:before,
*:after {
    box-sizing: inherit;
}
body {
    font-size: 16px; /*1rem = 10px*/
    font-family: "Krub", sans-serif;
    background-image: linear-gradient(to top, #dfe9f3 0%, var(--blanco) 100%);
}

h1 {
    font-size: 2.8rem;
}
h2 {
    font-size: 2.8rem;
}
h3 {
    font-size: 1.8rem;
}
h1,
h2,
h3 {
    text-align: center;
}

.logo {
    width: 25rem;
    height: 8.7rem;
    margin-left: 15rem;
    margin-bottom: -6.7rem;
}

.contenedor {
    max-width: 120rem;
    margin: 0 auto;
}

.sombra {
    -webkit-box-shadow: 0px 5px 15px 0px rgba(140, 137, 140, 1);
    -moz-box-shadow: 0px 5px 15px 0px rgba(140, 137, 140, 1);
    box-shadow: 0px 5px 15px 0px rgba(140, 137, 140, 1);
    background-color: var(--blanco);
    padding: 2rem;
    border-radius: 1rem;
}

.boton {
    background-color: #831919;
    color: var(--blanco);
    padding: 1rem 3rem;
    margin-top: 3rem;
    font-size: 2rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 0.5rem;
    width: 90%;
    text-align: center;
    border: none;
}

@media (min-width: 768px) {
    .boton {
        width: auto;
    }
}

.boton,
.buton:hover {
    cursor: pointer;
}

.w-sm-100 {
    width: 100%;
}

@media (min-width: 768px) {
    .w-sm-100 {
        width: auto;
    }
}

.flex {
    display: flex;
}

.alinearr-derecha {
    justify-content: flex-end;
}

.nav-bg {
    background-color: #831919;
}

.navegacion-principal {
    display: flex;
    flex-direction: column;
}

@media (min-width: 768px) {
    .navegacion-principal {
        flex-direction: row;
        justify-content: space-between;
    }
}

.navegacion-principal a {
    display: block;
    text-align: center;
    color: var(--blanco);
    text-decoration: none;
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem;
}

.navegacion-principal a:hover {
    background-color: var(--primario);
    color: var(--oscuro);
}

.hero {
    /* background-image: url(../img/hero.jpg); */
    background-repeat: no-repeat;
    background-size: cover;
    height: 410px;
    position: relative;
    margin-bottom: 2rem;
}

.contenido-hero {
    position: absolute;
    background-color: rgb(0 0 0 / 70%);
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.contenido-hero h2,
.contenido-hero p {
    color: var(--blanco);
}

@media (min-width: 768px) {
    .servicios {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 1rem;
    }
}

.servicio {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.servicio h3 {
    color: var(--secundario);
    font-weight: normal;
}

.servicio p {
    line-height: 2;
    text-align: center;
}

.servicio .iconos {
    height: 15rem;
    width: 15rem;
    background-color: var(--primario);
    border-radius: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.proyect {
    height: 70rem;
    width: 70rem;
}

.formulario {
    background-color: var(--gris);
    width: min(60rem, 100%);
    margin: 0 auto;
    padding: 2rem;
    border-radius: 1rem;
}

.formulario fieldset {
    border: none;
}

.formulario legend {
    text-align: center;
    font-size: 1.8rem;
    transform: uppercase;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--primario);
}

.contenedor-campos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto 20rem;
    column-gap: 1rem;
}

.campo {
    margin-bottom: 1rem;
}

@media (min-width: 768px) {
    .campo label {
        color: var(--blanco);
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: block;
    }

    .campo:nth-child(3),
    .campo:nth-child(4) {
        grid-column: 1 / 3;
    }
}

.campo textarea {
    height: 20rem;
}

.input-text {
    width: 100%;
    border: none;
    padding: 1.5rem;
    border-radius: 0.5rem;
}

.footer {
    text-align: center;
}

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
     ========================================================================== */

/**
   * Remove the margin in all browsers.
   */

body {
    margin: 0;
}

/**
   * Render the `main` element consistently in IE.
   */

main {
    display: block;
}

/**
   * Correct the font size and margin on `h1` elements within `section` and
   * `article` contexts in Chrome, Firefox, and Safari.
   */

h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

/* Grouping content
     ========================================================================== */

/**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd `em` font sizing in all browsers.
   */

pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
}

/* Text-level semantics
     ========================================================================== */

/**
   * Remove the gray background on active links in IE 10.
   */

a {
    background-color: transparent;
}

/**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
}

/**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

b,
strong {
    font-weight: bolder;
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd `em` font sizing in all browsers.
   */

code,
kbd,
samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
}

/**
   * Add the correct font size in all browsers.
   */

small {
    font-size: 80%;
}

/**
   * Prevent `sub` and `sup` elements from affecting the line height in
   * all browsers.
   */

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

/* Embedded content
     ========================================================================== */

/**
   * Remove the border on images inside links in IE 10.
   */

img {
    border-style: none;
}

/* Forms
     ========================================================================== */

/**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

button,
input,
optgroup,
select,
textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
}

/**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

button,
input {
    /* 1 */
    overflow: visible;
}

/**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

button,
select {
    /* 1 */
    text-transform: none;
}

/**
   * Correct the inability to style clickable types in iOS and Safari.
   */

button,
[type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button;
}

/**
   * Remove the inner border and padding in Firefox.
   */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

/**
   * Restore the focus styles unset by the previous rule.
   */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
}

/**
   * Correct the padding in Firefox.
   */

fieldset {
    padding: 0.35em 0.75em 0.625em;
}

/**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from `fieldset` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    `fieldset` elements in all browsers.
   */

legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
}

/**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

progress {
    vertical-align: baseline;
}

/**
   * Remove the default vertical scrollbar in IE 10+.
   */

textarea {
    overflow: auto;
}

/**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

[type="checkbox"],
[type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
}

/**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

/**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

[type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
}

/**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

/**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to `inherit` in Safari.
   */

::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
}

/* Interactive
     ========================================================================== */

/*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

details {
    display: block;
}

/*
   * Add the correct display in all browsers.
   */

summary {
    display: list-item;
}

/* Misc
     ========================================================================== */

/**
   * Add the correct display in IE 10+.
   */

template {
    display: none;
}

/**
   * Add the correct display in IE 10.
   */

[hidden] {
    display: none;
}
</style>
