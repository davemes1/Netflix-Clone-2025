import axios from "axios"

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    

});

export default instance

/**import axios from "axios"
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})
export default instance */
/**header :{Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTA3YzI0MjA2Nzk5OTcwZjlhMzAyZTc2MzBjY2I4MiIsIm5iZiI6MTczOTU2MTI1Mi4xMzUsInN1YiI6IjY3YWY5OTI0ZjEyY2VjNmUzMDFjZDJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T43_y7UedJff5gcbwMpvlSdMvaWxwBGmSFsF4OsGH_o'} */