// this checks user is log in or noot by simply checking user details in local storage
const IsLogInUSer = ()=> {
    const user = JSON.parse(localStorage.getItem('userLoged'));
    if(user== null) {
        return false;
    }
    else {
        return true;
    }
}
export default IsLogInUSer;