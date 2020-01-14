import { Select } from 'antd';
import React, { Fragment, useState, useEffect } from 'react';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}
let Sellect = (({options})=>{
    return(
        // eslint-disable-next-line react/react-in-jsx-scope
        <Fragment>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                allowClear={true}
                autoFocus={true}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >

                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
            <br />
        </Fragment>
    )
}) 

export default Sellect