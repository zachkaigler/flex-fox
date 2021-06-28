function FoxCard({ img, num }) {
    return (
        <div className="card">
            <img src={img} alt="fox" style={{width: "300px"}}/>
            <div className="num">{num}</div>
        </div>
    )
}

export default FoxCard