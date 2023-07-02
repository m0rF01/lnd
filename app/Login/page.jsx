"use client"
import LoginLayout from "./layout"
import Link from "next/link"
import styles from "/styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react"


export default function Login(){
    const[show,setShow] = useState(false)

    //Google handler function

    async function handleGoogleSignin(){
        signIn('google',{callbackUrl:"http//localhost:3000"})
    }
    return(
        <section className="w-3/4 mx-auto flex flex-col gap-10">
            <div className="ttile">
                <h1 className="text-gray-800 text-4xl font-bold py-4 text-center">Adventure Start Here</h1>
                <p className="w-3/4 mx-auto text-gray-400 text-center">Welcome to the future, where possibilities unfold</p>
            </div>

            <form className="flex flex-col gap-5">
                <div className={styles.input_group}>
                    <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4">
                        <HiAtSymbol size={25}></HiAtSymbol>
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input
                    type={`${show?"text":"password"}`}
                    name="password"
                    placeholder="Password"
                    className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
                        <HiFingerPrint size={25}></HiFingerPrint>
                    </span>
                </div>
                <div className="input-button text-black flex flex-col gap-5">
                    <button type="submit" className={styles.button}>
                        Login
                    </button>

                    <button type="button" onClick={handleGoogleSignin} className={styles.button_custom}>
                        Sign In with Google <Image src={'/assets/google.png'} width={20} height={20}></Image>
                    </button>

                    <button type="button" className={styles.button_custom}>
                        Sign In with Github  <Image src={'/assets/github.png'} width={25} height={25}></Image>
                    </button>
                </div>
            </form>
            <p className="text-center text-gray-400">Don't have an account yet? <Link href={'/Register'}><p className="text-blue-700">Sign Up</p></Link></p>
        </section>
    )
}