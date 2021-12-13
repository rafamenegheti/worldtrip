import { Flex, Box, Text, Tooltip, Icon} from '@chakra-ui/react'
import { info } from 'console'
import { FiInfo } from 'react-icons/fi'


interface DestinyTipsProps {
    number1: string,
    title1: string,
    number2: string;
    title2: string,
    number3: string,
    title3: string,
    infoMessage: string,
    mainMessage: string
}

export function DestinyTips({ mainMessage, number1, number2, number3, title1, title2, title3, infoMessage }: DestinyTipsProps) {


    return(

        <Flex justify="space-between" gap="5" direction={["column", "row"]}>
          <Text w={["100%", "60%"]}>
              {mainMessage}
          </Text>
        <Flex justify="space-evenly" align="center" w={["100%", "40%"]}>
        <Box textAlign="center">
          <Text fontWeight="600" fontSize="24px" color="yellow.400">
            {number1}
          </Text>
          <Text fontWeight="400">{title1}</Text>
        </Box>
        <Box textAlign="center">
          <Text fontWeight="600" fontSize="24px" color="yellow.400">
          {number2}
          </Text>
          <Text fontWeight="400">{title2}</Text>
        </Box>
        <Box textAlign="center">
          <Text fontWeight="600" fontSize="24px" color="yellow.400">
          {number3}
          </Text>

          <Text
            display="inline-flex"
            mr="2px"
            alignItems="center"
            fontWeight="400"
          >
            {title3}
          </Text>
          <Tooltip label={infoMessage}>
            <span>
              <Icon transform="translateY(3px)" as={FiInfo} />
            </span>
          </Tooltip>
        </Box>
      </Flex>
      </Flex>

      
    )
}