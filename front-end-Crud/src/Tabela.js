function Tabela({ vetor, selecionar }) {
    return (
        <><table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {vetor.map((obj, indice) => (
                    <tr key={indice}>
                        <td>{indice + 1}</td>
                        <td>{obj.nome}</td>
                        <td>{obj.marca}</td>
                        <td><button onClick={() => { selecionar(indice); }} className="btn btn-success">Selecionar</button></td>
                    </tr>
                ))}
            </tbody>
            <br />
            <br />
            <br />


        </table>
        
        <div className="d-flex justify-content-center">
            <a id="leo" className='btn btn-primary' href="https://leonardocapristo.github.io/Projeto-Interdisciplinar/funcionario.html">Voltar para página inicial</a>
        </div>
        </>
    )
}

export default Tabela;