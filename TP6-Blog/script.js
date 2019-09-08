
const getPosts = () =>{
    return fetch('https://utn2019-avanzada2-tp6.herokuapp.com/api/posts')
    .then(response => {
        return response.json()
    })
    .catch(error => {
        console.log(error);
    });
};


const getComments = () => {
    return fetch('https://utn2019-avanzada2-tp6.herokuapp.com/api/comments')
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    });
};

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
}
*/

async function getPostsAndComments(){
    const posts = await getPosts();
    const comments = await getComments();
    let completePosts = mapPostsAndComments(posts,comments);
    insertPosts(completePosts);
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

document.getElementById('share-button').addEventListener('click', () =>{
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
    .then(request => request.json())
    .catch(error => console.log(error));
    title = '';
    body ='';
});

const insertPosts = (postsArr) => {
    let title,body;
    postsArr.forEach(current => {
        title = current.title;
        body = current.body;
        date = new Date(current.date);
        date = date.toString();
        date =  date.slice(0,24);
        
        let container = document.getElementById('posts-container');
        container.insertAdjacentHTML('beforeend',`<div class="card gedf-card"><div class="card-header"><div class="d-flex justify-content-between align-items-center">` +
        `<div class="d-flex justify-content-between align-items-center"><div class="mr-2"><img class="rounded-circle" width="45" src="/images/mrX.jpg" alt="">` +
        `</div><div class="ml-2"><div class="h5 m-0">@anonimo</div><div class="h7 text-muted">Autor anonimo</div></div></div>` + 
        `<div><div class="dropdown"><button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">` + 
        `<i class="fa fa-ellipsis-h"></i></button><div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1"><div class="h6 dropdown-header">Configuration</div>` +
        `<a class="dropdown-item" href="#">Save</a><a class="dropdown-item" href="#">Hide</a><a class="dropdown-item" href="#">Report</a></div></div></div></div>` + 
        `</div><div class="card-body"><div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>${date}</div><a class="card-link" href="#">` + 
        `<h5 class="card-title">${title}</h5></a><p class="card-text">` +
        `${body}` + `</div><div id="card-footers${current.id}"><div class="card-footer"><a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>` +
        `<a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a><a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a></div></div></div>`);
        
        if(current.commentsForThisPost.length > 0){
            document.getElementById(`card-footers${current.id}`).insertAdjacentHTML('beforeend','<div class="card-footer comment-title "><p>Comentarios</p></div>')
            current.commentsForThisPost.forEach(actual => {
                date = new Date(actual.date);
                date = date.toString();
                date =  date.slice(0,24);
                document.getElementById(`card-footers${current.id}`).insertAdjacentHTML('beforeend',`<div class="card-footer bg-white">` + 
                `<div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>${date}</div><p><div class="h6 text-muted">@${actual.author}</div>${actual.text}</p></div>`);
            })
            
        }
    })
};

const commentFunc = (element) =>{
    element.addEventListener('click',() => {

    })
}


getPostsAndComments();

/*

POST /api/comments?post_id={value}&author={value}&text={value} - Publicar un
comment, el post debe existir*/
/*
<div class="form-group"><input id="action_id" name="action_id" type="text" placeholder="" class="form-control input-md">
</div><br><br>*/