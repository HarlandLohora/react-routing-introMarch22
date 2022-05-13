import React from 'react'

import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ProjectDetail = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [project, setProject] = useState({})
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(id)

    const place = searchParams.get("");
    const destType = searchParams.get("destType");

    useEffect(() => {
        console.log('place', place)
        console.log('destType', destType);
        //Obtener el detalle del projecto
        // const detalle = props.projectsData.filter()
        // console.log(detalle)
        const todos = props.projectsData
        //Para filtrar datos/ver vista a detalle usamos
        const detalle = todos.filter((projecto) => projecto._id === id)
        console.log(detalle[0])
        if (detalle[0]) {
            console.log("Muestra los datos")
            setProject(detalle[0])
        } else {
            console.log("Redirect")
            return navigate("/error")
        }
    }, [id])

    return (
        <div>
            ProjectDetail
            <div className="project">
                <h3>{project.name}</h3>
                <p>{project.technologies}</p>
            </div>
        </div>
    )
}

export default ProjectDetail