interface UserLogin{
    id:number;
    usuario:String;
    senha:String;
    // interrogação para mostrar que o token pode estar oculto
    token?:String|null
}

export default UserLogin;