Vue.component('login-template', {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    template: `
    <div id="login-form" class="container">
    <div class="row">
        <div id="form-login" class="container fixed col s4 offset-s4">
            <div class="row">
                <div class="col m10 offset-m1 s12">
                    <h3 id="add-article-header" class="center-align">
                        Login
                    </h3>
                    <div class="row">
                        <form class="col s12" @submit.prevent="$emit('submit-login', {username: username, password: password})">
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <input id="username-input" type="text" class="validate" autocomplete="off" v-model="username" name="username" />
                                    <label for="title">Username</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <input id="password-input" type="password" class="validate" autocomplete="off" v-model="password" name="password" />
                                    <label for="title">Password</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s7 offset-s4">
                                    <button class="btn waves-effect waves-hard grey darken-2" type="submit" name="action">
                                        Login
                                    </button>
                                    <div id="my-signin2"></div>
                                    <button id="register-button" class="btn waves-effect waves-hard grey darken-2" type="submit" name="action" @click="$emit('register-form')">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
})
