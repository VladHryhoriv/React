let initionalState={
    Friends: [
        {id:1, img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', name: 'Vlad' },
        {id:2, img: 'https://cdn.cnn.com/cnnnext/dam/assets/191203174105-edward-whitaker-1-large-169.jpg', name: 'Andre' },
        {id:3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfvqjaaSseNDZ2jlEszLJDW6UYzgB0qhS-vTsTwox6fQ7i4P1T', name: 'Kevin' }
    ]
}
const navbarReducer = (state=initionalState,action)=>{
    return state;
}
export default navbarReducer;