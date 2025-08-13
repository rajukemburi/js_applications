let random_num=Math.random()*100
random_num=Math.ceil(random_num)
function guess_number(){
    let currentValue=document.getElementById("input_number").value
    currentValue=parseInt(currentValue)
    console.log(currentValue)

    if (currentValue==random_num){
      document.getElementById("conclusion").textContent="Your Gussing Number is Correct!!!"   
    }else if(currentValue<random_num){
      document.getElementById("conclusion").textContent="Your Gussing Number is Too Low Try Again!!!"   
    }else if(currentValue>random_num){
      document.getElementById("conclusion").textContent="Your Gussing Number is Too High Try Again!!!"  
    }else{
      document.getElementById("conclusion").textContent="Enter a Valid Number!!!"   
    }
}