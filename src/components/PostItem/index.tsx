import { Container, PostInfo, PostDescription } from './styles';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface RepoProps {
	body: string,
	id: number,
	title: string,
	created_at: Date,
}

interface PostProps {
	repo: RepoProps
}


export function PostItem({ repo }:  PostProps) {
	const time = formatDistanceToNow(new Date(repo.created_at), {
		locale: ptBR,
		addSuffix: true,
	});
	
	return (
		<Container>
			<PostInfo>
				<strong>
					{repo.title}
				</strong>
				<small>
					{time}
				</small>
			</PostInfo>
			<PostDescription>
				<p>
					{repo.body}
				</p>
			</PostDescription>
		</Container>
	);
}