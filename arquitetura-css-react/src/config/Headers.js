const logged = localStorage.getItem('token')
export const config ={
    headers : {
     Authorization: logged
    }
}