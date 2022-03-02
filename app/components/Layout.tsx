import Header from './Header';
import { Stack, Flex } from '@chakra-ui/react';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Stack
			spacing={0}
			bg="background.main"
			w="100vw"
			h="100vh"
			overflowX="hidden"
		>
			<Header />
			<Flex flexGrow={1}>{children}</Flex>
		</Stack>
	);
}
