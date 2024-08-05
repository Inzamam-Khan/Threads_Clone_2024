import { Flex, Image, useColorMode } from "@chakra-ui/react"

import threads_logo_light_mode from '../../public/threads_logo_light_mode.svg'
import threads_logo_dark_mode from '../../public/threads_logo_dark_mode.svg'


export const Header=()=>{
    const {colorMode,toggleColorMode}=useColorMode()

    return(
        <Flex justify="center" mt={6} mb={'12'}>
            <Image src={colorMode === "light"? threads_logo_light_mode : threads_logo_dark_mode } alt={"logo"} cursor={'pointer'} w={6} onClick={toggleColorMode}/>
        </Flex>
    )
}