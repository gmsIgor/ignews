import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FiX } from "@react-icons/all-files/fi/FiX";
import { signIn, signout, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export function SignInButton() {
    const [session] = useSession();

    return session ? (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signout()}
        >
            <FaGithub color="#04d361" />
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417" />
            Sign in with GitHub
        </button>
    );
}