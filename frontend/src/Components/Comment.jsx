import { Avatar, Divider, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { PostFooter } from "./PostFooter"




export const Comment=({comment,createdAt,likes,username,profilePicURL})=>{

    const [liked,setLiked]=useState(false)

    return(
    <>
    <Flex gap={4} py={2} my={2} w={'full'}>

        <Avatar src={profilePicURL} size={'sm'}/>

        <Flex gap={1} w={'full'} flexDirection={'column'}>

            <Flex  w={'full'} justify={'space-between'} align={'center'}>

                <Text fontSize={'sm'} fontWeight={'bold'}>{username}</Text>

                <Flex gap={2} align={'center'}>
                    <Text fontSize={'sm'} color={'gray.light'}>{createdAt}</Text>
                    <BsThreeDotsVertical/>



                </Flex>
            </Flex>


            <Text>{comment}</Text>
            <PostFooter liked={liked} setLiked={setLiked} />
            <Text fontSize={'sm'} color={'gray.light'}>
                {likes +(liked? 1:0)} likes
            </Text>

        </Flex>

    </Flex>
    
    
    <Divider/>
    </>


    )
}