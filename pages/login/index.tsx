import {useRouter} from "next/router"

export default function LoginPage() {
    const router = useRouter();
    return <>
        <h1>Login Page</h1>
        <form style={{border:"1px solid black",display:"flex",flexDirection: "column",gap:"1rem",padding:"1rem"}}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="please type email"/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="please type password"/>
            <button type="button"
                onClick={
                    () => {
                        router.push("/dashboard");
                    }
            }>Login</button>

        </form>
    </>
}
