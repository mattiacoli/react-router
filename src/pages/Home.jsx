export default function Home() {
  return (
    <>

      <div className="jumbotron">
        <div className="mb-3">
          <div
            className="h-100 p-5 text-black bg-light">

            <h2>Welcome in our Blog</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellendus omnis dolor consequuntur hic veniam enim, perferendis veritatis, sint libero quo, asperiores inventore quas maxime. Dicta quasi alias assumenda nostrum!
            </p>
          </div>
        </div>
      </div>

      <main>
        <div className="container">

          <div className="row row-cols-lg-8  row-cols-md-4 row-cols-sm-1 mb-4" >


            <div className="col">

              <div className="card">
                <img className="card-img-top" src="https://picsum.photos/seed/picsum/120/80" alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title"> Title 1</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, architecto!</p>
                </div>
              </div>
            </div>

            <div className="col">

              <div className="card">
                <img className="card-img-top" src="https://picsum.photos/seed/picsum/120/80" alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">Title2</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, architecto!</p>
                </div>
              </div>
            </div>

            <div className="col">

              <div className="card">
                <img className="card-img-top" src="https://picsum.photos/seed/picsum/120/80" alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">Title3</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, architecto!</p>
                </div>
              </div>
            </div>

            <div className="col">

              <div className="card">
                <img className="card-img-top" src="https://picsum.photos/seed/picsum/120/80" alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">Title4</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, architecto!</p>
                </div>
              </div>
            </div>


          </div>

        </div>

      </main>

    </>
  )
}