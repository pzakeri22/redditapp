import Header from '../header/Header.js';
import PostAndCommentsContainer from './PostAndCommentsContainer.js';

export default function PostWithCommentsRoute() {
    return (
      <div class="grid">
        <Header/>
        <PostAndCommentsContainer/>
      </div>
    );
}