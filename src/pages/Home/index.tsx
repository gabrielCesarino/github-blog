import { PostItem } from '../../components/PostItem';
import { useEffect, useState } from 'react';

import { 
	Container,
	Header, 
	ProfileDetails, 
	NameContainer, 
	ProfileInfo, 
	Content, 
	PageTitle,
	SearchForm,
	PostsList
} from './styles';
import avatarImg from '../../assets/avatar.png';
import githubIcon from '../../assets/github.svg';
import socialIcon from '../../assets/social.svg';
import buildIcon from '../../assets/build.svg';
import redirectIcon from '../../assets/redirect.svg';
import { api } from '../../api/api';

interface UserProps {
	avatar_url: string,
	bio: string,
	followers: number,
	html_url: string,
	name: string,
	login: string,
}

export function Home() {
	const [user, setUser] = useState<UserProps>();
	const username = 'gabrielcesarino';

	useEffect(() => {
		api.get(`/users/${username}`)
			.then(response => setUser(response.data));
	}, []);

	return (
		<Container>
			<Header>
				<img src={user?.avatar_url} alt="" />
				<ProfileDetails>
					<NameContainer>
						<strong>{user?.name}</strong>
						<a href={user?.html_url}>
							Github
							<img src={redirectIcon} alt="" />
						</a>
						
					</NameContainer>
					<p>
						{user?.bio}
					</p>
					<ProfileInfo>
						<span>
							<img src={githubIcon} alt="" />
							{user?.login}
						</span>
						<span>
							<img src={socialIcon} alt="" />
							Rocketseat
						</span>
						<span>
							<img src={buildIcon} alt="" />
							{user?.followers} seguidores
						</span>
					</ProfileInfo>
				</ProfileDetails>
			</Header>
			<Content>
				<PageTitle>
					<strong>Publicações</strong>
					<small>6 publicações</small>
				</PageTitle>
				<SearchForm>
					<input type="text" placeholder='Buscar conteúdo'/>
				</SearchForm>
				<PostsList>
					<PostItem />
					<PostItem />
					<PostItem />
					<PostItem />
				</PostsList>
			</Content>


		</Container>
	);
}