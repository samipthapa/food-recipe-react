import React from "react";
import "./ButtonComponent.css";

interface Props {
    text: string;
}

const Button: React.FC<Props> = ({ text }) => {
    return (
        <div className="button">
            <p id="button-text">{text}</p>
        </div>
    )
};

export default Button;

// import React from 'react';
// import { Button } from "@mui/material";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import "./ButtonComponent.css";

// interface Props {
//     text: string;
// }

// const ButtonComponent: React.FC<Props> = ({ text }) => {
//     return (
//         <div className='button'>
//             <Button
//                 variant="contained"
//                 size='large'
//                 endIcon={<ArrowForwardIcon />}
//                 color="success"
//             >
//                 {text}
//             </Button>
//         </div>
//     )
// }

// export default ButtonComponent;