swal({
    title:"สวัสดีครับผมชื่อ Java Script",
    text:"คุณต้องการรู้จักผมหรือไม่ ?",
    type:"success",
    showCancelButton:true,
    cancelButtonColor:"#DD6B55",
    confirmButtonColor:"#DD6B55",
    confirmButtonText:"Yes",
    cancelButtonText:"No",
    closeOnConfirm:false,
    closeOnCancel:false,
},
function(isConfirm){
   if(isConfirm){
       swal("Complete","Close Complete","success")
   }else{
       swal("Cancel","Eror Message","warning")
   }
});


