import { Box, Carousel, Image } from 'grommet';

export default function MainCarouselComponent() {

    return (
        <Box height="43.6vw" width="100vw" overflow="hidden">
            <Carousel fill>
                <Image fit="cover" src="Images/Background1.png" />
                <Image fit="contain" src="Images/Background2.png" />
            </Carousel>
        </Box>
    )
}