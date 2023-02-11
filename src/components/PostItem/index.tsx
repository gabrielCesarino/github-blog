import { Container, PostInfo, PostDescription } from './styles';

export function PostItem() {
	return (
		<Container>
			<PostInfo>
				<strong>
                    Javascript data types and data structures
				</strong>
				<small>
                    Há 1 dia
				</small>
			</PostInfo>
			<PostDescription>
				<p>
                    Programming languages all have built-in data structures, but
                    these often differ from one language to another. This article
                    attempts to list the built-in data structures available in
                    JavaScript and what properties they have. These can be used
                    to build other data structures. Wherever possible, comparisons
                    with other languages are drawn.
				</p>
			</PostDescription>
		</Container>
	);
}