import { Avatar, Flex, Text, Image,Button, Box, Divider, } from "@chakra-ui/react";
import userLogo from '../../public/userLogo.png'
import verifiedIcon from '../../public/verifiedIcon.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import post1 from '../../public/post1.png'
import { PostFooter } from "../Components/PostFooter";
import { Comment } from "../Components/Comment";
import { useState } from "react";
export function PostPage() {
    const [liked,setLiked]=useState(false)
    return (<>

        <Flex>

            {/* first box left side*/}
            <Flex w={'full'} align={'center'} gap={3} >
                <Avatar src={userLogo} size={'md'} name={''} border={'1px solid gray'} />
                <Flex>
                    <Text fontSize={'sm'} fontWeight={'bold'}>
                        userNmae
                    </Text>
                    <Image src={verifiedIcon} w={'1.3em'} h={'full'} ml={2} />
                </Flex>
            </Flex>


            {/* second box right side */}
            <Flex gap={4} align={'center'}>
                <Text fontSize={'sm'} color={'gray.light'}>1d</Text>
                <BsThreeDotsVertical />
            </Flex>

        </Flex>
        <Text my={3}>let's talk about threads</Text>

        <Box border={'1px solid'} borderColor={'gray.light'} borderRadius={6} overflow={'hidden'}>
            <Image src={post1} w={'full'} objectFit={'cover'}  />
        </Box>

        <Flex gap={3} my={3}>
            <PostFooter liked={liked}  setLiked={setLiked}/>
        </Flex>



        <Flex gap={2} align={'center'}>

            <Text color={'gray.light'} fontSize={'sm'}>{345 +(liked? 1:0)} likes</Text>
            <Box w={2} h={2} bg={'gray.light'} borderRadius={"full"}></Box>
            <Text color={'gray.light'} fontSize={'sm'}>123 replies</Text>

        </Flex>

        <Divider  my={4}/>

                {/* get the app */}
        <Flex justify={'space-between'}>

            <Flex gap={2} align={'center'}>
                <Text fontSize={'2xl'}>👋</Text>
                <Text color={'gray.light'}>
                    Get the app to like,reply and post.
                </Text>
            </Flex>

            <Button>Get</Button>
        </Flex>

        <Divider my={4}/>



                {/* comment section */}
                <Comment comment={'working Hard'} createdAt={'1d'} likes={234} username={'Hazer56'} profilePicURL={'https://bit.ly/kent-c-dodds'}/>
                <Comment comment={'working Hard'} createdAt={'1d'} likes={234} username={'Hazer56'} profilePicURL={'https://bit.ly/kent-c-dodds'}/>
                <Comment comment={'working Hard'} createdAt={'1d'} likes={234} username={'Hazer56'} profilePicURL={'https://bit.ly/kent-c-dodds'}/>
                <Comment comment={'working Hard'} createdAt={'1d'} likes={234} username={'Hazer56'} profilePicURL={'https://bit.ly/kent-c-dodds'}/>
                <Comment comment={'working Hard'} createdAt={'1d'} likes={234} username={'Hazer56'} profilePicURL={'https://bit.ly/kent-c-dodds'}/>
                <Comment comment={'working Hard'} createdAt={'1d'} likes={234} username={'Hazer56'} profilePicURL={'https://bit.ly/kent-c-dodds'}/>
                <Comment comment={'working Hard'} createdAt={'1d'} likes={234} username={'Hazer56'} profilePicURL={'https://bit.ly/kent-c-dodds'}/>
                


    </>)
}