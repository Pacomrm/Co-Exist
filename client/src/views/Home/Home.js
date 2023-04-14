import React from 'react';
import './home_styles.scss';
import banner from '../../assets/home/banner_home.jpg';
import projectIMG from '../../assets/home/project_home.jpg';
import adsIMG from '../../assets/home/ads_home.jpg';

export default function Home(){
    return(
        <div className="container-home">
            <header className="banner-container-home" aria-label="banner">
                <figure >
                    <img className="banner-home-mask" src={banner} alt="banner-home" aria-label="img-banner-home"/>
                </figure>
            </header>
            <main className="main-container-home">
                <section className="center-home">
                    <section className="left-block-home" aria-label="courses">
                        <div className="content-courses-home">
                            <blockquote>
                                <p><span className="highlight-bold" >Aprende</span> y obtén experiencia en el campo con proyectos que están haciendo las cosas bien</p>
                            </blockquote>
                            <p><a className="cta" href="/projects">Inicia -></a></p>
                            <div className="course-home"></div>
                            <div className="course-home"></div>
                        </div>
                    </section>
                    <section className="right-block-home">
                        <section className="projects-container-home" aria-label="projects">
                            <div className="content-projects-home">
                                <div>
                                    <blockquote>
                                        <p><span className="highlight-bold" >Explora proyectos...</span></p>
                                        <p>que se ajustan con tus intereses y a la vez están alineados con un propósito global de bienestar.</p>
                                    </blockquote>
                                    <p><a className="cta" href="/projects">Explora -></a></p>
                                </div>
                                <div className="project-home">
                                    <figure><img className="project-img-home" src={projectIMG} aria-label="project-image" alt="project-image-home"/></figure>
                                    <blockquote>
                                        <h5> Fruteros</h5>
                                        <p> Aprende sobre las frutas y como pueden sanarnos.</p>
                                    </blockquote>
                                </div>
                            </div>
                        </section>
                        <section className="resources-container-home" aria-label="resources">
                            <div className="content-resources-home">
                                <div>
                                    <blockquote>
                                        <p><span className="highlight-bold" >Recursos</span></p>
                                        <p>Encuentra materiales para profundizar el aprendizaje. Recursos oficiales y guías para mejorar tus proyectos.</p>
                                    </blockquote>
                                    <p><a className="cta" href="/projects">Buscar -></a></p>
                                </div>
                                <div>
                                    <div className="resource-home">
                                        <blockquote>
                                            <h5> ONU - ODS</h5>
                                            <p>17 objetivos destinados a perseguir la igualdad entre las personas, proteger el planeta y asegurar la prosperidad sin dejar a nadie atrás. </p>
                                        </blockquote>
                                    </div>
                                    <div className="resource-home">
                                        <blockquote>
                                            <h5> ONU - ODS</h5>
                                            <p>por el propósito de contribuir a una sociedad próspera, inclusiva y en armonía con el ambiente, a través de la implementación de modelos de negocios responsables. </p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
                <footer className="footer-container-home">
                    <div className="ads-home" aria-label="ads">
                        <figure >
                            <img className="banner-home-mask" src={adsIMG} alt="banner-home" aria-label="img-banner-home"/>
                        </figure>
                    </div>
                </footer>
            </main>
        </div>
    )
}