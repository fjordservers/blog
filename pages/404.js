// 404.js
import Link from 'next/link'

import styles from '../styles/404.module.css';

export default function FourOhFour() {
  return <>
    <h1>404 - Sorry But The Page Was Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}
