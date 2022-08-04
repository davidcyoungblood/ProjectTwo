import Avatar from '@mui/material/Avatar';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import { Link } from 'react-router-dom';

export const ThunderstormIcon = () => {
    return (
        <Link style={{ textDecoration: 'none' }} to='/'>
            <Avatar sx={{ m: 1, bgcolor: '#4A738C' }}>
                <ThunderstormTwoToneIcon />
            </Avatar>
        </Link>
    );
}