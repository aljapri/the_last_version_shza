export const sendMessageAction = async({email,subject,message}:{email:string,subject:string,message:string})=>{
    try{
        const res = await fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email,subject,message}),
        });
        console.log(res);
        const data = await res.json();
        console.log(data)
        return "success"
    }catch(err){
        return "fail"
    }
}
