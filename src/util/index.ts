
    export const groupArrayByKey = (keyName  : string , arr: any[]) => {

        const res: {key: string, value: any[]}[] = []
        const mainKeys = extractKey(arr, keyName);
        mainKeys.forEach((k) => {
            let cur = arr.filter(x => x[keyName] === k); 
            res.push({
                key: k,
                value: cur
            });
        });
        return res ;

    }


    const extractKey = (arr: any[], keyName: string) => {
        const resBox: string[] = [];
        arr.forEach((e) => {
            for(const key in e){
            if(key === keyName){
                const val = e[key];
                if(!resBox.includes(val)){
                    resBox.push(val);
                }
            }
            }
        })
        return resBox; 
    }





