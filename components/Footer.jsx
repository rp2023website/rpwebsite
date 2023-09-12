import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row align-items-start justify-content-center">
                        <div className="col-md-5">
                            <h1>Ramen Paul</h1>
                            <p>
                                He is Western music teacher and multi-instrumentalist who's also a skilled sound engineer, passionate about teaching and crafting great music.</p>
                            <div className="follow">
                                <h6>Follow me on </h6>
                                <ul>
                                    <li>
                                        <a href="https://www.instagram.com/ramen_paul" aria-label="Instagram" target="_blank" rel="noopener">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/ramen-paul-6a612180/" aria-label="Linkedin" target="_blank" rel="noopener">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/user/ramensir" aria-label="Youtube" target="_blank" rel="noopener">
                                            <i className="bi bi-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/ramen.paul.9" aria-label="Facebook" target="_blank" rel="noopener">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                    </li>
                                    <li><a href="https://twitter.com/ramen_paul" aria-label="Twitter" target="_blank" rel="noopener">
                                        <i className="bi bi-twitter"></i>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="links">
                                <h3>Tutorials</h3>
                                <ul>
                                    <li><a href="/drums">Drums</a></li>
                                    <li><a href="/violin">Violin</a></li>
                                    <li><a href="/guitar">Guitar</a></li>
                                    <li><a href="/vocals">Vocals</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact">
                                <h3>Contact</h3>
                                <ul>
                                    <li><i className='bi bi-envelope'> ramen.paul14@gmail.com</i> </li>
                                    <li><i className='bi bi-telephone'> +91 98110 71981</i> </li>
                                    <li><i className='bi bi-geo'> Dwarka, New Delhi, India</i> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="row">
                            <div className="col-md-6">
                                © 2023 Ramen Paul | All Rights Reserved
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
