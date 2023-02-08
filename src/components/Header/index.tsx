import { HeaderContainer } from './styles';
import coverImg from '../../assets/cover.png';
import logoIcon from '../../assets/logo.svg';

export function Header() {
	return(
		<HeaderContainer cover={coverImg}>
			<img src={logoIcon} title="Github Blog Logo" />
		</HeaderContainer>
	);
}