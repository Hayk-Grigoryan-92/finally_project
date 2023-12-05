import './style.scss'

export const AdminPageTittle = ({tittle}) => {

    const handleClick = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }
    return (
        <div className='adminTittle'>
            {tittle}
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}