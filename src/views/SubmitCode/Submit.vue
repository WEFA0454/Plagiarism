<template>
    <div class="submit">
        <p>提交文件夹</p>
        <input type="file" ref="fileInput" @change="handleFolderUpload" />
        <button @click="uploadFolder">提交文件夹</button>
    </div>
</template>

<script>
export default{
    methods:{
        //处理文件选择事件
        handleFolderUpload() {
            //获取文本框的引用
            const fileInput = this.$refs.fileInput;
            
            // 检查是否有文件被选择
            if (fileInput.files.length > 0) {
                const selectedFile = fileInput.files[0];
                console.log("选中文件夹:", selectedFile);

                // 这里可以执行其他文件选择后的逻辑，比如展示文件信息等
            } else {
                console.log("未选择");
            }
        },
        // 处理上传文件夹按钮点击事件
        uploadFolder(){
        console.log("已点击提交");
        // 获取文件输入框的引用
        const fileInput = this.$refs.fileInput;
        // 获取选择的文件列表
        const files = fileInput.files;
        // 创建一个 FormData 对象，用于存储文件
        const formData = new FormData();
        // 将文件添加到 FormData 中
        formData.append('file', files[0]);
        // 使用Axios或其他工具发送文件到服务器
        axios.post('/api/upload-folder', formData)
            .then(response => {
            // 处理服务器返回的结果
            console.log(response.data);
            })
            .catch(error => {
            // 处理上传过程中的错误
            console.error(error);
            });
        }
    }
};
</script>