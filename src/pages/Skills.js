import React from 'react'
import SkillCard from '../components/SkillCard';

function Skills() {

    const skills = [
        {
            id:1,
            name: "HTML",
            description: "Web sayfalarının iskeletini oluşturur.",
            level:4
        },
        {
            id:2,
            name: "CSS",
            description: "Web sitelerinin görünümünü ve tasarımını sağlar.",
            level:4
        },
        {
            id:3,
            name: "JavaScript",
            description: "Web sayfalarına etkileşim kazandırır.",
            level:3
        },
        {
            id:4,
            name: "React",
            description: "Bileşen tabanlı modern kullanıcı arayüzleri oluşturur.",
            level:2
        }
        
    ];


  return (
    <div>
        <h1 className='mb-4'>Yetenekler</h1>
            
        <div className='row'>
            {skills.map((skill) => (
                <div className='col-md-4 mb-3' key={skill.id}>
                    <SkillCard 
                        name={skill.name}
                        description={skill.description}
                        level={skill.level}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills