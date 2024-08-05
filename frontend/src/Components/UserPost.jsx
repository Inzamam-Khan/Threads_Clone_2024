import { Avatar, Box, Flex,Image,Text, Link, } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import userLogo from '../../public/userLogo.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import post1 from '../../public/post1.png'
import verifiedIcon from '../../public/verifiedIcon.png'
import { PostFooter } from "./PostFooter";
import { useState } from "react";
export const UserPost=()=>{
    const [liked,setLiked]=useState(false)
    return(

        

            <Flex gap={3} mb={4} py={5} border={'2px solid blue'} >

                <Flex flexDirection={'column'} align={'center'} justify={'center'} border={'2px solid red'}>

                <Link as ={RouterLink} to={'/haxer/post/1'}  >
                    <Avatar src={userLogo} border={'1px solid white'} borderRadius={'full'} name={'userpostLogo'} size={'md'}/>
                  </Link>
                    <Box w='1px' h={'full'} bg={'gray.light'} my={2}></Box>
                  
                    <Box position={'relative'} border={'2px solid white'}>

                        <Avatar size={'xs'} position={'absolute'} name={''} src={'https://bit.ly/dan-abramov'}  top={'0px'} left={'0px'} padding={'2px'} border={'2px solid red'}/>
                        <Avatar size={'xs'} position={'absolute'}  name={''} src={'https://bit.ly/dan-abramov'}  bottom={'-20px'} left={'0%'} padding={'2px'} border={'2px solid blue'}/>
                        <Avatar size={'xs'} position={'absolute'} name={''} src={'https://bit.ly/dan-abramov'}  bottom={'0px'} right={'0px'} padding={'2px'}border={'2px solid green'}/>
                        
                    </Box>
                </Flex>


                <Flex flex={1} flexDirection={'column'} gap={2} border={'2px solid white'}>
                    
                    {/* header part */}
                    <Flex justify={'space-between'} w={'full'}>

                        <Flex w={'full'} align={'center'}>

                        <Link as ={RouterLink} to={'/haxer/post/1'}  >
                            <Text fontSize={'sm'} fontWeight={'bold'}>hazer</Text>
                            </Link>
                            {/* <Image src={''} w={4} h={4} ml={1}/> */}
                            <Box w={'1.5em'} h={'auto'} borderRadius={'full'} padding={'1px'} ml={2} >
                            {/* <FaCheck fill="blue" /> */}
                            <Image src={verifiedIcon} />
                            </Box>
                        </Flex>

                        <Flex gap={4} align={'center'}>
                            <Text fontSize={'sm'} color={'gray.light'}>1d</Text>
                            <BsThreeDotsVertical/>
                        </Flex>

                    </Flex>



                    <Text fontSize={'sm'}>this is first post</Text>
                    {/* image part */}

                    <Box border={'1px solid'} borderColor={'gray.light'}  borderRadius={6} overflow={'hidden'}>
                        <Image src={post1} w={'full'} objectFit={'cover'} border={'1em solid gray'}/>
                    </Box>



                    <Flex>
                    <PostFooter liked={liked} setLiked={setLiked}/>
                    </Flex>

                    <Flex gap={2} align={'center'}>

                        <Text color={'gray.light'} fontSize={'sm'}>123 likes</Text>
                        <Box w={2} h={2} bg={'gray.light'} borderRadius={"full"}></Box>
                        <Text color={'gray.light'} fontSize={'sm'}>123 replies</Text>

                    </Flex>

                    

                </Flex>




            </Flex>
        



    )
}