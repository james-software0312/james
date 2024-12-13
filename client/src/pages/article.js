import React, {useState, useEffect} from "react";
import axios from "axios";
import { API_URL } from "../config/constants";
import { useDispatch } from "react-redux";
import { openSnackBar } from "../redux/snackBarReducer";
import Layout2 from "../Component/layout2";

export default function Article() {
    const dispatch = useDispatch();
    const [article, setArticle] = useState('');
    const [articleList, getArticleList] = useState([]);
    function handleClick(ev) {
        if(!article.length) {
            dispatch(openSnackBar({status: 'error',message: 'Content invalid'}))
            return;
        }
        axios.post(`${API_URL}/article/insert`, {article}).then(res => {
            console.log(res.data);
            if(res.data.success) {
                dispatch(openSnackBar({status: 'success', message: res.data.message}));
                setArticle('');
                
            } else {
                dispatch(openSnackBar({status: 'error', message: res.data.message}));
            }
        })
    }
    function handleChange(ev) {
        setArticle(ev.target.value);
    }

    useEffect(() => {
        axios.get(`${API_URL}/article/getArticles`).then(res => {
            console.log(res.data);
            getArticleList(res.data);
        })
    },[article])
    return (
        <Layout2>
            <div className="p-10 flex gap-[20px]">
                <input type="text" value={article} className = "bg-[#999] border-solid rounded-[3px] p-2 w-[70%]"
                    onChange = {handleChange}></input>
                <button className="rounded-[3px] bg-[#666] p-2" onClick={handleClick}>Submit</button>
            </div>
            <table className = ' table-auto border-collapse border border-slate-400 m-10'>
                <thead>
                    <tr>
                        <th className="border border-slate-300 pl-5 pr-5 text-left">No</th>
                        <th className="border border-slate-300 pl-5 pr-5 text-left">email</th>
                        <th className="border border-slate-300 pl-5 pr-5 text-left">Content</th>
                    </tr>
                </thead>
                <tbody>{
                    articleList.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="border border-slate-300 pl-5 pr-5 text-left">{index + 1}</td>
                                <td className="border border-slate-300 pl-5 pr-5 text-left">{item.user.email}</td>
                                <td className="border border-slate-300 pl-5 pr-5 text-left">{item.content}</td>
                            </tr>
                        )
                    })
                }</tbody>
            </table>
            {/* <div>
                {
                    articleList.map((item, index) => {
                        return(
                            <div key={index} className="flex gap-10 ml-10">
                                <p>{item.user.email}</p>
                                <p>{item.content}</p>
                            </div>
                        )
                    })
                }
            </div> */}
        </Layout2>
    )
}