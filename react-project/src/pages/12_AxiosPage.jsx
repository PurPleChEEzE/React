import { useEffect } from "react";
import { getUser } from "../api/12_AxiosApi";

export default function AxiosPage() {
  // DOM이 렌더링 된 이후 한번만 실행하도록 도와주는 리액트 훅
  useEffect(() => {
    const fetchUser = () => {
      try {
        const userList = getUser();
        console.log(userList);
      } catch (error) {
        console.log("Error : " + error);
      }
    };

    fetchUser();
  });

  return "테스트중";
}
