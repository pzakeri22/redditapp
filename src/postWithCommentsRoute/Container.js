import Header from '../header/Header';
import PostAndCommentsContainer from './PostAndCommentsContainer';

export default function PostWithCommentsRoute() {
    return (
      <div class="grid">
        <Header/>
        <PostAndCommentsContainer/>
      </div>
    );
}