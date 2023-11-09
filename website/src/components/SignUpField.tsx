import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

type PropTypes = {
    id: string;
    placeholder: string;
    type: React.HTMLInputTypeAttribute;
    label: string;
}

const SignUpField: React.FC<PropTypes> = ({ id, placeholder, type, label }) => {
    return (
        <FormControl isRequired id={id}>
            <FormLabel color={'gray.600'}>{label}</FormLabel>
            <Input
                placeholder={placeholder}
                type={type}
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                    color: 'gray.500',
                }}
            />
        </FormControl>
    )
}

export default SignUpField