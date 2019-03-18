Vue.component('update-user-template', {
    props: ['userInfo'],
    template: `
    <div id="update-form" class="container">
    <div class="row">
        <div id="form-update" class="container fixed col s4 offset-s4">
            <div class="row">
                <div class="col m10 offset-m1 s12">
                    <h3 id="add-article-header" class="center-align">
                        Edit Profile
                    </h3>
                    <div class="row">
                        <form class="col s12" @submit.prevent="$emit('submit-new-user-info', {username:username, email:email})">
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <label id="update-lable">Username</label>
                                    <input id="username-input" type="text" class="validate" autocomplete="off" v-model="userInfo.username" autofocus />
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <label id="update-lable">Email</label>
                                    <input id="email-input" type="text" class="validate" autocomplete="off" v-model="userInfo.email" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s7 offset-s4">
                                    <button id="register-button" class="btn waves-effect waves-hard grey darken-2" type="submit" name="action">
                                        Confirm
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