import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { api } from '../../api/api';
import { Container, PostHeader, Iteractions, PostDetails, Content } from './styles';

import githubIcon from '../../assets/github.svg';
import socialIcon from '../../assets/social.svg';
import buildIcon from '../../assets/build.svg';
import redirectIcon from '../../assets/redirect.svg';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkBreaks from 'remark-breaks';

interface PostProps { 
	body: string,
	title: string,
	html_url: string,
}

export function Post() {
	const [post, setPost] = useState<PostProps>();
	const { number } = useParams();

	useEffect(() => {
		api.get(`https://api.github.com/repos/gabrielCesarino/github-blog-posts/issues/${number}`)
			.then(response => setPost(response.data));
	}, []);


	console.log(post);
	return (
		post && 
		<Container>
			<PostHeader>
				<Iteractions>
					<NavLink to='/'>Voltar</NavLink>
					<a href={post.html_url} target="_blank" rel="noreferrer">
						Ver no github
						<img src={redirectIcon} alt="Ver no Github" />
					</a>
				</Iteractions>
				<h1>{post.title}</h1>
				<PostDetails>
					<span>
						<img src={githubIcon} alt="" />
					
					</span>
					<span>
						<img src={socialIcon} alt="" />
						Rocketseat
					</span>
					<span>
						<img src={buildIcon} alt="" />
					seguidores
					</span>
				</PostDetails>
			</PostHeader>
			<Content>
				<ReactMarkdown remarkPlugins={[remarkBreaks]}>
					{post.body}
				</ReactMarkdown>
			</Content>
		</Container>
	);
}