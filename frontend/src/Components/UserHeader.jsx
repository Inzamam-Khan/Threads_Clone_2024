import { Avatar, Box, Flex, Link, MenuButton,Menu, MenuItem, MenuList, Portal, Text, VStack, useToast } from "@chakra-ui/react"
import {Link as RouterLink} from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";

export const UserHeader=()=>{
    const toast=useToast()

    const copyUrl=()=>{
        const currentUrl=window.location.href;
        navigator.clipboard.writeText(currentUrl).then(()=>{
            toast({
                title: 'Link Copied.',
                // description: "We've created your account for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
        })
    }
    return(
        <VStack gap={4} align={'center'}  >
            

            {/* first box */}
            <Flex justify={'space-between'} w={'full'}>

                {/* left side */}
                <Box>
                    <Text fontSize={'2xl'} fontWeight={'bold'}>fullNmae</Text>
                    <Flex align={'center'} gap={2}> 
                        <Text fontSize={'sm'}>username</Text>
                        <Text fontSize={'xs'} bg={'gray.dark'} color={'gray.light'} p={1} borderRadius={'full'}>threads.net</Text>
                    </Flex>
                </Box>

                {/* right side i.e avatar */}
                <Box>
                    <Avatar src={''}alt={'userlogo'} name={'userName'}/>
                </Box>
            </Flex>
            
                {/* second box i.e user bio */}
                <Text>here is some text about user </Text>

                <Flex w={'full'} justify={'space-around'}>
                {/* left side ie followingg and followers */}
                <Flex gap={2}>
                    <Text>3.2k followers</Text>
                    <Box w={"1"} h={"1"} borderRadius={'full'}></Box>
                    <Link as={RouterLink} to={''} color={'gray.light'}>instagram.com</Link>

                </Flex>

                {/* right side i.e instagram & more info. logo */}
                <Flex   gap={4}  ml={'auto'}>
                    <Box _hover={{bg:'#1e1e1e'}} borderRadius={'50%'} transition={'.2s ease-in-out'}>
                        <FaInstagram  size={24} cursor={'pointer'}/>
                    </Box>

                    <Box>
                        <Menu>
                            <MenuButton>
                            <CiCircleMore size={24} cursor={'pointer'}/>
                            </MenuButton>

                            <Portal>
                                <MenuList>
                                    <MenuItem onClick={copyUrl}>Copy Link</MenuItem>
                                  
                                </MenuList>
                            </Portal>
                        </Menu>
                    </Box>

                </Flex>

                <Flex>

                </Flex>

                </Flex>


                    {/* third box */}
                <Flex w='full' >

                    <Flex flex={1} borderBottom={'1.5px solid white'} justify={'center'} pb={3} cursor={'pointer'}>
                        <Text fontWeight={'bold'}>
                            Treads
                        </Text>
                    </Flex>
                    <Flex flex={1} borderBottom={'1px solid gray'} color={'gray.light'} justify={'center'} pb={3} cursor={'pointer'}>
                        <Text fontWeight={'bold'}>
                            Replies
                        </Text>
                    </Flex>
                    


                </Flex>





        </VStack>
    )
}