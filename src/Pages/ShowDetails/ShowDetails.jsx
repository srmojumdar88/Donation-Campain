import Swal from 'sweetalert2'

const ShowDetails = ({ findedData }) => {

    const { id, img, category_name, title, description, text_color, bg_color, btn_bg,price } = findedData;


    const clickHandle = () => {

        const addToLocalstorage = [];

        const dataOfLocalStorage = JSON.parse(localStorage.getItem("donation"))

        if (!dataOfLocalStorage) {
            addToLocalstorage.push(findedData)
            localStorage.setItem("donation", JSON.stringify(addToLocalstorage))

            Swal.fire({
                position: 'middle-center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {

            const isExist = dataOfLocalStorage?.find(item => item.id == id)

            if (isExist) {
                return Swal.fire('Alrady Exist')
            }

            addToLocalstorage.push(...dataOfLocalStorage, findedData)
            localStorage.setItem("donation", JSON.stringify(addToLocalstorage))

            Swal.fire({
                position: 'middle-center',
                icon: 'success',
                title: 'Your Donation has been saved',
                showConfirmButton: false,
                timer: 1500
            })

        }

    }


    const cardStyle = {
        btnBg: {
            backgroundColor: `${text_color}`,
            color: `${bg_color }`
        },

    }

    return (
        <div>
            <div className="mt-10 p-5 flex flex-col rounded-xl" >
               
                <div className="relative">
                    <img
                        src={img}
                        alt="img-blur-shadow"
                        className="h-[10rem] md:h-[35rem] w-full"
                    />

                    <div className="absolute bottom-0 mix-blend-multiply bg-red-400 w-full h-20">
                    </div>
                    <button
                        onClick={clickHandle}
                        className="absolute bottom-5 left-5 rounded-lg py-2 px-4 text-center text-sm font-bold  text-white"
                        style={cardStyle.btnBg}
                    >
                        Donate {price}
                    </button>
                </div>
              
                <div>
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        {description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;