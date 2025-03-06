import React from 'react'
import SkillItem from './SkillItem'

const Skills = () => {
  return (
    <section>
        <header>
            <h2 className='h2 article-title'>Skills</h2>
        </header>
        <div className="skill">
            <h3 className='h3'>Languages</h3> <br />
            <ul className='skills-list content-card'>
                  <SkillItem title="HTML" value={85}/>
                  <SkillItem title="CSS" value={75}/>
                  <SkillItem title="JavaScript" value={75}/>
                  <SkillItem title="Python" value={85}/>
            </ul>
            <br />
            <div className='skill'>
            <h3 className='h3'>Libraries</h3> <br />
            <ul className='skills-list content-card'>
                  <SkillItem title="React.js" value={70}/>
                  <SkillItem title="Redux" value={70}/>
                  <SkillItem title="Redux ToolKit" value={80}/>
                  <SkillItem title="TailWind" value={65}/>
                  <SkillItem title="Bootstrap" value={85}/>
            </ul>
            <br />
            </div>
            <div className='skill'>
            <h3 className='h3'>Frameworks</h3> <br />
            <ul className='skills-list content-card'>
                  <SkillItem title="Node.js" value={65}/>
                  <SkillItem title="Express.js" value={55}/>
            </ul>
            </div>
            <br />
            <div className='skill'>
            <h3 className='h3'>DataBases</h3> <br />
            <ul className='skills-list content-card'>
                  <SkillItem title="MongoDB" value={85}/>
                  <SkillItem title="MySQL" value={75}/>
            </ul>
            </div>
            <br />
            <div className='skill'>
            <h3 className='h3'>Web Dev Tools</h3> <br />
            <ul className='skills-list content-card'>
                  <SkillItem title="VScode" value={85}/>
                  <SkillItem title="Git" value={75}/>
                  <SkillItem title="GitHub" value={75}/>
                  <SkillItem title="Postman" value={85}/>
                  <SkillItem title="Jupyter Notebook" value={70}/>
            </ul>
            </div>
        </div>
        
    </section>
  )
}

export default Skills