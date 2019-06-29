import axios from "axios"

export const GET_LIST_DATA="info/get_list_data";


export const loadListData=(res)=>{
    return {
        type:GET_LIST_DATA,
        res
    }
}

export const loadListDataAsyanc=(dispatch)=>{
    return ()=>{
        axios({
            method:'get',
            url:'/apis/home/getRecommendShow',
            data:{
                cityAdd:"",
                page:"2",
                version:"5.1.4",
                referer:"2"
            }
        }).then((res)=>{
            dispatch(loadListData(res.data.data.recommend_show_list))
        })
    }
}
