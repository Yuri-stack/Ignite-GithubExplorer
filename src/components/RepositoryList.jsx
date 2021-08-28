import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

export function RepositoryList(){
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        // Fetch: verificar documentação
        fetch('https://api.github.com/users/yuri-stack/repos')
            .then(resp => resp.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repositoy-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    )
}