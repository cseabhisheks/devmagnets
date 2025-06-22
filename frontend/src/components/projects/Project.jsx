import style from './project.module.css';
import { useState } from 'react';
export default function Project() {
    const [isProjectSelect, setProjectSelect] = useState(false)
    const [projectdata, setProjectdata] = useState('')
    const [isblur, setblur] = useState(false) /* it is to be implemented when card is slected its background become blur */
    const handleProject = (data) => {
        setProjectSelect(true)
        setProjectdata(data)
        setblur(true)

    }
    const crossSelectedProject = () => {
        setProjectSelect(false)
        setblur(false)
    }
    const projects = [

        {
            img: './projects/detective.png',
            title: "GitHub Profile Detective",
            description:
                "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions.",
            tech: ["HTML", "CSS", "JavaScript", "React JS", "API"]
        },
        {
            img: './projects/plan.png',
            title: "CS Prep",
            description:
                "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
            tech: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"]
        },
        {
            img: './projects/movie.png',
            title: "Movie Recommendation App",
            description:
                "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
            tech: ["React JS", "API", "HTML", "CSS", "JavaScript"]
        },
        {
            img: './projects/stamp.png',
            title: "Email Validator NPM Package",
            description:
                "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
            tech: ["React JS", "Node.js", "NPM", "Validation"]
        },
        {
            img: './projects/task.png',
            title: "Task Reminder Chrome Extension Tool",
            description:
                "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
            tech: ["JavaScript", "Chrome Extension", "HTML", "CSS"]
        },
        {
            img: './projects/web.png',
            title: "Webverse Digital",
            description:
                "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
            tech: ["HTML", "CSS", "JavaScript", "Framer Motion"]
        },
        {
            img: './projects/coding.png',
            title: "Coding Master",
            description:
                "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
            tech: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"]
        },
        {
            img: './projects/img.png',
            title: "Image Search App",
            description:
                "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
            tech: ["React JS", "API", "Search Feature", "CSS", "JavaScript"]
        },
        {

            img: './projects/remove.png',
            title: "Image Background Remover",
            description:
                "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
            tech: ["React JS", "API", "Image Processing", "HTML", "CSS", "JavaScript"]
        }
    ];

    return (<>
        <section className={style.project} id='project'>

            <h1 className='fs-h2' style={{ borderBottom: '3px solid blueviolet' }} >Projects</h1>
            <h2 className='fs-p' >A showcase of the projects I have worked on, highlighting my skills and
                experience in various technologies</h2>
            <div className={style.container_project}>
                {projects.map((obj, i) => {
                    return (
                        <div key={i} className={style.p} onClick={() => handleProject(obj)}>
                            <img src={obj.img} alt="img" className={style.pi} />
                            <div className='fs-h3'>{obj.title}</div>
                            <div style={{color:'blueviolet',fontSize:'12px',borderBottom:'2px solid gray'}}>Click to know more</div>
                        </div>
                    )
                })}

            </div>
        </section>
        {isProjectSelect && (
            // i want to slectedproject appear on screen with no space in background
           <div className={style.sbcontainer}>
             <div className={style.selectedProject} >
                <div onClick={crossSelectedProject} className={style.x}>x</div>
                <img className={style.pi2} src={projectdata.img} alt="" />
                <h1 className='fs-h2'>{projectdata.title}</h1>
                <div className="fs-p">{projectdata.description}</div>
                <div className={style.buttons}>
                    <div className={style.btn}>View Code</div>
                    <div className={style.btn}>View Website</div>
                </div>

            </div>
           </div>
        )}

    </>)
}