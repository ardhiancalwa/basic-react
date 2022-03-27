function Employee(props) {
    return (
        <div className="row">
            {/* bagian gambar */}
            <div className="col-3 mb-3">
                {/* load image */}
                <img className="img img-rounded"
                    src={props.image} alt="Gambar"
                    style={{ width: `20rem` }} />
            </div>

            {/* bagian kedua */}
            <div className="col-4" align="left">
                <h6 className="text-info">Nama</h6>
                <h5>{props.name}</h5>

                <h6 className="text-info">Tgl. Lahir</h6>
                <h5>{props.birthday}</h5>

                <h6 className="text-info">Gender</h6>
                <h5>{props.gender}</h5>
            </div>

            {/* bagian ketiga */}
            <div className="col-4" align="left">
                <h6 className="text-info">Email</h6>
                <h5>{props.email}</h5>

                <h6 className="text-info">Telepon</h6>
                <h5>{props.contact}</h5>

                <h6 className="text-info">Devisi</h6>
                <h5>{props.devision}</h5>
            </div>
        </div>
    )
}
export default Employee