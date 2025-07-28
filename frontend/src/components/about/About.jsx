import style from './about.module.css';
export default function About() {
    
    return (<>
        <section className={style.hero_section} id='about'>
            <div className={style.hero_img}>
                <img className={style.himg} src="./abhishek.jpeg" alt="" />
            </div>
            <div className={style.hero_content}>
                <h1 className='fs-h1' >Hi I'm</h1>
                <h2 className='fs-h2'>Abhishek Singh</h2>
                <h3 className='fs-h3'>I'm Founder of <span style={{color:'blueviolet'}} >DevMagnets</span></h3>
                <p className='fs-p'>I create powerful digital experiences that magnetize attention and solve real-world problems.
                    As a passionate full-stack developer, I specialize in crafting responsive websites, intuitive UIs, and robust backend systems. From concept to deployment, I believe in clean code, creative design, and efficient solutions.
         

                    💡 Skilled in React, Node.js, MongoDB, JavaScript, HTML/CSS, Java, and SQL.
                    🔒 Currently building safety-focused web apps with geolocation and real-time features.
                    🌐 On a mission to turn complex challenges into elegant code.
                </p>
                <button className={`fs-h4 ${style.button}`} type="button">Download CV</button>

            </div>
        </section>
    </>)
}