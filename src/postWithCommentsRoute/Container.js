import Header from '../header/Header.js';
import PostAndCommentsContainer from './PostAndCommentsContainer.js';

export default function PostWithCommentsRoute() {
    return (
      <div className="grid">
        <Header/>
        <PostAndCommentsContainer/>
      </div>
    );
}