import React from "react";

const About = () => { 
    return ( 
        <section className="page">
            <h1>About Page</h1>

            <section className="about-text">
                <aside>
                    <summary>
                        <p className="question">What is <i>Shop Now</i>?</p>
                        <details>
                            <p className="answer">By far the most interesting project from JS Odin Project's curriculum. 
                                It doesn't feel as hard as I imagined it would be. It's really enjoying tu build a project like this.
                            </p>
                        </details>
                    </summary>
                </aside>

                <br />
                <aside>
                    
                <summary>
                    <p className="question">What would you find trough this shop?</p>

                        <details>
                            <p className="answer">I wanted a special aproach to this project. I can't wait to start learning back end.
                            Therefore, the items you "can buy there" where chosen random with unsplash get photos. 
                            It was a great time inventing some logic stuff to transform those photos into real products.</p>
                        </details>
                    </summary>
                </aside>
            </section>
        </section>
    )
};

export default About;