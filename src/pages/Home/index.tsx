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

interface RepoProps {
	body: string,
	id: number,
	title: string,
	created_at: Date,
}

export function Home() {
	const [user, setUser] = useState<UserProps>();
	const [repos, setRepos] = useState<RepoProps[]>([]);
	const username = 'gabrielcesarino';

	async function fetchRepos(){
		const response = await api.get(`/search/issues?q=repo:${username}/github-blog-posts`);
		const data = await response.data;
		
		setRepos(data.items);
	}

	useEffect(() => {
		api.get(`/users/${username}`)
			.then(response => setUser(response.data));

		fetchRepos();
	}, []);
	
	
	console.log(repos);

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
					<small>{repos.length} publicações</small>
				</PageTitle>
				<SearchForm>
					<input type="text" placeholder='Buscar conteúdo'/>
				</SearchForm>
				<PostsList>
					{repos.map((repo) => {
						return (
							<PostItem repo={repo} key={repo.id}/>
						);
					})}
				</PostsList>
			</Content>
		</Container>
	);
}