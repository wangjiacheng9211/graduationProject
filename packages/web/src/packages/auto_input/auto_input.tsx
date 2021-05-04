import { FC, useState } from 'react'
import { AutoComplete } from 'antd';
import { OptionType, RenderData } from '../interface/interface';

const AutoInput: FC<{transOptions:OptionType[], RenderData:RenderData[],handleSetRenderdata:React.Dispatch<React.SetStateAction<RenderData[]>> }> = ({transOptions ,RenderData,handleSetRenderdata}) => {


    const onSelect = (value: any)=>{
       
        let filterRenderData =  RenderData.filter(item=>{
            return item.name === value
        })
        handleSetRenderdata(filterRenderData)
    }
    return (
        <div className={'autoInput'} style={{ textAlign: 'right', paddingRight: '20%' }}>
            <AutoComplete
                options={transOptions}
                style={{
                    width: 200,
                    textAlign:'left'
                }}
                onSelect={onSelect}
                // onSearch={onSearch}
                filterOption={(inputValue, option) =>
                    {
                       
                        return option?option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1: false
                    }
                   
                  }
                placeholder="input here"
            />
        </div>
    )
}

export default AutoInput;