const url = 'http://localhost:3000'

let app = new Vue({
    el: '#main',
    data: {
        username: '',
        email: '',              
        password: '',
        tes: 'masok',
        showArticle: true,
        showAddArticle: false,
        showPersonArticle: false,
        showLogginButton: true,
        showUserGreeting: false,
        showLoginForm: false,
        showRegisterForm: false,
        articles: [],
        User: []
    },
    created() {
        this.showLoginForm = false
        this.showArticle = false
        this.showAddArticle = false
        this.showPersonalArticle = false
        this.showUserGreeting = false
        this.showRegisterForm = false
    },
    methods: {
        buttonShowArticle() {

            axios
                .get(`${url}/articles`)
                .then(articleData => {
                    this.articles = articleData.data
                })
                .catch(err => {
                    console.log(err)
                })

            if (this.showArticle === false) {
                this.showArticle = true
                this.showAddArticle = false
                this.showPersonalArticle = false
            }
        },
        buttonShowAddArticle() {
            if (this.showAddArticle === false) {
                this.showAddArticle = true
                this.showArticle = false
                this.showPersonalArticle = false
            }
        },
        buttonShowPersonalArticle() {
            if (this.showPersonalArticle === false) {
                this.showPersonalArticle = true
                this.showArticle = false
                this.showAddArticle = false
            }
        },
        buttonShowLoginForm() {
            if (this.showLoginForm === false) {
                this.showLoginForm = true
                this.showRegisterForm = false
            }
        },
        buttonShowRegisterForm() {
            if (this.showLoginForm === true && this.showRegisterForm === false) {
                this.showLoginForm = false
                this.showRegisterForm = true
            }
        },
        login() {
            let loginData = {
                username: this.username,
                password: this.password
            }
            axios
                .post(`${url}/users/login`, loginData)
                .then(loggedIn => {
                    this.User.push(loginData)
                    console.log(loggedIn.data)
                    console.log('sukses login')
                })
                .catch (err => {
                    console.log(err.response.data.msg, '===============ini eror bosssssssssssssssssssssss')
                    console.log('error bosque')
                })
        },
        register() {

        }
    }
})

