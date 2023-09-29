const Banner = () => {

    return (
        <div >
            <div className="flex h-[60vh] justify-center items-center flex-col">
                <div className="w-full h-full bg-[url('https://i.ibb.co/2vxhz4f/fc1f79e18cdc1a12320b9b10ec3e253d.jpg')] bg-cover bg-center opacity-10  relative">
                    <div className="w-full h-full flex  justify-center items-center backdrop-brightness-80 ">
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center p-10 absolute">
                    <h1 className="mb-5 text-3xl font-bold">I Grow By Helping People In Need</h1>

                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered text-black" />
                            <button className="btn btn-secondary">
                                Search...
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className="hero relative" style={{ backgroundImage: 'url(https://i.ibb.co/2vxhz4f/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)' }}>

                <div className="hero-overlay bg-opacity-60"></div>

                <div className="hero-content text-center text-neutral-content">

                </div>
            </div> */}

        </div>
    );
};

export default Banner;
