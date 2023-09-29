import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const DonationCard = ({donation}) => {

    const { id, img, category_name, title, description, text_color, bg_color, btn_bg } = donation;

    const cardStyle ={
        conainer:{
            color: `${text_color}`,
            backgroundColor: `${bg_color}`
        },
        bg:{
            backgroundColor: `${btn_bg}`,
            width: "min-content"
        }
    }

    return (
        <div>
            <Link to={`/${id}`}>
                <div className="flex flex-col rounded-xl shadow-md" style={cardStyle.conainer}>
                    <div className="relative 
                    h-48 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700" >
                        <img
                            src={img}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <p className="text-lg font-bold px-2  rounded-sm" style={cardStyle.bg}>
                            {category_name}
                        </p>
                        <div className="mb-2 flex items-center justify-between">
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                {title}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>        
    );
};


DonationCard.propTypes ={
    donation: PropTypes.object.isRequired
}
export default DonationCard;