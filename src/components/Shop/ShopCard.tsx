import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardMedia } from '@mui/material'
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from '@mui/icons-material/Favorite';

export type ShopProps = {
    title: string,
    image: string,
    description: string
}

export default function ShopCard({ title, description, image }: ShopProps) {
    const [isFavorite, setIsFavorite] = React.useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div>
            <Card sx={{
                maxWidth: 500,
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
            >
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title='green iguana'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {title}
                        <IconButton
                            aria-label="add to favorites"
                            onClick={handleFavoriteClick}
                            color={isFavorite ? "secondary" : "default"} // Change color based on state
                        >
                            <FavoriteIcon />
                        </IconButton>
                    </Typography>
                    <Typography variant='body2' color='text.secondary' >{description}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}