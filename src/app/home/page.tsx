import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'

export default function Home() {
    return (
        <main>
            <section className={styles.header}>
                <h1>
                    Organize <br />
                    Your Life.
                </h1>
            </section>

            <section className={styles.container}>
                <Image
                    src="/avatar.png"
                    alt="User avatar icon"
                    width={140}
                    height={140}
                    className={styles.avatarImage}
                />
                <div className={styles.overview}>
                    <h1>Overview</h1>
                    <p>Activity Summary</p>
                    <div className={styles.overviewItem}>
                        <div className={styles.item1}>
                            <h2>Task Completion</h2>
                        </div>
                        <div className={styles.item1}>
                            <h2>Task Completion</h2>
                        </div>
                        <div className={styles.item1}>
                            <h2>Task Completion</h2>
                        </div>
                        <div className={styles.item1}>
                            <h2>Task Completion</h2>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
