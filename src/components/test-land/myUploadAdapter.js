// 自定义一个upload adapter, 模拟图片上传到服务器, 实际上什么也不做
export class MyUploadAdapter {
    constructor( loader ) {
        // The file loader instance to use during the upload.
        this.loader = loader;
    }

    // Starts the upload process.
    upload() {
        return this.loader.file
            .then( file => new Promise( (resolve, reject) => {
                console.log("mock image upload...")
            }) );
    }

    // Aborts the upload process.
    abort() {
        console.log('abort images..')
    }
}

