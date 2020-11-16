import React, {Component} from 'react';

class Index extends Component {

    MP(ak) {
        return new Promise(function(resolve, reject) {
            var script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `http://api.map.baidu.com/api?v=2.0&ak=${ak}&callback=init`;
            document.head.appendChild(script)
            window.init = () => {
                resolve(window.BMap)
            }
        })
    }

    componentDidMount(){
        this.MP("Sj5bPGGMLAda4KwP1wvmGd48WeDi7Doo").then(BMap=>{
            var map = new BMap.Map('allmap');            // 创建Map实例
            var point = new BMap.Point(116.404, 39.915); // 创建点坐标
            map.centerAndZoom("福州",15);
            map.enableScrollWheelZoom();                 //启用滚轮放大缩小
        });

    }

    render() {
        return (
            <div id="allmap" style={{ width: '100%', height: 500 }}></div>
        );
    }

}

export default Index;