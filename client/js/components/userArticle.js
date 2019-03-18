Vue.component('user-article', {
    props: ['articles', 'currentUserId'],
    template: `
    <div id="show-article"class="container">
    <div class="row">
        <div class="col s6 offset-s3" v-for="item in articles">
            <div id="card-content" class="card grey darken-4">
                <div class="card-image">
                    <img :src="item.url">
                </div>
                <div class="card-content white-text">
                    <span class="card-title">{{ item.title }}</span>
                    <div class="divider yellow accent-3"></div>
                    <div class="section">
                        <p v-html="item.content">
                        </p>
                    </div>
                    <div class="section">
                        <p>
                            {{ item.created_at }}
                        </p>
                        <p class="">
                            {{ item.userId.username }}
                        </p>
                    </div>
                </div>
                <div class="card-action">
                    <div class="section" v-if="item.userId._id == currentUserId">
                        <a href="#" class="cyan-text text-accent-2" @click="$emit('update-my-article', item._id)">Update</a>
                        <a href="#" class="purple-text text-accent-2" @click="$emit('delete-my-article', item._id)">Delete</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="person-profile"class = "card grey darken-3 col s4 ffset-s7">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="https://image.flaticon.com/icons/png/512/17/17004.png">
            </div>
            <div class="card-content">
                <span class="card-title activator white-text">{{ articles[0].userId.username }}</span>
                <div class="section">
                    <p><a href="#" @click="$emit('update-my-profile')">edit</a></p>
                </div>
            </div>
        </div>
    </div>
    </div>
        `
})