import axios from "axios";

export async function useFetch(url){
    try{
        const res = await axios.get(`${url}`);
        return res;
        // dispatch(loadNeeds(allNeedsRes.data));
    }catch(e){
        return console.error(e.message);
    }
}