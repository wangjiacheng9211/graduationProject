import HeaderTmp from "../header/index";
import React, { FC, useEffect, useRef, useState } from 'react'
import { Layout, Menu } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import './index.less'
import 'antd/dist/antd.css';
import axios from 'axios'

import ContentItem from '../content_item'
import { MenuInfo, OptionType, RenderData, RurData } from '../interface/interface';
import AutoInput from '../auto_input/auto_input'
axios.defaults.baseURL = 'http://localhost:3000';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Warpper: FC<{}> = () => {

    const [activeKey, setActiveKey] = useState<React.Key>('')
    const [rurData, setRurData] = useState<RurData>([]);
    const [options, setOptions] = useState<OptionType[]>([]);
    const [renderdata, setRenderState] = useState<RenderData[]>([])
    let _options: OptionType[] = []
    const handleOnClick = (data: MenuInfo) => {
        const { item, key } = data
        setActiveKey(key)
    }
    async function getData(key: React.Key) {
        try {
            let res = await axios.get<RurData>('/users', {
                params: {
                    key,

                }
            })
            // return res;
            let returnData: RurData
            returnData = res.data;
            return new Promise<RurData>((resolve, reject) => {
                if (res.status >= 200 && res.status < 400) {
                    // if(returnData) setRurData(returnData)
                    // else setRurData([])
                    resolve(returnData)
                } else {
                    reject(returnData)
                }
            })
        } catch (err) {
            alert(`服务器出错`)
            console.log(err)
        }

    }

    useEffect(() => {
        const _getData = async ()=>{
            let _datasss: RurData | undefined = []
            _datasss = await getData(activeKey);
            let data:RenderData[] = []
            if (_datasss) {
                 setRurData(_datasss)
                 
                 data = _datasss.map(item => {
                    _options.push({ value: item.name })
                    return {
                        key: item.id,
                        name: item.name,
                        followers: item.followers,
                        desc: item.desc,
                        action: ''
                    }
                })
            }
            else setRurData([])
            data.sort((a, b) => {
                return b.followers - a.followers
            })
            setRenderState([...data])
            setOptions(_options)
        }
        _getData();
    }, [activeKey]);

   

    return (
        <div>
            <HeaderTmp />
            <Layout>
                <Header className="header">
                    <AutoInput transOptions={options} RenderData={renderdata} handleSetRenderdata={setRenderState} />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                defaultSelectedKeys={['0']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="dark"
                                onClick={handleOnClick}
                            >
                                <SubMenu key="A" icon={<ContainerOutlined />} title="A">
                                    <Menu.Item key="Financial">Financial</Menu.Item>
                                    <Menu.Item key="Data">Data</Menu.Item>
                                    <Menu.Item key="Social">Social</Menu.Item>
                                    <Menu.Item key="Tools">Tools</Menu.Item>
                                </SubMenu>
                                <SubMenu key="B" icon={<ContainerOutlined />} title="B">
                                    <Menu.Item key="eCommerce">eCommerce</Menu.Item>
                                    <Menu.Item key="Payments">Payments</Menu.Item>
                                    <Menu.Item key="Messaging">Messaging</Menu.Item>
                                    <Menu.Item key="Mobile">Mobile</Menu.Item>
                                </SubMenu>
                                <SubMenu key="C" icon={<ContainerOutlined />} title="C">
                                    <Menu.Item key="Mapping">Mapping</Menu.Item>
                                    <Menu.Item key="Analytics">Analytics</Menu.Item>
                                    <Menu.Item key="Search">Search</Menu.Item>
                                    <Menu.Item key="Cloud">Cloud</Menu.Item>
                                </SubMenu>
                                <SubMenu key="D" icon={<ContainerOutlined />} title="D">
                                    <Menu.Item key="Enterprise">Enterprise</Menu.Item>
                                    <Menu.Item key="Marketing">Marketing</Menu.Item>
                                    <Menu.Item key="Business">Business</Menu.Item>
                                    <Menu.Item key="Security">Security</Menu.Item>
                                </SubMenu>
                                <SubMenu key="E" icon={<ContainerOutlined />} title="E">
                                    <Menu.Item key="Government">Government</Menu.Item>
                                    <Menu.Item key="Telephony">Telephony</Menu.Item>
                                    <Menu.Item key="Reference">Reference</Menu.Item>
                                    <Menu.Item key="Science">Science</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280, textAlign: 'left' }}>
                            
                                <ContentItem keyItem={activeKey} rendata={renderdata} />
                                                
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>

        </div>
    )

}

export default Warpper;