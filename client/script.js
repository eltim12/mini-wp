const url = "http://localhost:3000";

function SWAL(type, message) {
    swal({
        position: "top-end",
        icon: type,
        // type: type,
        confirmButtonColor: "#212121",
        title: message,
        showConfirmButton: false,
        timer: 1500
    });
}

let app = new Vue({
    el: "#app",
    data: {
        showPostTrigger: false,
        titleInput: "ini title parent",
        articleInput: {
            title: "",
            content: "",
            file: ""
        },
        contentInput: "",
        file: "",
        currentUserId: "",
        username: "",
        email: "",
        password: "",
        articleInfo: {
            title: "",
            content: ""
        },
        editArticleData: {
            id: "",
            title: "",
            content: ""
        },
        editMyArticleData: {
            id: "",
            title: "",
            content: ""
        },
        editUserData: {
            username: "",
            email: "",
        },
        tes: "masok",
        articles: [],
        User: [],
        myArticle: [],
        position: "",
        showNavbar: true,
        isLogin: false
    },
    watch: {
        showPostTrigger: function() {
            this.showAllArticle()
        }
    },
    created() {
        this.showPostTrigger = false,
        this.isLogin = false;
        localStorage.clear();
        this.position = "";
    },
    methods: {
        buttonShowArticle() {
            this.position = "listAllArticle";
        },
        logout() {
            localStorage.clear();
            this.isLogin = false;
            this.position = "logout";
        },
        login(payload) {
            let loginData = {
                username: payload.username,
                password: payload.password
            };
            console.log(loginData);
            axios
                .post(`${url}/users/login`, loginData)
                .then(loggedIn => {
                    console.log(loggedIn.data.token);
                    console.log(loggedIn.data.userId);
                    SWAL("success", "login success!");

                    localStorage.setItem("token", loggedIn.data.token);
                    localStorage.setItem("userId", loggedIn.data.userId);
                    this.username = loginData.username;
                    this.isLogin = true;
                    this.currentUserId = localStorage.getItem("userId");
                    this.showAllArticle();
                })
                .catch(err => {
                    console.log("error bosque");
                    console.log(err);
                    console.log(err.response.data.msg, "===============ini eror bosssssssssssssssssssssss");
                });
        },
        register(payload) {
            console.log(payload);
            axios
                .post(`${url}/users/register`, {
                    username: payload.username,
                    email: payload.email,
                    password: payload.password
                })
                .then(userCreated => {
                    console.log(userCreated, "user baru udh jadi boss=================");
                    this.position = "loginForm";
                    this.buttonShowLoginForm();
                })
                .catch(err => {
                    console.log(err.response.data.msg, "===============ini eror bosssssssssssssssssssssss");
                    console.log("error bosque");
                });
        },
        updateUserForm() {
            axios
                .get(`${url}/users/find?id=${this.currentUserId}`)
                .then(userFound => {
                    console.log(userFound)
                    this.editUserData.username = userFound.data.username
                    this.editUserData.email = userFound.data.email
                    this.position = "updateUserForm"
                })
                .catch(err => {
                    console.log(err);
                });
        },
        updateUserToServer() {
            console.log("masok update user server bossss")
            console.log(this.editUserData)
            axios
                .put(`${url}/users/edit?id=${this.currentUserId}`, this.editUserData)
                .then(userUpdated => {
                    console.log('success update user')
                    this.showMyArticle()
                })
                .catch(err => {
                    console.log(err)
                })
        },
        showAllArticle() {
            console.log("masok show Article pak", this.articles);
            axios
                .get(`${url}/articles`)
                .then(articleData => {
                    this.articles = articleData.data.reverse();
                    this.position = "listAllArticle";
                    console.log(articleData.data.reverse(), "ini smua datanyaaaaaaaaaaaaaaaaaaaa");
                    // this.buttonShowArticle();
                    // this.showLoginButton = false;
                    // this.showLogoutButton = true;
                    console.log(this.articles, "after adding articles");
                })
                .catch(err => {
                    console.log(err.message);
                });
        },
        updateArticle(articleId) {
            console.log("masok update article pakkkkkkkkkkkkkkkkkk");
            console.log(articleId, "ini id articleeeeeeeeeeeee");
            axios({
                url: `${url}/articles/one?id=${articleId}`,
                method: "GET"
            })
                .then(foundArticle => {
                    console.log(foundArticle, "ketemu article nya=================");
                    this.editArticleData.id = foundArticle.data._id;
                    this.editArticleData.title = foundArticle.data.title;
                    this.editArticleData.content = foundArticle.data.content;
                    // this.editArticleData.url = foundArticle.data.url.toString();
                    console.log(foundArticle.data, "masok ke update form bosssssssssssss");
                    this.position = "updateArticleForm";
                })
                .catch(err => {
                    console.log(err);
                });
        },
        updateArticleToServer() {
            console.log(this.editArticleData, "dan ini article barunyaaaa");
            axios({
                url: `${url}/articles?id=${this.editArticleData.id}`,
                method: "PUT",
                data: {
                    title: this.editArticleData.title,
                    content: this.editArticleData.content
                }
            })
                .then(updatedArticle => {
                    this.editArticleData = {
                        id: "",
                        title: "",
                        content: ""
                    };
                    this.showAllArticle();
                })
                .catch(err => {
                    console.log(err);
                });
        },
        deleteArticleToServer(articleId) {
            console.log("TCL: deleteArticleToServer -> articleId", articleId);

            axios
                .delete(`${url}/articles?id=${articleId}`)
                .then(data => {
                    this.showAllArticle();
                    console.log("sukses delete article2222222222222222");
                })
                .catch(err => {
                    console.log(err);
                });
        },
        showMyArticle() {
            console.log("masok showmy article=========");
            axios
                .get(`${url}/articles`)
                .then(article => {
                    console.log("success get data");
                    this.articles = [];
                    article.data.map(e => {
                        // console.log('/==================', e)
                        if (e.userId._id === localStorage.getItem("userId")) {
                            this.articles.push(e);
                        }
                    });
                    this.position = "list-my-articles";
                })
                .catch(err => {
                    console.log(err);
                });
        },
        updateMyArticle(articleId) {
            console.log("masok update my articleeeeeeeeeee");
            console.log(articleId, "ini id articleeeeeeeeeeeee");
            axios({
                url: `${url}/articles/one?id=${articleId}`,
                method: "GET"
            })
                .then(foundArticle => {
                    console.log(foundArticle, "ketemu article nya=================");
                    this.editMyArticleData.id = foundArticle.data._id;
                    this.editMyArticleData.title = foundArticle.data.title;
                    this.editMyArticleData.content = foundArticle.data.content;
                    console.log(foundArticle.data, "masok ke update form bosssssssssssss");
                    this.position = "updateMyArticleForm";
                })
                .catch(err => {
                    console.log(err);
                });
        },
        updateMyArticleToServer() {
            console.log(this.editMyArticleData, "dan ini article barunyaaaa");
            axios({
                url: `${url}/articles?id=${this.editMyArticleData.id}`,
                method: "PUT",
                data: {
                    title: this.editMyArticleData.title,
                    content: this.editMyArticleData.content
                }
            })
                .then(updatedArticle => {
                    this.editMyArticleData = {
                        id: "",
                        title: "",
                        content: ""
                    };
                    console.log("success updated data in updated my article to server");
                    this.showMyArticle();
                })
                .catch(err => {
                    console.log(err);
                });
        },
        deleteMyArticleToServer(articleId) {
            console.log("TCL: deleteArticleToServer -> articleId", articleId);

            axios
                .delete(`${url}/articles?id=${articleId}`)
                .then(data => {
                    this.showMyArticle();
                    console.log("sukses delete article2222222222222222");
                })
                .catch(err => {
                    console.log(err);
                });
        },
        buttonShowUpdateUserForm() {
            axios({
                url: `${url}/users/find?id=${localStorage.getItem("userId")}`
            })
                .then(gotUser => {
                    console.log(this.editUserData, "ini thissssssssssssssssss");
                    this.editUserData.username = gotUser.data.username;
                    this.editUserData.email = gotUser.data.email;
                    this.editUserData.password = gotUser.data.password;
                    this.showUpdateForm = true;
                    console.log(localStorage.getItem("userId"));
                })
                .catch(err => {
                    console.log(err);
                });
        },
        submitNewPost() {
            console.log("masok submitnewpost===============>>>>")
            let dataFormat = new FormData();
            dataFormat.append("title", this.articleInput.title);
            dataFormat.append("content", this.articleInput.content);
            dataFormat.append("userId", localStorage.getItem("userId"));
            dataFormat.append("image", this.articleInput.file);
            console.log(dataFormat, "ini dataformat nyaaaaaaaaaaaaa");
            axios
                .post("http://localhost:3000/articles", dataFormat, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                .then(articleCreated => {
                    console.log("<<<<<<<<<<<<sukses create article>>>>>>>>>>>");
                    console.log("TCL: submitNewPost -> articleCreated", articleCreated);
                    this.showAllArticle()
                })
                .catch(err => {
                    console.log(err);
                });
        },
        
    }
});
