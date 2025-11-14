export const search = async(query: string) => {

    //try localStorage
    try{
        const data = localStorage.getItem(query.trim().toLowerCase());
        console.log("inside the search utility function");
        console.log(data);
        if (data) {
            try{
                console.log("inside seacrh util try block");
                const parsedData = JSON.parse(data);
                if (parsedData?.ts && parsedData?.data){
                    return parsedData.data;
                }
            }catch(error){
                console.error("error with parsed data: ", error);
            }
        }
    }catch(error){
        console.error("error fetching item from local storage: ", error);
    }

    //try backend
    try{
        console.log(query);
        const response = await fetch('http://localhost:5000/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({room_name: query})
        });

        const data = await response.json();
        
        try{
            //localStorage.setItem()
        }catch{
            //
        }
        return data;
    }catch{
            //
    }
}

