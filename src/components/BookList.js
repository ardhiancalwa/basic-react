export default function BookList(props) {

    return (
        <div className="row m-2 p-4" style={{ border: `1px solid lightgrey` }}>
            {/* cover area */}
            <div className="col-lg-3 ">
                <img
                    src={props.cover}
                    width={`200px`}
                    height={`250px`}
                    alt={`Book's Cover`}
                />
            </div>

            {/* labels area */}
            <div className="col-lg-9 ">
                <h6>ISBN: {props.isbn} <br /></h6>
                <h5>Title: {props.title} <br /></h5>
                <h6>Creator: {props.creator} <br /></h6>
                <h6>Publisher: {props.publisher} <br /></h6>
                <h6>
                    Rating:
                    {[...Array(5)].map((item, index) => {
                        if (index < props.rating) {
                            return (
                                <b className="text-warning">
                                    <i className="fa fa-star"></i>
                                </b>
                            )
                        }
                        return (
                            <i className="fa fa-star"></i>
                        )

                    })}
                </h6>
                <h6>
                    Progress:
                    <div class="progress">
                        <div className="progress-bar bg-success"
                            role="prgress"
                            style={{ width: `${props.progress}%` }}
                            aria-valuenow={props.progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {`${props.progress}%`}
                        </div>
                    </div>
                </h6>
            </div>
        </div>
    )
}
