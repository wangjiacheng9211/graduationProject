import { FC, useEffect, useState } from 'react';
import {  OptionType, RenderData, RurData } from '../interface/interface';
import { Pagination } from 'antd';
import { Table, Tag, Space } from 'antd';

const ContentItem: FC<{ keyItem: React.Key,rendata:RenderData[] }> = ({ keyItem,rendata }) => {
    //当前激活的key值

    //函数内部状态
    //tables展示
    
   
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'Followers',
            dataIndex: 'followers',
            key: 'followers',
        },
        {
            title: 'Desc',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },
        
    ]
   
    return (
        <div>
            <div className={'data'}>
                <Table columns={columns} dataSource={[...rendata]}></Table>
            </div>
    
        </div>
    )
}
export default ContentItem