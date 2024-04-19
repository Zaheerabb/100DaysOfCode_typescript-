// Question 147: Explain how to handle errors in a callback pattern.

function logMsg(num:any) {
    console.log(num);
}

function add(callback: (error:Error | null, data?:number) => void ):void {
    const error = new Error("failed to fetch data");
    const data = Math.floor(Math.random() * 10);

    if (data > 5) {
        callback(null,data);
    } else {
        callback(error);
    }
}

add((error,data) => {
    if (error) {
        logMsg(error.message)
    } else {
        logMsg(data)
    }
});