interface IComponent {
    createdByName?: string,
    createdDate?: string,
    fileName?: string,
    type?: string
}

export function Card(metadata: IComponent) {
    return (
        <div className="bg-white drop-shadow-2xl p-2 w-1/4 rounded-2xl">
            <ul className="text-black">
                <li>Criado por: {metadata.createdByName}</li>
                <li>Data de criação: {metadata.createdDate}</li>
                <li>Nome do arquivo: {metadata.fileName}</li>
                <li>Tipo (Pasta): {metadata.type}</li>
            </ul>
        </div>
    )
}