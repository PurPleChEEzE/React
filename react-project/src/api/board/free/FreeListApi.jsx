import axiosInstance from "../../config/axiosConfig";

export const getFreeList = async ({ cpage, category, searchText }) => {
    try {
        const response = await axiosInstance.get("/freeBoard", {
            params: {
                cpage: cpage,
                category: category,
                searchText: searchText
            }
        })
        console.log("aa : " + response)
        return response.data;

    } catch (err) {
        console.log("Axios Failed : " + err)
        throw err;
    }
}


