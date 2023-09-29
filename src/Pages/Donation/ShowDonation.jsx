import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShowDonation = ({ donation }) => {

    const { id, img, category_name, title, description, text_color, bg_color, btn_bg,price } = donation;



    const cardStyle = {
        textColor: {
            color: `${text_color}`,
        },
        bgColor: {
            backgroundColor: `${bg_color}`,
        },
        btnBgColor:{
            backgroundColor: `${text_color}`,
            color: `${bg_color}`
        }

    }

    return (
        <div>
            <div className="md:max-h-[14rem] w-full flex flex-col md:flex-row rounded-xl shadow-md" style={cardStyle.bgColor}>
                <div className="md:w-2/5">
                    <img
                        src={img}
                        className="h-20  md:h-full w-full  rounded-lg md:rounded-r-none object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-2 md:mb-4 font-normal  uppercase text-pink-500" style={cardStyle.textColor}>
                        {category_name}
                    </h6>
                    <div className='flex md:flex-col justify-between items-center md:items-start'>
                        <h4 className="mb-2 font-light 
                        text-xl md:text-2xl
                    text-blue-gray-900">
                            {title}
                        </h4>
                        <p className="mb-2 lg:mb-4 font-semibold text-sm text-gray-700" style={cardStyle.textColor}>
                            {price}
                        </p>
                    </div>

                    <Link to={`/donation/${id}`}>
                        <button
                            className="rounded-lg py-2 px-4 text-center text-sm font-bold active:bg-purple-400"
                            style={cardStyle.btnBgColor}
                        >
                            See Details
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

ShowDonation.propTypes = {
    donation: PropTypes.object.isRequired
}
export default ShowDonation;