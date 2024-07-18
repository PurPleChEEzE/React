import { useEffect } from "react"
import { getUser } from "../api/12_AxiosApi"

export default function AxiosPage() {

    useEffect(() => {
        const fetchUser = () => {
            try {
                const userList = getUser();
                console.log(userList);
            } catch (error) {
                console.log("Error : " + error);
            }
        }
        fetchUser();
    })
    return "테스트중"
}