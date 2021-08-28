import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

const repository = {
    name: 'unform',
    description: 'Descrição',
    link: 'http://localhost:8080/'
}

export function RepositoryList(){
    return (
        <section className="repositoy-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}