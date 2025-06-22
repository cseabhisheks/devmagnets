import style from './experience.module.css'
import { CgWebsite } from "react-icons/cg";
import { MdEngineering } from "react-icons/md";
import { FaSchool } from "react-icons/fa6";
export default function Experience() {
    const experiences = [
        {
            icon:<CgWebsite style={{fontSize:'40px'}}/>,
            company: "Webverse Digital",
            position: "Fullstack Developer",
            duration: "April 2024 - Present",
            description: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "React JS",
                "TypeScript",
                "Node JS",
                "Tailwind CSS",
                "MongoDb",
                "Redux",
                "Next Js"
            ]
        },
        {
             icon:<MdEngineering style={{fontSize:'40px'}}/>,
            company: "Agumentik Group of Companies",
            position: "Fullstack Engineer",
            duration: "July 2023 - March 2024",
            description: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
            skills: [
                "ReactJS",
                "Redux",
                "JavaScript",
                "Tailwind CSS",
                "HTML",
                "CSS",
                "SQL"
            ]
        },
        {
             icon:<FaSchool style={{fontSize:'40px'}}/>,
            company: "Newton School",
            position: "Frontend Intern",
            duration: "September 2021 - August 2022",
            description: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
            skills: [
                "HTML",
                "CSS",
                "Javascript",
                "Bootstrap",
                "Figma",
                "Material UI"
            ]
        }
    ];

    return (<>
        <section className={style.experience} id='experience'>
            <h1 className='fs-h2' style={{ borderBottom: '3px solid blueviolet' }}>Experience</h1>
            <h2 className='fs-p'>A collection of my work experience and the roles I have taken in various organizations</h2>
           <div className={style.container}>
             <div className={style.vline}>
                 {experiences.map((obj, i) => {
                return (
                    <div key={i} className={style.company}>
        

                        <div className={style.company_detail}>
                            <div className={style.c_img}>
                                <div className={style.cc_img}>{obj.icon}</div>
                            </div>
                            <div className={style.company_name}>
                                <h1 className='fs-h3'>{obj.position}</h1>
                                <h2 className='fs-h' style={{color:'blueviolet'}}>{obj.company}</h2>
                                <p className='fs-p'>{obj.duration}</p>
                            </div>
                        </div>

                        <div className={`${style.company_desc} fs-p`}>{obj.description}</div>
                        <div className={style.company_skill}>
                            <h1 style={{marginBottom:'15px'}} >Skills:</h1>

                            <div className={style.skill_box}>
                                {obj.skills.map((e, i) => {
                                    return <div key={i} className={`${style.company_skill_name} fs-p`} >{e}</div>
                                })}
                            </div>

                        </div>
                    </div>
                )
            })}
            </div>
           </div>

           

        </section>
    </>)
}