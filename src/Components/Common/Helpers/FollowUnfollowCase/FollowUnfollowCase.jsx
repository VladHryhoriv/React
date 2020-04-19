export const FollowUnfollowCase = (users,userId,foll)=>{
    let changedUser =  users.map(u=>{
    if(u.id === userId){
         return {...u,followed:foll}
        }
        return u;
    })
    return changedUser
}