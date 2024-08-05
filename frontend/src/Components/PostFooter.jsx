import { Flex } from "@chakra-ui/react"
import { CiHeart } from "react-icons/ci"
import { FaRegComment, FaHeart, FaRegShareSquare, FaShare, FaRegHeart } from "react-icons/fa"
import { IoRepeat } from "react-icons/io5";
import { FaRepeat } from "react-icons/fa6";

export const PostFooter=({liked,setLiked})=>{
    return(
        <Flex my={2} flex={1} onClick={(e)=> e.preventDefault()}  w={'full'} gap={4} px={2} align={'center'} > 

        {liked? <FaHeart fill="red" size={'1.4em'} onClick={()=>setLiked(!liked)} cursor={'pointer'} /> :

<FaRegHeart  size={'1.4em'} onClick={()=>setLiked(!liked)} cursor={'pointer'}/>
        }
            
            

            <FaRegComment size={'1.3em'} cursor={'pointer'} />
            <FaRepeat  size={'1.3em'} cursor={'pointer'}/>
            <FaShare size={'1.3em'}cursor={'pointer'} />
        </Flex>
    )
}


