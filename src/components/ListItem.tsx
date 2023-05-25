import { displayPartsToString } from "typescript"

interface ListItemT {
    todoId: number
    title: string
    checked: boolean
    handleDelete: any
    handleCheckedElement: any
}

const ListItem = ({todoId, title, checked, handleDelete, handleCheckedElement}: ListItemT) => {
    const listItemStyles = {
        display: 'flex', 
        flexFlow: 'row',
        alignItems: 'center'
    }
    const buttonStyles = {
        padding: '10px', 
        background: 'grey', 
        color: 'white',
        border: '1px solid black',
        borderRadious: '20px',
        height: 'fit-content'
    }
    
    return (
        <li style={listItemStyles}>
            <button style={buttonStyles} onClick={() => handleCheckedElement(todoId)}>{checked ? 'un check' : 'check'}</button>
            <p>{title}</p>
            <button 
                onClick={() => handleDelete(todoId)}
                style={buttonStyles}
                >X
            </button>
        </li>
    )
}

export default ListItem