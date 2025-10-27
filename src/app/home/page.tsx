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
                        <div className={styles.item}>
                            <h3>Task Completion</h3>
                            <p>Completed / Total</p>
                            <div className={styles.count}>2/10</div>
                            <button>
                                <Image
                                    src="/button.png"
                                    alt="Button icon"
                                    width={50}
                                    height={50}
                                />
                            </button>
                        </div>
                        <div className={styles.item}>
                            <h3>This Week’s Schedule</h3>
                            <p>Next on Fri 10 Oct | 22:00</p>
                            <div className={styles.count}>2/10</div>
                            <button>
                                <Image
                                    src="/button.png"
                                    alt="Button icon"
                                    width={50}
                                    height={50}
                                />
                            </button>
                        </div>
                        <div className={styles.item}>
                            <h3>Habit Tracker </h3>
                            <p>Completed Today</p>
                            <div className={styles.count}>2/10</div>
                            <button>
                                <Image
                                    src="/button.png"
                                    alt="Button icon"
                                    width={50}
                                    height={50}
                                />
                            </button>
                        </div>
                        <div className={styles.item}>
                            <h3>Month Budget</h3>
                            <p>Remaining Balance</p>
                            <div className={styles.count}>2/10</div>
                            <button>
                                <Image
                                    src="/button.png"
                                    alt="Button icon"
                                    width={50}
                                    height={50}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
