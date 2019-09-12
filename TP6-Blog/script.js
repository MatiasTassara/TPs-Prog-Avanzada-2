
const getPosts = () =>{
    return fetch('https://utn2019-avanzada2-tp6.herokuapp.com/api/posts')
    .then(response => {
        return response.json()
    })
    .catch(error => {
        console.log(error);
    });
};


const getAllComments = () => {
    return fetch('https://utn2019-avanzada2-tp6.herokuapp.com/api/comments')
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    });
};

const getCommentsOnePost = (idPost) => {
    return fetch(`https://utn2019-avanzada2-tp6.herokuapp.com/api/comments?post_id=${idPost}`)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    });
}

//get with XHR
/*
const getPosts = () => {
    return new Promise((resolve,reject) => {
        var request = new XMLHttpRequest();
        request.open('GET','https://utn2019-avanzada2-tp6.herokuapp.com/api/posts');
        request.responseType = 'json';
        request.onload = () =>{
            if(request.status == 200){
                resolve(request.response);
            }else{
                reject(Error('Posts not found' + request.statusText))
            }
        }
        request.send();
    });
};
*/


const makePost = () => {
    return new Promise((resolve,reject) => {
    const title = document.getElementById('post-title').value;
    const body = document.getElementById('post-body').value;
        var request = new XMLHttpRequest();
        request.open('POST',`https://utn2019-avanzada2-tp6.herokuapp.com/api/posts?title=${title}&body=${body}`);
        request.responseType = 'json';
        request.onload = () =>{
            if(request.status <= 200 && request.status < 300){
                resolve(request.response);
            }else{
                reject(Error('Post rejected \n' + request.statusText))
            }
        }
        request.send();
    });
};

const makeComment = (comment,idPost) => {
    return new Promise((resolve,reject) => {
        var request = new XMLHttpRequest();
        request.open('POST',`https://utn2019-avanzada2-tp6.herokuapp.com/api/comments?post_id=${idPost}&author=${''}&text=${comment}`);
        request.responseType = 'json';
        request.onload = () =>{
            if(request.status <= 200 && request.status < 300){
                resolve(request.response);
            }else{
                reject(Error('Comment rejected \n' + request.statusText))
            }
        }
        request.send();
    });
};


async function getPostsAndComments(){
    loadSpinner();
    const posts = await getPosts();
    const comments = await getAllComments();
    const completePosts = mapPostsAndComments(posts,comments);
    insertPosts(completePosts);
    removeSpinner();
};

const mapPostsAndComments = (posts,comments) => {
    posts.forEach((current) => {
        current.commentsForThisPost = [];
        comments.forEach(element => {
            if(element.post_id == current.id){
                current.commentsForThisPost.push(element);
            }
        });
    });
    return posts;
}
/*
const makePost = () => {
    let title = document.getElementById('post-title').value;
    let body = document.getElementById('post-body').value;
    const data = {title,body}
    fetch(`https://utn2019-avanzada2-tp6.herokuapp.com//api/posts?title=${title}&body=${body}`,{
        method: 'POST',
        body: JSON.stringify(data), 
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(request => request.text())
    .catch(error => console.log(error));
}
*/
const loadSpinner = () =>{
    document.getElementById('posts-container').insertAdjacentHTML('beforeend',`<div class="spin"><div class="text-center">
         <div class="spinner-border text-light" style="width: 3rem; height: 3rem;" role="status"><span class="sr-only"></span>
         </div></div></div>`);
};

const removeSpinner = () => {
    const spinner = document.querySelector('.spin');
    spinner.parentNode.removeChild(spinner);
};

document.getElementById('share-button').addEventListener('click', async function abc() {
    document.getElementById('posts-container').innerHTML = '';
    loadSpinner();
    await makePost();
    getPostsAndComments();
    removeSpinner();
    document.getElementById('post-title').value = '';
    document.getElementById('post-body').value = '';
});



const insertPosts = (postsArr) => {
    let title,body;
    postsArr.forEach(current => {
        console.log(current.id);
        title = current.title;
        body = current.body;
        date = new Date(current.date).toString().slice(0,24);
        document.getElementById('posts-container').insertAdjacentHTML('afterbegin',`<div class="card gedf-card"><div class="card-header"><div class="d-flex justify-content-between align-items-center">` +
        `<div class="d-flex justify-content-between align-items-center"><div class="mr-2"><img class="rounded-circle" width="45" src="/images/mrX.jpg" alt="">` +
        `</div><div class="ml-2"><div class="h5 m-0">@anonimo</div><div class="h7 text-muted">Autor anonimo</div></div></div>` + 
        `<div><div class="dropdown"><button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">` + 
        `<i class="fa fa-ellipsis-h"></i></button><div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1"><div class="h6 dropdown-header">Configuration</div>` +
        `<a class="dropdown-item" href="#">Save</a><a class="dropdown-item" href="#">Hide</a><a class="dropdown-item" href="#">Report</a></div></div></div></div>` + 
        `</div><div class="card-body"><div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>${date}</div><a class="card-link" href="#">` + 
        `<h5 class="card-title">${title}</h5></a><p class="card-text">` +
        `${body}` + `</div><div id="card-footers${current.id}"><div class="card-footer"><a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>` +
        `<a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a><div class="input-group mb-3"></div><div class="input-group-prepend">
        </div><input id="comment-${current.id}"type="text" class="form-control" placeholder="Make a comment"></div></div></div>`);
        
        if(current.commentsForThisPost.length > 0){
            document.getElementById(`card-footers${current.id}`).insertAdjacentHTML('beforeend','<div class="card-footer comment-title "><p>Comentarios</p></div>')
            
            current.commentsForThisPost.forEach(actual => {
                date = new Date(actual.date).toString().slice(0,24);
                document.getElementById(`card-footers${current.id}`).insertAdjacentHTML('beforeend',`<div class="card-footer bg-white">` + 
                `<div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>${date}</div><p><div class="h6 text-muted">@${actual.author}</div>${actual.text}</p></div>`);
            });
            
        };

        const element = document.getElementById(`comment-${current.id}`);
        element.addEventListener('keyup', async function(event){
            if(event.keyCode == 13  && element.value.length > 0){
                const textComment = element.value;
                await makeComment(element.value,current.id);
                const footer = document.getElementById(`card-footers${current.id}`);
                element.value = '';
                await getCommentsOnePost(current.id);
                insertComments(footer,current.id,textComment);
            }
        })
    });
};

const insertComments = (element,idPost,comment) =>{
        element.insertAdjacentHTML('beforeend',`<div id="comment-box${idPost}" class="card-footer bg-white"> 
        <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>aca va el date</div>
        <p><div class="h6 text-muted">@</div>${comment}</p></div>`);
};



getPostsAndComments();


