import style from './skill.module.css'

export default function Skill() {
    const skill_categories = [
        {

            category: 'Frontend',
            skills: [
                { title: 'HTML', icon: './language/html-5.png' },
                { title: 'CSS', icon: './language/css-3.png' },
                { title: 'JavaScript', icon: './language/js.png' },
                { title: 'React Js', icon: './language/react.png' },
                { title: 'Bootstrap', icon: './language/bs.jpg' },
                { title: 'Tailwind', icon: './language/tw.jpg' }
            ]
        },
        {

            category: 'Backend',
            skills: [
                { title: 'NODE JS', icon: './language/nodejs.png' },
                { title: 'Express', icon: './language/express.png' },
                { title: 'MySQL', icon: './language/mysql.avif' },
                { title: 'MongoDB', icon: './language/mongodb.jpg' }
            ]
        },
        {

            category: 'Languages',
            skills: [
                { title: 'C', icon: './language/c.jpg' },
                { title: 'Java', icon: './language/java.png' },
                { title: 'Python', icon: './language/python.png' },
                { title: 'JavaScript', icon: './language/js.png' }
            ]
        },
        {

            category: 'Tools',
            skills: [
                { title: 'Git', icon: './language/git.webp' },
                { title: 'Github', icon: './language/github.webp' },
                { title: 'VS Code', icon: './language/vs studio.jpg' },
                { title: 'Compass', icon: './language/compass.webp' },
                { title: 'Figma', icon: './language/figma.jpg' },
                { title: 'Vercel', icon: './language/vercel.jpg' },
                { title: 'Netlify', icon: './language/netlify.jpg' }
            ]
        }
    ];


    return (<>

        <section className={style.skill_section} id='skill'>
            <h1 className='fs-h2' style={{borderBottom:'3px solid blueviolet'}}>SKILLS</h1>
            <p className='fs-p'>A collection of my technical skills and expertise honed through various projects and experiences</p>
            <div className={style.skillboxes}>
                {skill_categories.map((obj) => {
                    return <div key={obj.category} className={`${style.skillbox} fs-h3`}>{obj.category}
                        <div className={style.skill_list}>
                            {obj.skills.map((skill) => (
                                <div key={skill.title} className={`${style.skill_item} fs-p`}>
                                    {skill.title} 
                                    <img src={skill.icon} alt="" style={{width:'20px' ,aspectRatio:'1/1'}} />
                                </div>
                            ))}
                        </div>

                    </div>
                  

                })}
            </div>

        </section>
    </>)
}
