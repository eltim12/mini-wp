Vue.component("navbar-template", {
    props: ["isLogin",],
    template: `
    <nav id="navbar" class="fixed">
        <div class="nav-wrapper grey darken-4 fixed">
            <a href="#" id="logo" class="brand-logo center" @click="$emit('back-to-home')"><img src="./img/icon-left-font-monochrome-white.png" width="200px"/></a>

        <ul id="nav-mobile" class="hide-on-med-and-down">
            <div class="container">
                <div id="user-greeting" v-if="isLogin === true">
                    <li>
                        <a class="waves-effect waves-hard btn white grey-text text-darken-4" @click="$emit('logout')">logout</a>
                    </li>
                    <li id="account" class="left">
                        <a href="#" @click="$emit('show-my-articles')">
                            <span>
                                <i class="material-icons">account_circle</i>
                            </span>
                        </a>
                    </li>
                </div>
                
                
                    <li v-if="isLogin === false">
                        <a class="waves-effect waves-hard btn white grey-text text-darken-4" @click="$emit('show-login-form')">login</a>
                    </li>


                <li id="search" class="right">
                    <a href="#">
                        <i class="material-icons">search</i>
                    </a>
                </li>

                <li id="write" class="right" v-if="isLogin === true">
                    <a  @click="$emit('show-add-article-form')">
                        <i class="material-icons">create</i>
                    </a>                                                  
                </li>
            </div>
        </ul>
    </div>
</nav>
    `,
    methods: {}
});

{/* <i class="material-icons">search</i> */}