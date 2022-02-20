import { CardMedia } from "@mui/material";

const PreviewWindow = () => {
    return (
        <CardMedia
            sx={{ backgroundColor: 'white', padding: 1 }}
            component="img"
            height="344"
            width="344"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
        />
    )
}

export default PreviewWindow;