import { Route, useParams } from 'react-router';
import { Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { Post } from './pages/Post';

export function Router() {
	const { postId } = useParams();

	return (
		<Routes>
			<Route path='/' element={<DefaultLayout />}>
				<Route index element={<Home />}/>
				<Route path='/post/:postId' element={<Post />} />
			</Route>
		</Routes>
	);
}