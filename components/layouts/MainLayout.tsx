import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

type Props = {
    children?: React.ReactNode
};

export const MainLayout: React.FC<Props> = ({ children }) => {
    return(
        <div className={styles.container}>
            <Head>
                <title>First Dashboard App</title>
                <meta name="description" content="First app by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}