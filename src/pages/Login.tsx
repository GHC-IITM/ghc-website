import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { Form, Formik } from "formik";
import { useMutation } from "react-query";
import login from '../utils/mutations/login';

export default function SimpleCard() {

    const mutation = useMutation(login);

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={5} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'3xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Text color={'red.400'}>features</Text> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        onSubmit={async (values, { setErrors }) => {
                            const response = await mutation.mutateAsync(values);
                            console.log(response)
                        }}
                    >
                        {({ isSubmitting, handleChange, values }) => (
                            <Form>
                                <Stack spacing={4}>
                                    <FormControl id="email">
                                        <FormLabel>Email address</FormLabel>
                                        <Input focusBorderColor='red.400' type="email" onChange={handleChange} value={values.email} />
                                    </FormControl>
                                    <FormControl id="password">
                                        <FormLabel>Password</FormLabel>
                                        <Input focusBorderColor='red.400' type="password" onChange={handleChange} value={values.password} />
                                    </FormControl>
                                    <Stack spacing={10}>
                                        <Stack
                                            direction={{ base: 'column', sm: 'row' }}
                                            align={'start'}
                                            justify={'space-between'}>
                                            <Checkbox colorScheme='red'>Remember me</Checkbox>
                                            <Text color={'red.400'}>Terms & Condn </Text>
                                        </Stack>
                                        <Button
                                            type="submit"
                                            fontFamily={'heading'}
                                            w={'full'}
                                            bgGradient="linear(to-r, red.400,pink.400)"
                                            color={'white'}
                                            _hover={{
                                                bgGradient: 'linear(to-r, red.400,pink.400)',
                                                boxShadow: 'xl',
                                            }}
                                            isLoading={isSubmitting}
                                        >
                                            Sign in
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Form>

                        )}
                    </Formik>
                </Box>
            </Stack>
        </Flex>
    )
}