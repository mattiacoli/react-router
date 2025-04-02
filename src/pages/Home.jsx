export default function Home() {
  return (
    <>

      <div id="home_jumbo" className="jumbotron border rounded mx-2">
        <div className="mb-3">
          <div
            className="h-100 p-5 text-black">

            <h2>Welcome! </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellendus omnis dolor consequuntur hic veniam enim, perferendis veritatis, sint libero quo, asperiores inventore quas maxime. Dicta quasi alias assumenda nostrum!
            </p>
          </div>
        </div>
      </div>

      <main id="home_main" className="py-4">
        <div className="container">

          <div className="card text-center my-2">

            <div className="card-header">
              <h5 className="card-title">Recent Posts</h5>
            </div>
            <div className="card-body">

              <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim laborum numquam voluptate asperiores officia consequuntur?</p>
              <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/posts" className="btn btn-primary mt-4">Go to Posts</a>
            </div>
          </div>

          <div className="card text-center my-2 mt-3">

            <div className="card-header">
              Featured
            </div>
            <div className="card-body">
              <h5 className="card-title">Chi Siamo</h5>
              <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim laborum numquam voluptate asperiores officia consequuntur?</p>
              <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/about" className="btn btn-primary mt-4">Go to About</a>
            </div>
          </div>
        </div>


      </main>

    </>
  )
}