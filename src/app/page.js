'use client';
import Image from "next/image"
import styles from "./page.module.css"
import Form from './../components/Login'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Form />
      </div>
    </main>
  )

}
  

