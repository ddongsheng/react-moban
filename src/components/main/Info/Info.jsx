import React,{Fragment,Component} from "react";
import {connect} from "react-redux"
import { loadListDataAsyanc } from "./actionCreator";
import { Button } from 'antd';
 class Info extends Component{
     
    render(){
        console.log(this.props)
        return (
            <Fragment>
                <h1>我是信息页</h1>
                <div>
                    <ul>
                        {
                            this.props.listData.map((item,index)=>(
                                <li key={index}>{item.get("show_name")}</li>
                            ))
                        }
                    </ul>
                    <Button type="primary">test</Button>
                    <button onClick={this.props.handleTest.bind(this)}>send</button>
                </div>
            </Fragment>
        )
    }
    componentDidMount(){
        
    }
}

const mapStateToProps=(store)=>{
    console.log(store)
    return {
        listData:store.getIn(["infoReducer","listData"])
    }
}
//里面必需返回一个对象
const mapDispathToProps=(dispatch)=>({
   handleTest(){
       dispatch(loadListDataAsyanc(dispatch))
   }
})
export default connect(mapStateToProps,mapDispathToProps)(Info);