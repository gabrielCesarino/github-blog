import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api/api';

interface PostProps { 
	body: string,
	title: string,
}

export function Post() {
	const [post, setPost] = useState<PostProps>();
	const { number } = useParams();

	useEffect(() => {
		api.get(`https://api.github.com/repos/gabrielCesarino/github-blog-posts/issues/${number}`)
			.then(response => setPost(response.data));
	}, []);


	return(
		<p>{post?.body}</p>
	);
}