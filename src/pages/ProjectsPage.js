
import { useState, useEffect } from "react";
// import projectsData from "./../projects-data.json";
import { Link } from "react-router-dom"

function ProjectsPage(props) {
    const [projects, setProjects] = useState([]);
    console.log(props)
    // This effect will run only once on initial render.
    // To do it we set the dependency array empty [].
    useEffect(() => {
        //axios o fetch
        setProjects(props.projectsData);
    }, [props.projectsData]);

    return (
        <div>
            <h2>Projects</h2>
            {projects.map((project) => {
                console.log(project)
                return (
                    <Link to={`/projects/${project._id}`} key={project.id}>
                        <div className="project">
                            <h3>{project.name}</h3>
                            <p>{project.technologies}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default ProjectsPage;