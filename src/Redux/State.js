
let renderEntireTree;

let state = {
    profilePage: {
        postsData: [
            {
                name: 'Pavel', message: 'Hi. I am fine. Thank you!', like: '15', id: 'Pavel',
                profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
            },
            {
                name: 'Yuriy', message: 'Hello! How are you', like: '10', id: 'Yuriy',
                profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
            },
            {
                name: 'Katya', message: 'Would you like a cup of tee?', like: '17', id: 'Katya',
                profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
            },
            {
                name: 'Masha', message: "No, i'd like a glass of juice.", like: '17', id: 'Masha',
                profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
            },
            {
                name: 'EasyMan', message: 'Ok. Here it is!', like: '17', id: 'EasyMan',
                profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
            }
        ],
        postText: ''
    },

    dialogsPage: {
        dialogNames: [
            { name: 'Name1', id: 'n1', path: 'name1', avatar: 'https://ds04.infourok.ru/uploads/ex/0c29/00150740-02eff148/hello_html_ff4df5c.png' },
            { name: 'Name2', id: 'n2', path: 'name2', avatar: 'https://ds04.infourok.ru/uploads/ex/0c29/00150740-02eff148/hello_html_ff4df5c.png' },
            { name: 'Name3', id: 'n3', path: 'name3', avatar: 'https://ds04.infourok.ru/uploads/ex/0c29/00150740-02eff148/hello_html_ff4df5c.png' },
            { name: 'Name4', id: 'n4', path: 'name4', avatar: 'https://ds04.infourok.ru/uploads/ex/0c29/00150740-02eff148/hello_html_ff4df5c.png' },
            { name: 'Name5', id: 'n5', path: 'name5', avatar: 'https://ds04.infourok.ru/uploads/ex/0c29/00150740-02eff148/hello_html_ff4df5c.png' }
        ],
    

        dialogBox: [
        { text: 'Message1', id: 'm1' },
        { text: 'Message3', id: 'm2' },
        { text: 'Message2', id: 'm1' },
        { text: 'Message4', id: 'm2' },
        { text: 'Message4', id: 'm2' },
        { text: 'Message4', id: 'm1' },
        { text: 'Message4', id: 'm1' },
        { text: 'Message4', id: 'm2' },
        { text: 'Message4', id: 'm2' },
        { text: 'Message5', id: 'm1' }
        ]
    }

}

export const addPost = () => {
    let newPost = {
        name: 'Kolya',
        message: state.profilePage.postText,
        like: '0',
        id: 'Kolya',
        profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
    };
    state.profilePage.postsData.push( newPost );
    state.profilePage.postText = '';
    renderEntireTree(state);
}

export const setPostText = (newPostText) => {
    state.profilePage.postText = newPostText;
    renderEntireTree(state);
}

export const subscriber = ( observer ) => {
    renderEntireTree = observer
}

export default state;