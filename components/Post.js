import Link from 'next/link'
import styles from '../styles/Post.module.css'

const Post = ({post}) => {
    return (
        <Link href="/post/[id]" as={`/post/${post.id}`}>
            <a className={styles.card}>
                <h4>{post.title} &rarr;</h4>
                <p>{post.body}</p>
            </a>
        </Link>
    )
}

export default Post
