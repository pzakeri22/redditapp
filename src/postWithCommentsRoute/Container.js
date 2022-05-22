import Header from '../header/Header';
import PostAndComments from './PostAndComments';

export default function PostWithCommentsRoute() {
    return (
      <div class="grid">
        <Header/>
        <PostAndComments/>
      </div>
    );
}