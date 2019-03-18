Vue.component("list-all-article", {
    props: ['articles', 'currentUserId'],
    data() {
        return {};
    },
    template: `
    <div id="show-article" class="container">
    <div class="row" v-for="item in articles">
        <div class="col s6 offset-s3">
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
                        <a href="#" class="cyan-text text-accent-2" @click="$emit('update-article', item._id)">Update</a>
                        <a href="#" class="purple-text text-accent-2" @click="$emit('delete-article', item._id)">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
    `
});

