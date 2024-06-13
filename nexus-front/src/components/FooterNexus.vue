<template>
    <footer>

        <div class="social-icons">
            <a href="https://github.com/K1Melo/pjct-hackaton-front" target="_blank"><i class="fa-solid fa-file"
                    id="docs"></i></a>
            <p>/</p>
            <a href="https://github.com/K1Melo/pjct-hackaton-front" target="_blank"><i class="fa-brands fa-android"
                    id="android"></i></a>
            <p>/</p>
            <a href="https://www.figma.com/file/ZXBf8qpOWkXx6BTc8lYoVy/hackaton2024?type=design&node-id=0%3A1&mode=design&t=0xHokdi2OiYck9O8-1"
                target="_blank"><i class="fa-brands fa-figma" id="figma"></i></a>
            <p>/</p>
            <a href="https://github.com/K1Melo/pjct-hackaton-front" target="_blank"><i class="fa-brands fa-github"
                    id="github"></i></a>
        </div>
        <div class="footer-bottom">
            <p>© 2024 SHARKTEC</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    padding: 30px 0;
    background-image: url("../assets/footer-img.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
}

.social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.social-icons p {
    margin: 10px;
    color: #FFF;
}

.social-icons a {
    text-decoration: none;
    padding: 10px;
    margin: 10px;
    border-radius: 50%;

}

.social-icons a i {
    font-size: 1.8em;
    color: #FFF;
    opacity: 0.9;
}

.fa-brands,
.fa-solid {
    transition: color 0.3s linear;
}

#figma:hover {
    color: #bb3b66b7;
}

#github:hover {
    color: #d9d9d9b7;
}

#android:hover {
    color: #4dc529da;
}

#docs:hover {
    color: #4251d8bb;
}

.footer-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #FFF;
    padding: 2% 0;
    font-size: 1em;
}

@media only screen and (max-width: 650px) {
    footer {
        flex-direction: column;
    }

    .social-icons a i {
        font-size: 1.5em;
    }

    .footer-bottom {
        font-size: .8em;
    }
}

@media only screen and (max-width: 330px) {
    .social-icons a i {
        font-size: 1.5em;
    }

    .footer-bottom {
        font-size: .6em;
    }
}
</style>