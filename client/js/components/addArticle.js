Vue.component("add-article-form", {
    props: ["input"],
    components: {
        wysiwyg: vueWysiwyg.default.component
    },
    methods: {
        fileHandler(event) {
            console.log("masuk file handle", this.$refs.file.files[0]);
            this.input.file = this.$refs.file.files[0];
        },
    },
    template: `
    <div id="add-article" class="container">
    <div class="row">
        <div id="form-add" class="container fixed col s10">
            <div class="row">
                <div class="col m10 offset-m1 s12">
                    <h4 id="add-article-header" class="center-align">
                        Add Article
                    </h4>
                    <div class="row">
                        <form class="col s12" @submit.prevent="$emit('submit')">
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <input id="title" type="text" class="validate" autocomplete="off" v-model="input.title"/>
                                    <label for="title">Title</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <div class="file-field input-field">
                                        <div class="btn grey darken-3">
                                            <span>File</span>
                                            <input type="file" ref="file" :value="input.file" @change="fileHandler()"/>
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path validate" type="text"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <wysiwyg  v-model="input.content"/>
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