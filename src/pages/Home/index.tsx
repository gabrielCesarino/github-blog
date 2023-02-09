import { Container, Header, ProfileDetails, NameContainer, ProfileInfo } from './styles';
import avatarImg from '../../assets/avatar.png';
import githubIcon from '../../assets/github.svg';
import socialIcon from '../../assets/social.svg';
import buildIcon from '../../assets/build.svg';
import redirectIcon from '../../assets/redirect.svg';

export function Home() {
	return (
		<Container>
			<Header>
				<img src={avatarImg} alt="" />
				<ProfileDetails>
					<NameContainer>
						<strong>Cameron Willianson</strong>
						<a href='#'>
							Github
							<img src={redirectIcon} alt="" />
						</a>
						
					</NameContainer>
					<p>
						Tristique volutpat pulvinar vel massa, pellentesque egestas. 
						Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
					</p>
					<ProfileInfo>
						<span>
							<img src={githubIcon} alt="" />
							cameronwll
						</span>
						<span>
							<img src={socialIcon} alt="" />
							Rocketseat
						</span>
						<span>
							<img src={buildIcon} alt="" />
							32 seguidores
						</span>
					</ProfileInfo>
				</ProfileDetails>
			</Header>
		</Container>
	);
}