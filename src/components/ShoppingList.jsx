import "../styles/listStyles.css"

export const ShoppingList = props => {

    const { children } = props

    return (
        <div class="listContainer">
            <h2>Lista de Compras - Q3</h2>
            <ul>
                { children }
            </ul>
        </div>
    )
}
