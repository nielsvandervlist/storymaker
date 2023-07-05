export default function Container({children, small}){
    return <div className={`f-container ${small ? 'f-container--small' : ''}`}>
        <div className={'f-container__content'}>
            {children}
        </div>
    </div>
}
