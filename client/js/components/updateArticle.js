Vue.component("update-article-form", {
    props: ['editArticleData'],
    components: {
        wysiwyg: vueWysiwyg.default.component
    },
    template: `
    <div id="add-article" class="container">
    <div class="row">
        <div id="form-add" class="container fixed col s10">
            <div class="row">
                <div class="col m10 offset-m1 s12">
                    <h4 id="add-article-header" class="center-align">
                        Edit Article
                    </h4>
                    <div class="row">
                        <form class="col s12" @submit.prevent="$emit('submit-update-article-form')">
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <input id="title" type="text" class="validate" autocomplete="off" v-model="editArticleData.title" autofocus/>
                                    <label for="title">Title</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <wysiwyg  v-model="editArticleData.content"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <button class="btn waves-effect waves-hard grey darken-2" type="submit" name="action">
                                        Submit
                                        <i class="material-icons right">send</i>
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
});
