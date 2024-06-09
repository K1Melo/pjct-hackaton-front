<template>
    <nav>
        <img src="../assets/imgs/sharktec_small_logo.png" alt="">
        <p>|</p>
        <img src="../assets/imgs/small_logo.png" alt="">
        <h2>Nexus</h2>
        <ul id="nav-bar">
            <li class="links" id="sobre" @click="goTo(1)">Sobre</li>
            <li class="links" id="pitch" @click="goTo(2)">Pitch</li>
            <li class="links" id="ferramentas" @click="goTo(3)">Ferramentas</li>
            <li class="links" id="equipe" @click="goTo(7)">Equipe</li>
        </ul>
        <i class="material-symbols-outlined" id="menu" @click="openNav">
            menu
        </i>
    </nav>
</template>

<script>
export default {
    name: 'HeaderNexus',
    methods: {
        openNav() {
            let menuIcon = document.getElementById('menu');
            let navBar = document.getElementById('nav-bar');
            navBar.classList.toggle('active');
            if (navBar.classList.contains('active')) {
                menuIcon.innerHTML = '<i class="material-symbols-outlined" id="menu" @click="openNav">close</i>';
            } else {
                menuIcon.innerHTML = '<i class="material-symbols-outlined" id="menu" @click="openNav">menu</i>'
            }
        },
        goTo(index) {
            window.scroll({ top: innerHeight * index, behavior: "smooth" })
        }
    }
}
</script>

<style scoped>
nav {
    width: 100%;
    padding: 15px 0;
    background-color: aqua;
    background: linear-gradient(to bottom, #000000, #000000e5, #000000a8, #00000000);
    display: flex;
    align-items: center;
    justify-content: start;
    color: #fff;
    position: relative;
}

ul {
    display: flex;
    list-style: none;
    opacity: 1;
    transition: all 0.5s ease-in-out;
}

.menu-nav {
    display: none;


    ul {
        flex-direction: column;
    }
}

li {
    display: inline;
    font-size: 20px;
    margin-left: 15px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
        color: #000000;
        background-color: #ffffff;
    }
}

p {
    font-size: 20px;
    margin-left: 20px;
}

img {
    margin-right: 5px;
    margin-left: 20px;
}

h2 {
    font-size: 30px;
    font-weight: 500;
    margin-left: 5px;
}

#menu {
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    position: absolute;
    right: 5%;
}

#menu:hover {
    transition: transform 0.2s ease-in;
    transform: rotate(180deg);
}

@media only screen and (max-width: 740px) {
    p {
        font-size: 18px;
        margin-left: 10px;
    }

    img {
        width: 10%;
    }

    h2 {
        font-size: 27px;
    }


    #menu {
        visibility: visible;
        opacity: 1;
    }

    ul {
        z-index: -1;
        position: absolute;
        top: 0px;
        right: 0;
        width: 100%;
        height: 100vh;
        background: linear-gradient(to bottom, #000000, #000000e5, #000000e5, #000000ad);
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 0;
        transform: translateX(100%);
    }

    ul.active {
        transform: translateX(0%);
    }

    li {
        margin: 0;
    }

}
</style>