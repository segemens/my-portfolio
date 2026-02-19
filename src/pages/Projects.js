import React from 'react'
import ProjectCard from '../components/ProjectCard';

import LingoCards from "../assets/lingoCards.png";
import Pastalante from "../assets/pastalanteExp.png";
import ToDoApp from "../assets/todoApp.png";
import WheaterWebSite from "../assets/wheaterWebSite.png";

const projects = [
    {
        id: 1,
        title: "To-Do Uygulaması",
        description: "Python'da temel kütüphaneleri kullanarak oluşturduğum To-Do uygulaması.",
        technologies: ["python", "tkinter"],
        githubLink: "",
        image: ToDoApp
    },
    {
        id: 2,
        title: "Hava Durumu Sitesi",
        description: "API kullanarak hava durumuna göre şarkı öneren site.",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        githubLink: "",
        image: WheaterWebSite
    },
    {
        id: 3,
        title: "QR'la Çalışan Menü",
        description: "Yerel bir işletmeciye özel yaptığım QR menü.",
        technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
        githubLink: "",
        image: Pastalante
    },
    {
        id: 4,
        title: "İngilizce Lingo Kartlar",
        description: "İngilizce geliştirmek için üretilen lingo cards sitesi.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
        githubLink: "",
        image: LingoCards
    }
];


function Projects() {
  return (
    <div>
        <h1 className='mb-4'>Projeler</h1>
        <div className='row'>
            {projects.map((project) => (
                <div className="col-md-4 mb-4" key={project.id}>
                    <ProjectCard 
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        githubLink={project.githubLink}
                        image={project.image}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects