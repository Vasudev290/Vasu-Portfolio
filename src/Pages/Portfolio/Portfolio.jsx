import React, { useEffect, useState } from 'react'
import { FaRegEye } from 'react-icons/fa';


const json = [
    {
        "id": 1,
        "title": "Tiger Gym",
        "category": "Frontend",
        "image": "public/images/project-1.png",
        "imageUrl": "https://tigerfitness.vercel.app/"
    },
    {
        "id": 2,
        "title": "Fresh Organic",
        "category": "Frontend",
        "image": "public/images/project-2.png",
        "imageUrl": "https://vd-organic-grocery.vercel.app/"
    },
    {
        "id": 3,
        "title": "Travles",
        "category": "Frontend",
        "image": "public/images/project-3.png",
        "imageUrl": "https://vd-travelsweb.vercel.app/"
    },
    {
        "id": 4,
        "title": "Stomy App",
        "category": "Frontend",
        "image": "public/images/project-4.png",
        "imageUrl": "https://stromyapp.vercel.app/"
    },
    {
        "id": 5,
        "title": "TODO App.",
        "category": "Frontend",
        "image": "public/images/project-5.png",
        "imageUrl": "https://todoapp-one-henna.vercel.app/"
    },
    {
        "id": 6,
        "title": "Timepiece",
        "category": "Frontend",
        "image": "public/images/project-6.png",
        "imageUrl": "https://timepiece-iota.vercel.app/"
    },
    {
        "id": 7,
        "title": "CRUD Operation",
        "category": "Frontend + React",
        "image": "public/images/project-7.png",
        "imageUrl": "https://crud-app-ashen.vercel.app/"
    },
    {
        "id": 8,
        "title": "TIC TOC TOE",
        "category": "Frontend",
        "image": "public/images/project-8.png",
        "imageUrl": "https://tic-tac-toe-ivory-delta.vercel.app/"
    },
    {
        "id": 9,
        "title": "CARA E-com ",
        "category": "Frontend",
        "image": "public/images/project-9.png",
        "imageUrl": "https://cara-e-com-website.vercel.app/"
    },
    {
        "id": 10,
        "title": ".EATFOODS ",
        "category": "Frontend + React",
        "image": "public/images/project-10.png",
        "imageUrl": "https://eatfoods.vercel.app/"
    }
  ]

const Portfolio = () => {


    const Obj = JSON.stringify(json);
    console.log("data", Obj)
    const [projects, setprojects] = useState(Obj);
    const [filteredProjects, setFilteredProjects] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        const url = 'public/projects.json';
        console.log("profilo", url)
        fetch(url).then(res => res.json()).then(data => {
            // setprojects(data)
            console.log(data);

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
                        filteredProjects.map(project => (
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