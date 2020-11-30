import React, {Component} from 'react';
import { Upload, message, Button } from 'antd';
import { uploadFile } from '../../api';
// import { UploadOutlined } from '@ant-design/icons';

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class Index extends Component {

    upload = (event) => {
        // console.log(event.target.files)
        let file = event.target.files[0]
        // uploadFile(file)
        let reader = new FileReader()
        reader.readAsDataURL(file)//转换成base64
        // console.log(reader)
        reader.onloadend = function (res) {
            console.log(res)
        }
    }

    Click = () =>{
        this.refs.input.click();
    }
    render() {
        return (
            <div>
                <Upload {...props}>
                    {/*<Button icon={<UploadOutlined />}>Click to Upload</Button>*/}
                    <Button>上传</Button>
                </Upload>,
                <div style={{width: 80, height: 30}} onClick={this.Click}>
                    <span>上传文件</span>
                 <input type="file" ref = 'input' onChange={this.upload} style={{ display: 'none'}}/>
                </div>
            </div>
        );
    }
}

export default Index;