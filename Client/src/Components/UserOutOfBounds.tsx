const UserOutOfBounds = () => {
    return(
        <div style={{position:'relative', zIndex:1000, 
            padding:8, background:'rgba(255,255,255,0.9)',
            height: 300, width: 300, borderRadius: 20}}>
                You are outside the allowed map bounds
        </div>
    )
}

export default UserOutOfBounds;