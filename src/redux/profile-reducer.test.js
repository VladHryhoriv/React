import profileReducer, { setUserStatus, DeletePost } from "./profile-reducer"


it("status should be chanced",()=>{
    //1. test data
    let initialState = {
        postsData: [
            { id: '1', text: 'Hello World !!!', likeCount: '12' },
            { id: '2', text: 'Hi haw are you ?', likeCount: '45' },
            { id: '3', text: 'AAAAAAAAAAAAA ?', likeCount: '0' },
            { id: '4', text: 'DDDDDD ?', likeCount: '100' }
        ],
        profile: null,
        status: null
    }
    let newStatus = "NoStatusAXAXAX"
    //2. action
    let action = setUserStatus(newStatus)
    let test = profileReducer(initialState, action)
    //3. expectation
    expect(test.status).toBe('NoStatusAXAXAX')
})
it("posts should be decrement",()=>{
    //1. test data
    let initialState = {
        postsData: [
            { id: '1', text: 'Hello World !!!', likeCount: '12' },
            { id: '2', text: 'Hi haw are you ?', likeCount: '45' },
            { id: '3', text: 'AAAAAAAAAAAAA ?', likeCount: '0' },
            { id: '4', text: 'DDDDDD ?', likeCount: '100' }
        ]
    }
    //2. action
    let action = DeletePost(2)
    let test = profileReducer(initialState, action)
    //3. expectation
    expect(test.postsData.length).toBe(3)
})