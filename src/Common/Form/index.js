/***
 * create By ChengHao
 * date 2020.10.11
 * desc 封装的Form表单
 */
import React, { Component } from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';

class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Form
                    layout={this.props.layout}
                    onFinish={this.props.onFinish}
                >
                {
                    this.props.formList.map((item, index)=>{
                       if(item.type==='select'){
                           return (
                               <Form.Item
                                   name={item.name}
                                   label={item.label}
                                   key={index}
                               >
                                   <Select defaultValue={item.defaultValue} style={{ width: 120 }}>
                                       {
                                           item.option && item.option.map((value, keyIndex)=>{
                                               return (
                                                   <Select.Option value={value} key={keyIndex}>value</Select.Option>
                                               )
                                           })
                                       }
                                   </Select>
                               </Form.Item>
                           )
                       }
                       if(item.type==='input'){
                           return (
                               <Form.Item
                                   name={item.name}
                                   label={item.label}
                                   key={index}
                               >
                                   <Input suffix={item.suffix}/>
                               </Form.Item>
                           )
                       }
                        if(item.type==='datePicker'){
                            return (
                                <Form.Item
                                    name={item.name}
                                    label={item.label}
                                    key={index}
                                >
                                    <DatePicker picker={item.picker} mode={item.mode} allowClear={item.allowClear}/>
                                </Form.Item>
                            )
                        }
                    })
                }
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className={this.props.classStyle}
                        >
                            {this.props.buttonName}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Index;