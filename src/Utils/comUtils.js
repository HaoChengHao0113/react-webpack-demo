const comUtils = (function () {
    return {
        //接口访问路径
        // BASE_URL: 'http://10.32.66.22:7200/',
        BASE_URL: 'http://192.168.1.104:7200/',
        // UPLOAD_URL: 'http://10.32.66.22:7004/',
        UPLOAD_URL: 'http://192.168.1.104:7004/',
        yAxis: {
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#999999'
                },
                formatter: function (value) {
                    if (value >= 1000000000) {
                        return value / 1000000000 + '亿'
                    } else if (value >= 100000000) {
                        return value / 100000000 + '千万'
                    } else if (value >= 10000000) {
                        return value / 10000000 + '百万'
                    } else if (value >= 10000) {
                        return value / 10000 + '万'
                    } else {
                        return value;
                    }
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#cccccc',
                    type: 'dashed'
                }
            },
            min:0
        },
        percentY: {
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#999999'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#cccccc',
                    type: 'dashed'
                }
            },
            name: '',
            type: 'value',
            // scale: true,
            max: 100,
            min: 0,
            // boundaryGap: [0.2, 0.2],
            // splitNumber: 11,
        },
        /**
         * 绘制折线图
         * @param myChart
         * @param height
         * @param chartX
         * @param series
         * @param yAxis
         * @param unit
         * @returns {string}
         */
        goPainter(myChart, height, chartX, series, yAxis, unit) {
            let option = {
                grid: {
                    x: 50,
                    y: 15,
                    x2: 30,
                    y2: 100,
                    height: height
                },
                tooltip: {
                    trigger: 'axis',
                    formatter(params) {
                        let list = [];
                        let listItem = '';
                        for (let i = 0; i < params.length; i++) {
                            if (params[i].value == -1) {
                                list.push(
                                    `<i class="echart_toolDot" style="background:${params[i].color}"></i>
                                <span class="echart_toolTitle">${params[i].seriesName}</span>:<span class="mr3">采集失败</span>`)
                            } else if (params[i].value == null) {
                                list.push(
                                    `<i class="echart_toolDot" style="background:${params[i].color}"></i>
                                <span class="echart_toolTitle">${params[i].seriesName}</span>:<span class="mr3">采集被禁用</span>`)
                            } else {
                                list.push(
                                    `<i class="echart_toolDot" style="background:${params[i].color}"></i>
                                <span class="echart_toolTitle">${params[i].seriesName}</span>:<span class="mr3">${params[i].value}${unit}</span>`)
                            }
                        }
                        list.unshift(`<span>${params[0].axisValue}</span>`)
                        listItem = list.join('<br>')
                        return listItem;
                    },
                },
                dataZoom: [{
                    type: "inside",
                    start: 0,
                    end: 100,
                    minSpan: 10
                }],
                xAxis: {
                    data: chartX,
                    boundaryGap: false,//设置其从原点开始
                    axisLabel: {
                        margin: 20,
                        textStyle: {
                            color: '#999999'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#cccccc',
                            type: 'dashed'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                },
                yAxis: yAxis,
                series: series
            };
            myChart.setOption(option);
        },
        /*
        * 是否为空
        * 返回值 Boolean
        *  false :不为空
        *  true:为空
        * */
        isEmptyObject: function (obj) {
            for (var name in obj) {
                return false;
            }
            return true;
        },
        splitIp: function (ip) {
            if (ip) {
                return ip.split('@')[0];
            } else {
                return ''
            }
        },
        //IP验证
        validateIP: function (value) {
            var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
            return reg.test(value);
        },
        //设置cookie
        setCookie(name, value) {
            let Days = 30;
            let exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + encodeURI(value) + ";expires=" + exp.toGMTString();
        },
        //获取cookie
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if ((arr = document.cookie.match(reg))) return decodeURI(arr[2]);
            else return null;
        },
        //删除cookie
        delCookie(name) {
            let exp = new Date();
            exp.setTime(exp.getTime() - 1);
            let cval = Com.getCookie(name);
            if (cval !== null)
                document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        },
        //清除所有的cookie
        clearCookie() {
            let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
                for (let i = keys.length; i--;) {
                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
                }
            }
        },


    }
})();
export {comUtils}