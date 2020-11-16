import React, {Component} from 'react';
import { connect } from "react-redux";
import Audio from './audio';
import { Table, Breadcrumb } from "antd";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons"


class Index extends Component {
    constructor(props) {
        super(props);
        this.state={
            musicUrl: '',
            isPlay: false,
            currentPage: 1,
        }
    }
    componentDidMount() {
        this.props.getMusicList({
            sort:"热歌榜",
            format:"json"
        })
        this.audio.addEventListener('pause', ()=>{
            this.setState({
                isPlay: false
            })
        })
        this.audio.addEventListener('play', ()=>{
            this.setState({
                isPlay: true
            })
        })
        this.audio.addEventListener('ended', ()=>{
            this.props.getMusicList({
                sort:"热歌榜",
                format:"json"
            })
        })
    }
    player = (url) =>{
        const { isPlay } = this.state;
        this.setState({
            musicUrl: url,
            isPlay: !isPlay,
        },()=>{
            if(!isPlay){
                this.audio.play()
            }else{
                this.audio.pause()
            }
        })
    }


    render() {
        let thiz = this;
        const { isPlay, currentPage } = this.state;
        const { musicList } = this.props;
        const columns = [
            {
                title: '歌曲名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '艺术家',
                dataIndex: 'artistsname',
                key: 'artistsname',
            },
            {
                title: '播放',
                dataIndex: 'url',
                key: 'url',
                render(url){
                    return(
                        isPlay ? <PauseCircleOutlined style={{fontSize: 20}} onClick={()=>thiz.player(url)}/>:
                        <PlayCircleOutlined style={{fontSize: 20}} onClick={()=>thiz.player(url)}/>
                        )
                }
            }
        ];
        console.log('render',musicList);
        console.log('length', musicList.length)

        const paginationProps = {
            page: currentPage,
            // onChange : (page) => this.handleTableChange(page),
            pageSize: 5,
            showSizeChanger: false,
            total: musicList.length
        }
        return (
            <div>
                <Table
                    dataSource={musicList}
                    columns={columns}
                    pagination={paginationProps}
                    rowKey={(record) => {
                        return (record.key + Date.now()) //在这里加上一个时间戳就可以了
                    }}
                />
                <audio ref={(ref)=>this.audio=ref} src={this.state.musicUrl} controls pause={isPlay}></audio>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        musicList: state.musicList || []
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getMusicList(payload){
            dispatch({type: 'getMusicList', payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);