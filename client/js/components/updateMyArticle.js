Vue.component("update-my-article-form", {
    props: ['editMyArticleData'],
    template: `
    <div id="add-article" class="container">
    <div class="row">
        <div id="form-add" class="container fixed col s6 offset-s3">
            <div class="row">
                <div class="col m10 offset-m1 s12">
                    <h3 id="add-article-header" class="center-align">
                        Edit Article
                    </h3>
                    <div class="row">
                        <form class="col s12" @submit.prevent="$emit('submit-update-article-form')">
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <lable id="update-lable">Title</lable>
                                    <input autofocus id="title" type="text" class="validate" autocomplete="off" v-model="editMyArticleData.title" autofocus />
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <lable id="update-lable">Content</lable>
                                    <textarea id="textarea" class="materialize-textarea" autocomplete="off" v-model="editMyArticleData.content"></textarea>
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
