function JobElement() {
    return (
        <>
            <div className="li-wrapper" style={{ background: 'yellow' }}>
                <li className="li-style">Kerim</li><li class="li-style">Regular</li>
                <li className="li-style">
                    <button className="record-section-btn">Edit</button>
                    <button className="record-section-btn">Delete</button>
                </li>
            </div>
        </>
    );
}

export default JobElement;