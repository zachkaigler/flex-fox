function FoxCard({ img, num }) {
    return (
        <div className="card">
            <img src={img} alt="fox"/>
            <div className="num">{num}</div>
        </div>
    )
}

export default FoxCard