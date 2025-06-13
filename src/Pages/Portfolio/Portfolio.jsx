import { useEffect, useState } from 'react'
import { FaRegEye } from 'react-icons/fa';

const Portfolio = () => {
    const [projects, setprojects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All")

    useEffect(() => {
        const url = '/projects.json';
        fetch(url).then(res => {
            return res.json()
        }).then(data => {
            console.log(data);
            setprojects(data)
            setFilteredProjects(data)
        })
    }, [])

    const handleFilterClick = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredProjects(projects)
        } else {
            const filtered = projects.filter(project => project.category === category)
            setFilteredProjects(filtered)
        }
    }

    const handleImageClick = (url) => {
        console.log('Image clicked:', url); // Debugging line
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <section>
            <header>
                <h2 className='h2 article-title'>Portfolio</h2>
            </header>
            {/* Filter Buttons */}
            <ul className='filter-list'>
                {['All', 'Frontend', 'Frontend + React', 'Full Stack (Frontend + Node)'].map(category => (
                    <li key={category} className='filter-item'>
                        <button onClick={() => handleFilterClick(category)}
                            data-filter-btn
                            className={category === selectedCategory ? 'active' : ""}>{category}</button>
                    </li>
                ))}
            </ul>

            {/* Show Portfolio */}

            <section className='projects'>
                <ul className='project-list'>
                    {
                        filteredProjects.map(project =>
                            (
                            <li key={project.id} className='project-item active'
                                data-fliter-items
                                data-category={project.category}
                            >
                                <a href="#">
                                    <figure className='project-img'>
                                        {<div className='project-item-icon-box'>
                                            <FaRegEye onClick={() => { handleImageClick(project.imageUrl) }} />
                                        </div>}
                                        <img src={project.image} alt={project.title} width="350"
                                        />
                                    </figure>
                                    <h3 className='project-title'>{project.title}</h3>
                                    <p className='project-category'>{project.category}</p>
                                </a>
                            </li>
                        ))
                    }
                </ul>

            </section>
        </section>
    )
}

export default Portfolio