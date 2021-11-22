import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={headerStyles.title}>
            <h3>
                <span>WebDev</span> News
            </h3>
            <p className={headerStyles.description}>Paragraph</p>
        </div>
    )
}

export default Header
