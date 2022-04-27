import React from 'react';
import { useSelector } from 'react-redux';

export const SinglePostPage = ({ match}) => {
    //React Router will pass in a match object as a prop that contains the URL information we're looking for.
    const {postId} = match.param;

    //the component will re-render any time the value returned from useSelector changes to a new reference.     
    const post = useSelector(state => 
        state.posts.find(post => post.id === postId)
    );

    if(!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className='post'>
                <h2>{post.title}</h2>
                <p className='post-content'>{post.content}</p>
            </article>
        </section>
    )


}