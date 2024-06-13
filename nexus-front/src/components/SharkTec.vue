<template>
    <section class="whoWeAre">
        <div class="imgBackground">
            <!-- <h2>SHARKTEC 🦈</h2> -->
            <img src="../assets/imgs/sharktec_banner.png" alt="">
        </div>
        <div class="participantsCards">
            <div class="card">
                <div class="img">
                    <img src="../assets/imgs/team/giovanna_img.jpeg" alt="" id="mizuno" class="cardsImg">
                </div>
                <div class="informations">
                    <div class="left">
                        <h3>Giovanna Ferreira Cavalcanti</h3>
                        <p>Designer - Documentadora - Idealizadora</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="img">
                    <img src="../assets/imgs/team/kaua_img.jpeg" alt="" id="kaua" class="cardsImg">
                </div>
                <div class="informations">
                    <div class="left">
                        <h3>Kauã Fernandes Souza de Melo</h3>
                        <p>Programador - Designer</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="img" style="align-items: start;">
                    <img src="../assets/imgs/team/lima_img.jpeg" alt="" id="lima" class="cardsImg">
                </div>
                <div class="informations">
                    <div class="left">
                        <h3>Mateus Lima Rodrigues da Silva</h3>
                        <p>Nada</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="img">
                    <img src="../assets/imgs/team/udiel_img.jpeg" alt="" id="udiel" class="cardsImg">
                </div>
                <div class="informations">
                    <div class="left">
                        <h3>Udiel Inacio de Oliveira Silva</h3>
                        <p>Programador - Designer</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.imgBackground {
    height: 300px;
    background-image: url("../assets/imgs/Banner-Prototype.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        width: 50%;
    }
}


.whoWeAre {
    position: relative;
    width: 100%;

    .participantsCards {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 2%;
        transition: all 0.5s ease-in-out;

        width: 100%;
        height: 50%;

        .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            height: 500px;
            aspect-ratio: 1;
            margin: 10px;
            background-color: rgba(0, 0, 0, 0);

            .img {
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 80%;
                height: 78%;

                img {
                    transition: all 0.2s ease-out;
                    width: 100%
                }
            }

            .img img:hover {
                transform: scale(1.2);
            }

            .informations {
                margin-top: 1%;
                height: 20%;
                width: 80%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .left {
                    h3 {
                        font-size: 25px;
                        font-weight: 700;
                    }

                    p {
                        margin-top: 8px;
                        font-size: 15px;
                        font-weight: 300;
                    }
                }

                img {
                    width: 18%;
                    border-radius: 50%;
                }
            }
        }

    }
}



@media only screen and (max-width: 1024px) {

    .imgBackground {
        height: 280px;

        img {
            width: 55%;
        }
    }

    .whoWeAre {

        .participantsCards {
            margin-top: 2%;
            width: 100%;
            height: 50%;

            .card {
                width: 480px;
                height: 500px;
                margin: 10px;

                .img {
                    width: 80%;
                    height: 78%;
                }

                .informations {
                    height: 20%;
                    width: 80%;

                    .left {
                        h3 {
                            font-size: 30px;
                        }

                        p {
                            font-size: 18px;
                        }
                    }

                    img {
                        width: 18%;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 1000px) {
    .whoWeAre {
        .participantsCards {
            .card {
                width: 80%;
                height: 600px;

                .img {
                    width: 100%;
                    height: 78%;
                }

                .informations {
                    height: 22%;
                    width: 100%;

                    .left {
                        h3 {
                            font-size: 35px;
                        }

                        p {
                            font-size: 22px;
                        }
                    }

                    img {
                        width: 10%;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    .imgBackground {
        height: 250px;

        img {
            width: 60%;
        }
    }

    .whoWeAre {

        .participantsCards {
            margin-top: 3%;

            .card {
                width: 100%;

                .img {
                    width: 95%;
                    height: 78%;
                }

                .informations {
                    width: 95%;

                    .left {
                        h3 {
                            font-size: 25px;
                        }

                        p {
                            font-size: 15px;
                        }
                    }

                    img {
                        width: 12%;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 541px) {
    .imgBackground {
        height: 200px;

        img {
            width: 65%;
        }
    }

    .whoWeAre {

        .participantsCards {
            .card {
                .informations {
                    .left {
                        h3 {
                            font-size: 25px;
                        }

                        p {
                            font-size: 15px;
                        }
                    }

                    img {
                        width: 18%;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 325px) {
    .imgBackground {
        height: 200px;

        img {
            width: 70%;
        }
    }

    .whoWeAre {

        .participantsCards {
            margin-top: 3%;

            .card {
                width: 100%;

                .img {
                    width: 100%;
                    height: 78%;
                }

                .informations {
                    width: 100%;

                    .left {
                        h3 {
                            font-size: 20px;
                        }

                        p {
                            font-size: 12px;
                        }
                    }

                    img {
                        width: 22%;
                    }
                }
            }
        }
    }
}
</style>