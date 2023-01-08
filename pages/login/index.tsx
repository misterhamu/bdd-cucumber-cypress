import {useRouter} from "next/router"

export default function LoginPage() {
    const router = useRouter();
    return <>
        <h1>Login Page</h1>
        <form>
            <input type="text" id="username"/>
            <input type="password" id="password"/>
            <button type="button"
                onClick={
                    () => {
                        router.push("/dashboard");
                    }
            }>Login</button>

        </form>
    </>
}
