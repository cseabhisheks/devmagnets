import style from './education.module.css'
export default function Education() {
    const degrees = [
      
        {
            icon:'./education/muit.png',
            degree: "Bachelor of Computer Science (B.Tech) ",
            institution: "MUIT, Noida",
            duration: "Sept 2023 - Aug 2027",
            grade: "90.2%",
            highlights: [
                "Explored Data Structures, Algorithms, Web Development, and DBMS",
                "Worked on projects applying theoretical concepts to real-world problems"
            ]
        },
        {
                 icon:'./education/nilgiri.png',
            degree: "CBSE (Class XII)",
            institution: "Nilgiri Hills Public School",
            duration: "Apr 2021 - Mar 2022",
            grade: "80.8%",
            subjects: "Subject: Physics, Chemistry, Mathematics with Computer Science"
        },
        {

                 icon:'./education/sahil.png',
            degree: "CBSE (Class X)",
            institution: "Sahil Public School",
            duration: "Apr 2019 - Mar 2020",
            grade: "87.8%",
            subjects: "Subject: Science with Computer Applications"
        }
    ]

    return (<>
        <section className={style.education} id='education'>
            <h1 className='fs-h2'>Education</h1>
            <h2 className='fs-p'>My education has been a journey of learning and development. Here are the details of my academic background</h2>
            <div className={style.institution}>
                {degrees.map((obj,i) => {
                    return (
                        <div key={i} className={style.instbox}>

                            <div className={style.college_name}>
                              <img src={obj.icon} alt="" className={style.cimg}/>
                                <div className={style.name}>
                                    <div className='fs-h3'>{obj.degree}</div>
                                    <div className='fs-h4'>{obj.institution}</div>
                                    <div className='fs-p'>{obj.duration}</div>
                                </div>
                            </div>

                            <h1 className='fs-p'>Grade: {obj.grade}</h1>

                            <div className={`${style.sub } fs-p`}> {obj.subjects}</div>
                            <div className={`${style.cdesc} fs-p`}> {obj.highlights}</div>
                        </div>
                    )
                })}
            </div>
        </section>
    </>)
}