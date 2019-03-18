Vue.component('register-template', {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    template: `
    <div id="register-form" class="container">
    <div class="row">
        <div id="form-register" class="container fixed col s4 offset-s4">
            <div class="row">
                <div class="col m10 offset-m1 s12">
                    <h3 id="add-article-header" class="center-align">
                        Register
                    </h3>
                    <div class="row">
                        <form class="col s12" 
                            @submit.prevent="$emit('submit-register',{username: username, password: password, email: email })"
                        >
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <input id="username-input" type="text" class="validate" autocomplete="off" v-model="username" />
                                    <label for="title">Username</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <input id="email-input" type="text" class="validate" autocomplete="off" v-model="email" />
                                    <label for="title">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <input id="password-input" type="text" class="validate" autocomplete="off" v-model="password" />
                                    <label for="title">Password</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s7 offset-s4">
                                    <button id="register-button" class="btn waves-effect waves-hard grey darken-2" type="submit" name="action">
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