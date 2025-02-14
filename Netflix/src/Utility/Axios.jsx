import axios from "axios"

const Instance = axios.create({
    baseURL:"https://api/themobiedb.org/3/"

})


export default Instance

/**import axios from "axios"
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})
export default instance */