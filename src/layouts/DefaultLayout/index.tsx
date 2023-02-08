import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Content, DefaultLayoutContainer } from './styles';

export function DefaultLayout() {
	return(
		<DefaultLayoutContainer>
			<Header />
			<Content>
				<Outlet />
			</Content>
		</DefaultLayoutContainer>
	);
}